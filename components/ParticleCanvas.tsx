"use client";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number; // Depth for parallax and size
  radius: number;
  color: string;
  baseOpacity: number;
  vx: number;
  vy: number;
  pulseSpeed: number;
  pulseOffset: number;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const PARTICLE_COUNT = 120;
    let particles: Particle[] = [];
    let animFrameId: number;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    // Theme colors: Violet, Cyan, and subtle White
    const colors = ["139, 92, 246", "6, 182, 212", "226, 232, 240"];

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createParticles() {
      if (!canvas) return;
      particles = Array.from({ length: PARTICLE_COUNT }, () => {
        const z = Math.random() * 2 + 0.2; // Depth between 0.2 and 2.2
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: z,
          radius: (Math.random() * 1.5 + 0.5) * z,
          color: colors[Math.floor(Math.random() * colors.length)],
          baseOpacity: (Math.random() * 0.3 + 0.1) * (z / 2),
          vx: (Math.random() - 0.5) * 0.15 * z,
          vy: (Math.random() - 0.5) * 0.15 * z - 0.1 * z, // Gentle upward drift
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulseOffset: Math.random() * Math.PI * 2,
        };
      });
    }

    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth mouse interpolation for parallax
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Infinite wrapping
        if (p.x < -50) p.x = canvas.width + 50;
        if (p.x > canvas.width + 50) p.x = -50;
        if (p.y < -50) p.y = canvas.height + 50;
        if (p.y > canvas.height + 50) p.y = -50;

        // Parallax offset based on mouse and particle depth
        const offsetX = currentMouseX * p.z * 0.03;
        const offsetY = currentMouseY * p.z * 0.03;

        // Calculate sparkling opacity
        const pulse = Math.sin(Date.now() * p.pulseSpeed * 0.1 + p.pulseOffset);
        const currentOpacity = Math.max(0, p.baseOpacity + pulse * 0.15);

        ctx.beginPath();
        ctx.arc(p.x + offsetX, p.y + offsetY, p.radius, 0, Math.PI * 2);
        
        // Add subtle glow
        ctx.shadowBlur = p.radius * 3;
        ctx.shadowColor = `rgba(${p.color}, ${currentOpacity})`;
        ctx.fillStyle = `rgba(${p.color}, ${currentOpacity})`;
        
        ctx.fill();
        ctx.shadowBlur = 0; // Reset
      });

      animFrameId = requestAnimationFrame(animate);
    }

    function handleMouseMove(e: MouseEvent) {
      // Offset from center
      targetMouseX = e.clientX - window.innerWidth / 2;
      targetMouseY = e.clientY - window.innerHeight / 2;
    }

    resize();
    createParticles();
    animate();
    window.addEventListener("resize", () => {
      resize();
      createParticles(); // Recreate on resize to fill new bounds properly
    });
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
}
