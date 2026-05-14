import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isCoarse, setIsCoarse] = useState(true);

  useEffect(() => {
    // Check if device uses coarse pointer (touch)
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    setIsCoarse(isTouchDevice);

    if (!isTouchDevice) {
      const handleMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  if (isCoarse) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-primary/50 pointer-events-none z-50 flex items-center justify-center mix-blend-screen shadow-[0_0_15px_rgba(199,125,255,0.4)]"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
      }}
      transition={{
        type: 'spring',
        damping: 30,
        stiffness: 300,
        mass: 0.5,
      }}
    >
      <div className="w-1.5 h-1.5 bg-brand-primary rounded-full shadow-[0_0_8px_#C77DFF]" />
    </motion.div>
  );
}
