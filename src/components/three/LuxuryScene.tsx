"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function FloatingSymbol() {
  const group = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const isMobile = viewport.width < 4;

  useFrame(({ clock }) => {
    if (!group.current) {
      return;
    }

    const time = clock.getElapsedTime();
    group.current.rotation.y = time * 0.22;
    group.current.rotation.z = Math.sin(time * 0.36) * 0.08;
    group.current.position.y = Math.sin(time * 0.65) * 0.18;
  });

  return (
    <group
      ref={group}
      position={[isMobile ? 0.72 : 1.25, isMobile ? -0.08 : 0.05, -0.25]}
      scale={isMobile ? 0.58 : 0.88}
    >
      <mesh>
        <torusGeometry args={[1.02, 0.035, 24, 144]} />
        <meshStandardMaterial
          color="#C9A227"
          metalness={0.9}
          roughness={0.22}
          emissive="#6B5411"
          emissiveIntensity={0.15}
        />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[1.5, 0.06, 0.06]} />
        <meshStandardMaterial color="#C9A227" metalness={0.9} roughness={0.24} />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[1.46, 0.055, 0.055]} />
        <meshStandardMaterial color="#C9A227" metalness={0.9} roughness={0.24} />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[1.22, 0.045, 0.045]} />
        <meshStandardMaterial color="#C9A227" metalness={0.9} roughness={0.24} />
      </mesh>
    </group>
  );
}

function GoldParticles() {
  const points = useRef<THREE.Points>(null);
  const material = useRef<THREE.PointsMaterial>(null);
  const { viewport, pointer } = useThree();

  const positions = useMemo(() => {
    const mobile = typeof window !== "undefined" && window.innerWidth < 768;
    const count = mobile ? 95 : 230;
    const values = new Float32Array(count * 3);

    for (let index = 0; index < count; index += 1) {
      values[index * 3] = (Math.random() - 0.5) * viewport.width * 1.8;
      values[index * 3 + 1] = (Math.random() - 0.5) * viewport.height * 1.5;
      values[index * 3 + 2] = (Math.random() - 0.5) * 4.8;
    }

    return values;
  }, [viewport.height, viewport.width]);

  useFrame(({ clock }) => {
    if (!points.current) {
      return;
    }

    const time = clock.getElapsedTime();
    points.current.rotation.y = time * 0.018 + pointer.x * 0.06;
    points.current.rotation.x = pointer.y * 0.035;
    points.current.position.x = pointer.x * 0.18;
    points.current.position.y = pointer.y * 0.08;

    if (material.current) {
      material.current.opacity = 0.48 + Math.sin(time * 0.8) * 0.08;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        ref={material}
        size={0.022}
        color="#C9A227"
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export function LuxuryScene() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 h-full w-full">
      <Canvas
        className="h-full w-full"
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        dpr={[1, 1.6]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          preserveDrawingBuffer: true
        }}
      >
        <ambientLight intensity={0.28} color="#F8F7F2" />
        <directionalLight position={[3, 4, 5]} intensity={1.05} color="#C9A227" />
        <pointLight position={[-2.5, -1.5, 2.5]} intensity={1.8} color="#064E3B" />
        <GoldParticles />
        <FloatingSymbol />
      </Canvas>
    </div>
  );
}
