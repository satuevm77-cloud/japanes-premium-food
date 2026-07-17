import type { ImgHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type RemoteImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "alt"> & {
  alt: string;
  fill?: boolean;
  priority?: boolean;
};

export function RemoteImage({
  fill = false,
  priority = false,
  loading,
  className,
  alt,
  ...props
}: RemoteImageProps) {
  return (
    <img
      {...props}
      alt={alt}
      loading={priority ? "eager" : loading ?? "lazy"}
      decoding="async"
      className={cn(fill && "absolute inset-0 h-full w-full", className)}
    />
  );
}
