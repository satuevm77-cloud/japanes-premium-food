import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";

const baseUrl = process.env.SITE_URL ?? "http://127.0.0.1:3000";
const outputDir = "test-results/visual";
const viewports = [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "mobile", width: 390, height: 844 }
];

await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch();

for (const viewport of viewports) {
  const page = await browser.newPage({
    viewport: { width: viewport.width, height: viewport.height },
    deviceScaleFactor: viewport.name === "mobile" ? 2 : 1
  });

  await page.goto(baseUrl, { waitUntil: "networkidle", timeout: 45000 });
  await page.waitForTimeout(2400);

  const screenshotPath = `${outputDir}/home-${viewport.name}.png`;
  await page.screenshot({ path: screenshotPath, fullPage: false });

  const canvas = await page.evaluate(() => {
    const element = document.querySelector("canvas");

    if (!(element instanceof HTMLCanvasElement)) {
      return { found: false, width: 0, height: 0, nonBlankSamples: 0 };
    }

    const gl = element.getContext("webgl2") ?? element.getContext("webgl");

    if (!gl) {
      return {
        found: true,
        width: element.width,
        height: element.height,
        nonBlankSamples: 0
      };
    }

    const width = gl.drawingBufferWidth;
    const height = gl.drawingBufferHeight;
    const pixels = new Uint8Array(width * height * 4);
    gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);

    let nonBlankSamples = 0;
    const step = Math.max(4, Math.floor(Math.min(width, height) / 40));

    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const offset = (y * width + x) * 4;
        const alpha = pixels[offset + 3];
        const intensity = pixels[offset] + pixels[offset + 1] + pixels[offset + 2];

        if (alpha > 0 && intensity > 12) {
          nonBlankSamples += 1;
        }
      }
    }

    return { found: true, width, height, nonBlankSamples };
  });

  console.log(
    `${viewport.name}: screenshot=${screenshotPath}; canvas=${JSON.stringify(canvas)}`
  );

  if (!canvas.found || canvas.width === 0 || canvas.height === 0) {
    throw new Error(`Canvas not found for ${viewport.name}`);
  }

  if (canvas.nonBlankSamples < 8) {
    throw new Error(`Canvas looks blank for ${viewport.name}`);
  }

  await page.close();
}

await browser.close();
