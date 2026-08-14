"use client";
import { useEffect, useRef } from "react";

interface WebNode {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  pulseOffset: number;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const NODE_COUNT = isMobile ? 28 : 70;
    const CONNECTION_DIST = isMobile ? 140 : 180;
    const MOUSE_RADIUS = 200;
    const MOUSE_FORCE = 0.06;

    let nodes: WebNode[] = [];
    let animFrameId: number;
    let mouseX = -9999;
    let mouseY = -9999;

    // Spider-Man themed colors: reds, dim blues, subtle white
    const nodeColors = [
      "220, 38, 38",   // red-600
      "185, 28, 28",   // red-800
      "59, 130, 246",  // blue-500
      "30, 64, 175",   // blue-800
      "148, 163, 184", // slate-400
    ];

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createNodes() {
      if (!canvas) return;
      nodes = Array.from({ length: NODE_COUNT }, () => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        return {
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.8 + 0.6,
          color: nodeColors[Math.floor(Math.random() * nodeColors.length)],
          pulseOffset: Math.random() * Math.PI * 2,
        };
      });
    }

    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const time = Date.now() * 0.001;

      // Update nodes
      for (const node of nodes) {
        // Gentle drift
        node.x += node.vx;
        node.y += node.vy;

        // Boundary wrapping with padding
        if (node.x < -30) node.x = canvas.width + 30;
        if (node.x > canvas.width + 30) node.x = -30;
        if (node.y < -30) node.y = canvas.height + 30;
        if (node.y > canvas.height + 30) node.y = -30;

        // Mouse attraction (web tension effect)
        if (!isMobile) {
          const dx = mouseX - node.x;
          const dy = mouseY - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_RADIUS && dist > 0) {
            const force = (1 - dist / MOUSE_RADIUS) * MOUSE_FORCE;
            node.x += dx * force;
            node.y += dy * force;
          }
        }
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DIST) {
            const opacity = (1 - dist / CONNECTION_DIST) * 0.2;

            // Lines near mouse glow brighter red
            let lineColor = `rgba(220, 38, 38, ${opacity})`;
            if (!isMobile) {
              const midX = (nodes[i].x + nodes[j].x) / 2;
              const midY = (nodes[i].y + nodes[j].y) / 2;
              const mouseDist = Math.sqrt(
                (mouseX - midX) ** 2 + (mouseY - midY) ** 2
              );
              if (mouseDist < MOUSE_RADIUS) {
                const glow = (1 - mouseDist / MOUSE_RADIUS);
                const glowOpacity = opacity + glow * 0.25;
                lineColor = `rgba(220, 38, 38, ${Math.min(glowOpacity, 0.5)})`;
              }
            }

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.4 + (1 - dist / CONNECTION_DIST) * 0.3;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        const pulse = Math.sin(time * 1.5 + node.pulseOffset) * 0.3 + 0.7;
        const nodeOpacity = 0.35 * pulse;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${node.color}, ${nodeOpacity})`;

        // Subtle glow
        ctx.shadowBlur = node.radius * 4;
        ctx.shadowColor = `rgba(${node.color}, ${nodeOpacity * 0.5})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animFrameId = requestAnimationFrame(animate);
    }

    function handleMouseMove(e: MouseEvent) {
      if (isMobile) return;
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    function handleMouseLeave() {
      mouseX = -9999;
      mouseY = -9999;
    }

    resize();
    createNodes();
    animate();

    window.addEventListener("resize", () => {
      resize();
      createNodes();
    });
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.85 }}
    />
  );
}
