import { useState, useEffect, useRef } from 'react';

export default function SplineBackground() {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate mouse position as percentage (-1 to 1)
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate parallax transform with stronger effect
  const parallaxX = mousePosition.x * 30;
  const parallaxY = mousePosition.y * 30;

  return (
    <div ref={containerRef} className="absolute inset-0 -z-10 overflow-hidden">
      {/* Ambient glow effects with parallax */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Center glow - larger and brighter */}
        <div
          className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] rounded-full blur-3xl opacity-50 transition-transform duration-200 ease-out"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary)/0.8), transparent 70%)",
            transform: `translate(-50%, -50%) translate(${parallaxX * 0.6}px, ${parallaxY * 0.6}px)`,
          }}
        />
        {/* Secondary glow - brighter */}
        <div
          className="absolute top-1/3 left-1/3 w-[700px] h-[700px] rounded-full blur-3xl opacity-35 transition-transform duration-200 ease-out"
          style={{
            background: "radial-gradient(circle, rgba(255, 107, 0, 0.6), transparent 60%)",
            transform: `translate(${parallaxX * 0.4}px, ${parallaxY * 0.4}px)`,
          }}
        />
        {/* Additional accent glow */}
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-25 transition-transform duration-200 ease-out"
          style={{
            background: "radial-gradient(circle, rgba(255, 150, 50, 0.5), transparent 60%)",
            transform: `translate(${parallaxX * 0.5}px, ${parallaxY * 0.5}px)`,
          }}
        />
      </div>
      
      <div 
        className="absolute inset-0 opacity-90 transition-all duration-200 ease-out"
        style={{
          transform: `translate(${parallaxX}px, ${parallaxY}px) scale(1.08) rotate(${mousePosition.x * 2}deg)`,
        }}
      >
        <iframe
          src="https://my.spline.design/orb-C2r252ps8or9BHmO6Nvu8l4C/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="transition-opacity duration-500"
          style={{ 
            opacity: isLoading ? 0.5 : 1,
            filter: 'brightness(1.6) contrast(1.2) saturate(1.1)',
            pointerEvents: 'none'
          }}
        />
      </div>
    </div>
  );
}
