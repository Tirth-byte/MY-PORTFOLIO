import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const row1 = [
  "SIH 2025 Qualified · National Level",
  "3rd Place · CodeVersity IIT Gandhinagar",
  "Finalist · Student HackPad",
  "HackerRank 5★ Gold · C",
  "Contributor · Open Source Next.js"
];

const row2 = [
  "Built Qeist Architecture",
  "HackerRank 5★ Gold · C++",
  "Deployed 6 Live Ventures",
  "Published: The Truth Behind AI",
  "Founder · SchoolOS"
];

export default function AchievementsTicker() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Duplicate items to ensure seamless scroll
  const r1 = [...row1, ...row1, ...row1];
  const r2 = [...row2, ...row2, ...row2];

  const dur1 = isMobile ? 25 : 20;
  const dur2 = isMobile ? 35 : 30;
  const textSize = isMobile ? 'text-[12px]' : 'text-sm md:text-base';

  return (
    <section className="w-full py-10 md:py-[80px] bg-brand-primary/5 border-y border-brand-primary/10 overflow-hidden flex flex-col gap-4 md:gap-6 relative">
      <div className="absolute left-0 top-0 bottom-0 w-[15%] bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-[15%] bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none" />
      
      {/* Row 1 - Left to Right */}
      <div className="w-full overflow-hidden flex whitespace-nowrap">
        <motion.div 
          className="flex gap-8 md:gap-16 w-max items-center"
          animate={{ x: ["-33.33%", "0%"] }}
          transition={{ duration: dur1, ease: "linear", repeat: Infinity }}
        >
          {r1.map((item, i) => (
            <div key={i} className={`font-mono text-brand-dim uppercase tracking-widest ${textSize} flex items-center gap-8 md:gap-16`}>
              <span className="flex items-center gap-3">
                {item}
                {i % 2 === 0 && <span className="text-brand-primary/50 text-[10px]">✨</span>}
              </span>
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-primary/40 shadow-[0_0_8px_rgba(199,125,255,0.5)]"></span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2 - Right to Left */}
      <div className="w-full overflow-hidden flex whitespace-nowrap">
        <motion.div 
          className="flex gap-8 md:gap-16 w-max items-center"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ duration: dur2, ease: "linear", repeat: Infinity }}
        >
          {r2.map((item, i) => (
            <div key={i} className={`font-mono text-brand-dim uppercase tracking-widest ${textSize} flex items-center gap-8 md:gap-16`}>
              <span className="flex items-center gap-3">
                {item}
                {i % 2 !== 0 && <span className="text-brand-secondary/50 text-[10px]">✦</span>}
              </span>
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-secondary/40 shadow-[0_0_8px_rgba(224,170,255,0.5)]"></span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
