import { useState, useEffect } from 'react';

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="contact" className="w-full py-[80px] md:py-[120px] px-6 lg:px-[80px] flex flex-col items-center justify-center relative min-h-[60vh]">
      <div className="font-mono text-[11px] md:text-[13px] text-brand-primary tracking-[2px] mb-8 uppercase text-center flex items-center gap-4">
        <span className="text-brand-secondary animate-pulse">✧</span>
        &gt; SEND A MISSIVE
        <span className="text-brand-tertiary animate-[pulse_3s_ease-in-out_infinite]">✦</span>
      </div>
      
      <h2 className="font-display font-extrabold text-[clamp(36px,10vw,72px)] text-white text-center leading-[1.1] tracking-tight mb-8 md:mb-12 max-w-4xl">
        Ready to solve hard problems?
      </h2>
      
      <p className="font-sans text-brand-dim text-center text-[15px] md:text-[17px] max-w-xl mb-12">
        Whether you want to collaborate on research, build something ambitious, or discuss the future of decentralized infrastructure—my inbox is open.
      </p>
      
      <div className={`w-full max-w-3xl flex ${isMobile ? 'flex-col gap-3.5' : 'flex-row justify-center gap-6'}`}>
        <a 
          href="mailto:kavartirth9@gmail.com"
          className={`
          inline-block bg-brand-primary text-brand-bg font-mono font-bold uppercase tracking-wider rounded
          hover:bg-brand-primary/90 transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(199,125,255,0.3)]
          ${isMobile ? 'w-full py-4 text-center text-sm' : 'px-8 py-4 text-sm'}
        `}>
          Send Missive
        </a>
        <a 
          href="https://x.com/tirthpatel60601?s=21"
          target="_blank"
          rel="noopener noreferrer"
          className={`
          inline-block bg-transparent text-white border border-brand-dim font-mono uppercase tracking-wider rounded
          hover:border-white hover:bg-white/5 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]
          ${isMobile ? 'w-full py-4 text-center text-sm' : 'px-8 py-4 text-sm'}
        `}>
          Twitter / X
        </a>
        <a 
          href="https://www.linkedin.com/in/tirth-patel-b70312373/"
          target="_blank"
          rel="noopener noreferrer"
          className={`
          inline-block bg-transparent text-white border border-brand-dim font-mono uppercase tracking-wider rounded
          hover:border-white hover:bg-white/5 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]
          ${isMobile ? 'w-full py-4 text-center text-sm' : 'px-8 py-4 text-sm'}
        `}>
          LinkedIn
        </a>
      </div>

      <div className="absolute bottom-10 text-center w-full font-mono text-[10px] text-brand-dim/50 uppercase tracking-widest pointer-events-none">
        © 2026 TIRTH PATEL · INDIA
      </div>
    </section>
  );
}
