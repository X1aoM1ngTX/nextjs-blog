"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

interface MermaidProps {
  chart: string;
}

export default function Mermaid({ chart }: MermaidProps) {
  const mermaidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: "neutral",
      securityLevel: "loose",
    });
  }, []);

  useEffect(() => {
    if (mermaidRef.current) {
      mermaid
        .run({
          nodes: [mermaidRef.current],
        })
        .catch((error) => {
          console.error("Mermaid render error:", error);
        });
    }
  }, [chart]);

  return (
    <div
      ref={mermaidRef}
      className="mermaid"
      suppressHydrationWarning
    >
      {chart}
    </div>
  );
}
