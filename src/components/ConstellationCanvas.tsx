import { useEffect, useRef } from 'react';

interface ConstellationCanvasProps {
  isMobile: boolean;
}

export default function ConstellationCanvas({ isMobile }: ConstellationCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = container.clientWidth;
    let height = container.clientHeight;
    
    // Resize handler
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        width = entry.contentRect.width;
        height = entry.contentRect.height;
        canvas.width = width;
        canvas.height = height;
        initParticles();
      }
    });
    resizeObserver.observe(container);

    let animationFrameId: number;
    
    const numParticles = isMobile ? 20 : 35;
    const namedNodes = ["SkillMatch", "Qeist", "Galaxy Zoo", "SchoolOS", "Marwadi Univ"];
    const particles: Particle[] = [];
    
    const mouse = { x: -1000, y: -1000 };
    
    // Disable mouse repel on coarse devices, but bind if not mobile
    const onMouseMove = (e: MouseEvent) => {
      if (isMobile) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    
    const onMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    if (!isMobile) {
      canvas.addEventListener('mousemove', onMouseMove);
      canvas.addEventListener('mouseleave', onMouseLeave);
    }

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      name?: string;

      constructor(name?: string) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = name ? 3 : 1.5;
        this.name = name;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Repel from mouse
        if (!isMobile) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            const force = (100 - dist) / 100;
            this.x -= (dx / dist) * force * 2;
            this.y -= (dy / dist) * force * 2;
          }
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.name ? '#C77DFF' : '#5A189A';
        ctx.fill();

        if (this.name) {
          ctx.shadowColor = '#C77DFF';
          ctx.shadowBlur = 10;
          ctx.fillStyle = '#E0AAFF';
          ctx.font = isMobile ? '9px "Fira Code"' : '12px "Cormorant Garamond"';
          ctx.fillText(this.name, this.x + 8, this.y + 4);
          ctx.shadowBlur = 0; // reset
        }
      }
    }

    function initParticles() {
      particles.length = 0;
      for (let i = 0; i < numParticles; i++) {
        const name = i < namedNodes.length ? namedNodes[i] : undefined;
        particles.push(new Particle(name));
      }
    }

    function render() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(199, 125, 255, ${0.15 - dist / 120 * 0.15})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    }

    initParticles();
    render();

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (!isMobile) {
        canvas.removeEventListener('mousemove', onMouseMove);
        canvas.removeEventListener('mouseleave', onMouseLeave);
      }
    };
  }, [isMobile]);

  return (
    <div ref={containerRef} className="w-full h-full min-h-[220px] rounded-lg border border-brand-primary/20 bg-brand-bg-alpha/30 overflow-hidden relative shadow-[0_0_20px_rgba(157,78,221,0.1)]">
      <canvas ref={canvasRef} className="absolute inset-0 block" />
    </div>
  );
}
