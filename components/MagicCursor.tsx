
import React, { useEffect, useState, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
}

export const MagicCursor: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const countRef = useRef(0);

  useEffect(() => {
    const colors = ['#ffe115', '#ec061e', '#3a935e', '#231f20'];

    const handleMouseMove = (e: MouseEvent) => {
      // Throttle creation for performance and aesthetic spacing
      if (Math.random() > 0.4) return; 

      const newParticle: Particle = {
        id: countRef.current++,
        x: e.clientX,
        y: e.clientY,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 10 + 5,
      };

      setParticles((prev) => [...prev, newParticle]);

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, 600);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            transform: 'translate(-50%, -50%)',
            animation: 'fall-and-fade 0.6s forwards ease-out'
          }}
        />
      ))}
      <style>{`
        @keyframes fall-and-fade {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          100% { transform: translate(-50%, 20px) scale(0); opacity: 0; }
        }
      `}</style>
    </div>
  );
};
