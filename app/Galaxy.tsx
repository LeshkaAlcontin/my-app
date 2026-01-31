"use client";

import { useEffect, useRef } from "react";

type GalaxyProps = {
  mouseRepulsion?: boolean;
  mouseInteraction?: boolean;
  density?: number;
  glowIntensity?: number;
};

export default function Galaxy({
  mouseRepulsion = false,
  mouseInteraction = false,
  density = 1,
  glowIntensity = 0.3,
}: GalaxyProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 🔴 This is where ogl / React Bits logic goes
    console.log({
      mouseRepulsion,
      mouseInteraction,
      density,
      glowIntensity,
    });

    // You will paste the actual React Bits Galaxy logic here later
  }, [mouseRepulsion, mouseInteraction, density, glowIntensity]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
    />
  );
}
