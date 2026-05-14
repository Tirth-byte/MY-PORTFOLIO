import { useEffect, useState, useRef } from 'react';

const terminalData = [
  { prompt: '> whoami', output: ['tirth-patel — 19 · builder · founder'] },
  { prompt: '> cat philosophy.txt', output: ['Ship first. Understand why it worked later.', "India's problems deserve Indian founders."] },
  { prompt: '> ls ventures/', output: ['qeist/  health-records/  schoolos/  xinity/'] },
  { prompt: '> ls projects/', output: ['galaxy-zoo/  skillmatch/  voxel-air/  guardian-angel/'] },
  { prompt: '> cat achievements.log', output: ['[2026] 3rd place · CodeVersity · IIT Gandhinagar', '[2025] Finalist · Student HackPad · National', '[2025] SIH 2025 · Qualified · National Level', '[*]    HackerRank 5★ Gold · C · C++'] },
  { prompt: '> cat education.txt', output: ['Marwadi University · B.Tech CSE (AI & ML) · 2027', 'Morbi, Gujarat, India'] }
];

export default function Terminal() {
  const [displayedLines, setDisplayedLines] = useState<{ type: 'prompt' | 'output', text: string, id: string }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          startTyping();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, [hasStarted]);

  const startTyping = async () => {
    setIsTyping(true);
    const isMobile = window.innerWidth <= 767;
    const charDelay = isMobile ? 25 : 35;
    const lineDelay = isMobile ? 150 : 300;

    const newLines: typeof displayedLines = [];

    for (let i = 0; i < terminalData.length; i++) {
      const block = terminalData[i];
      
      // Type prompt
      newLines.push({ type: 'prompt', text: '', id: `prompt-${i}` });
      setDisplayedLines([...newLines]);
      
      for (let j = 0; j < block.prompt.length; j++) {
        newLines[newLines.length - 1].text += block.prompt[j];
        setDisplayedLines([...newLines]);
        // Scroll to bottom
        if (containerRef.current) containerRef.current.scrollTop = containerRef.current.scrollHeight;
        await new Promise(r => setTimeout(r, charDelay));
      }

      await new Promise(r => setTimeout(r, lineDelay));

      // Show output instantly
      for (let j = 0; j < block.output.length; j++) {
        newLines.push({ type: 'output', text: block.output[j], id: `out-${i}-${j}` });
        setDisplayedLines([...newLines]);
        if (containerRef.current) containerRef.current.scrollTop = containerRef.current.scrollHeight;
        await new Promise(r => setTimeout(r, lineDelay / 2));
      }
      
      await new Promise(r => setTimeout(r, lineDelay));
    }
    
    setIsTyping(false);
  };

  return (
    <div 
      className="w-full md:w-full max-w-full rounded-lg bg-[#05010A]/80 backdrop-blur-md border border-brand-primary/20 shadow-[0_0_30px_rgba(199,125,255,0.1)] overflow-hidden flex flex-col md:min-h-[420px] mt-8 md:mt-0"
    >
      {/* Title Bar */}
      <div className="h-10 border-b border-brand-primary/20 flex items-center px-4 bg-[#030008] shrink-0 sticky top-0 z-10 transition-colors gap-2">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-brand-secondary shadow-[0_0_8px_var(--color-brand-secondary)]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-brand-primary shadow-[0_0_8px_var(--color-brand-primary)]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-brand-tertiary shadow-[0_0_8px_var(--color-brand-tertiary)]"></div>
        </div>
        <div className="flex-1 text-center font-mono text-[11px] md:text-sm text-brand-primary/60 truncate px-4">
          ✦ arcane_log: ~/portfolio
        </div>
      </div>

      {/* Content */}
      <div 
        ref={containerRef}
        className="p-5 md:p-6 font-mono text-[13px] md:text-[14px] leading-[1.8] text-[#A1B3C4] overflow-y-auto max-h-[380px] md:max-h-none -webkit-overflow-scrolling-touch flex-1"
      >
        {displayedLines.map((line) => (
          <div 
            key={line.id} 
            className={line.type === 'prompt' ? "text-brand-primary mt-4 first:mt-0 font-medium drop-shadow-[0_0_8px_rgba(199,125,255,0.4)]" : "pl-4 text-brand-secondary/80"}
          >
            {line.text}
          </div>
        ))}
        {isTyping && (
          <div className="inline-block w-2.5 h-[14px] bg-brand-primary shadow-[0_0_8px_rgba(199,125,255,0.8)] animate-pulse ml-1 align-middle" />
        )}
        {!isTyping && hasStarted && (
          <div className="mt-4 text-brand-primary">
            &gt; <span className="inline-block w-2.5 h-[14px] bg-brand-primary shadow-[0_0_8px_rgba(199,125,255,0.8)] animate-pulse align-middle" />
          </div>
        )}
      </div>
    </div>
  );
}
