import React, { useEffect, useRef } from 'react';

interface LeafParticle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  opacity: number;
  swayAmplitude: number;
  swayFrequency: number;
  swayPhase: number;
}

interface LeafParticlesCanvasProps {
  density?: number;
  className?: string;
  interactive?: boolean;
}

export const LeafParticlesCanvas: React.FC<LeafParticlesCanvasProps> = ({
  density = 16,
  className = "absolute inset-0 pointer-events-none overflow-hidden",
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    if (interactive && canvas.parentElement) {
      canvas.parentElement.addEventListener('mousemove', handleMouseMove);
      canvas.parentElement.addEventListener('mouseleave', handleMouseLeave);
    }

    // Leaf and Organic Seed Particle Colors
    const palette = [
      '#52B788', // Emerald Leaf Green
      '#74C69D', // Light Green
      '#95D5B2', // Mint Leaf Accent
      '#D8F3DC', // Soft Leaf Green
      '#E0A96D', // Warm Golden Areca Sand
      '#C5832B', // Organic Gold
    ];

    const particles: LeafParticle[] = [];
    const count = Math.min(Math.max(density, 8), 35);

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 8 + 6,
        speedY: Math.random() * 0.4 + 0.25,
        speedX: Math.random() * 0.3 - 0.15,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        color: palette[Math.floor(Math.random() * palette.length)],
        opacity: Math.random() * 0.4 + 0.15,
        swayAmplitude: Math.random() * 1.5 + 0.5,
        swayFrequency: Math.random() * 0.02 + 0.01,
        swayPhase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    const drawLeaf = (
      c: CanvasRenderingContext2D,
      p: LeafParticle
    ) => {
      c.save();
      c.translate(p.x, p.y);
      c.rotate(p.rotation);
      c.globalAlpha = p.opacity;
      c.fillStyle = p.color;

      // Stylized Palm Leaf Silhouette
      c.beginPath();
      const s = p.size;
      c.moveTo(0, -s);
      c.bezierCurveTo(s * 0.6, -s * 0.5, s * 0.8, s * 0.3, 0, s);
      c.bezierCurveTo(-s * 0.8, s * 0.3, -s * 0.6, -s * 0.5, 0, -s);
      c.fill();

      // Subtle Center Leaf Vein Line
      c.strokeStyle = '#FFFFFF';
      c.globalAlpha = p.opacity * 0.7;
      c.lineWidth = 0.75;
      c.beginPath();
      c.moveTo(0, -s * 0.85);
      c.lineTo(0, s * 0.85);
      c.stroke();

      c.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 1;

      particles.forEach((p) => {
        // Natural swaying oscillation
        const sway = Math.sin(time * p.swayFrequency + p.swayPhase) * p.swayAmplitude;
        p.x += p.speedX + sway;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        // Mouse repelling/gentle gust interaction
        if (mouseRef.current.active) {
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120 && dist > 0) {
            const force = (120 - dist) / 120;
            p.x += (dx / dist) * force * 1.5;
            p.y += (dy / dist) * force * 1.5;
            p.rotation += force * 0.05;
          }
        }

        // Screen wrap-around
        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x < -30) p.x = width + 30;
        if (p.x > width + 30) p.x = -30;

        drawLeaf(ctx, p);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (canvas.parentElement) {
        canvas.parentElement.removeEventListener('mousemove', handleMouseMove);
        canvas.parentElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [density, interactive]);

  return <canvas ref={canvasRef} className={className} />;
};
