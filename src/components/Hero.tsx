import { useState, useEffect } from 'react';
import ConstellationCanvas from './ConstellationCanvas';

export default function Hero({ isMobile }: { isMobile: boolean }) {
  const stats = [
    { num: '3+', label: 'YEARS IN AI' },
    { num: '6', label: 'LIVE VENTURES' },
    { num: '12K', label: 'USERS REACHED' },
    { num: '2+', label: 'PUBLICATIONS' },
  ];

  return (
    <section className={`w-full min-h-screen flex items-center pt-[70px] ${isMobile ? 'flex-col justify-center px-6 pb-10' : 'px-12 lg:px-[80px]'}`}>
      {isMobile ? (
        // MOBILE LAYOUT
        <div className="w-full flex flex-col items-start">
          <div className="font-mono text-[11px] text-brand-primary tracking-[3px] mb-4 uppercase">
            ✦ TIRTH PATEL — RAJKOT, INDIA
          </div>
          
          <h1 className="font-display font-medium text-[clamp(42px,11vw,72px)] leading-[1] mb-5 tracking-tight">
            <div className="text-white italic whitespace-nowrap">AI Engineer.</div>
            <div className="text-brand-primary whitespace-nowrap">Founder.</div>
            <div className="text-white/30 text-[clamp(28px,6vw,44px)] mt-2 whitespace-nowrap">Age 19.</div>
          </h1>

          <p className="font-sans font-light text-[15px] text-brand-dim leading-[1.7] max-w-[340px] mb-8">
            Building intelligent systems and decentralized infrastructure to solve hard global problems.
          </p>

          <div className="grid grid-cols-2 gap-4 w-full mb-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-display font-medium text-[28px] text-brand-primary">{s.num}</div>
                <div className="font-mono text-[10px] text-brand-dim uppercase">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="w-full h-[280px] mb-8 relative flex items-center justify-center">
            <div className="absolute inset-0 z-0">
              <ConstellationCanvas isMobile={isMobile} />
            </div>
            
            <div className="absolute top-[10%] right-[10%] text-brand-secondary text-lg animate-pulse">✦</div>
            <div className="absolute bottom-[20%] left-[5%] text-brand-primary text-sm animate-pulse delay-150">✧</div>
            <div className="absolute top-[30%] left-[10%] text-brand-dim text-xs animate-pulse delay-300">✨</div>

            <div className="relative z-10 w-[160px] h-[160px] rounded-full overflow-hidden border border-brand-primary/50 shadow-[0_0_30px_rgba(199,125,255,0.4)] animate-[floatOrb_6s_ease-in-out_infinite]">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-transparent mix-blend-overlay z-20"></div>
              <img src="https://www.image2url.com/r2/default/images/1778759871346-12a8673a-7241-4b2d-ad88-2000caaf7876.png" referrerPolicy="no-referrer" alt="Tirth Patel" className="w-full h-full object-cover z-10 relative" />
            </div>
          </div>

          <div className="w-full flex flex-col gap-3">
            <a href="#work" className="w-full inline-block text-center p-3.5 bg-brand-primary text-brand-bg font-mono text-sm font-bold tracking-wide rounded-md hover:bg-brand-primary/90 transition-colors uppercase border border-brand-primary shadow-[0_0_15px_rgba(199,125,255,0.3)]">
              View Work
            </a>
            <a href="#contact" className="w-full inline-block text-center p-3.5 bg-transparent text-brand-primary font-mono text-sm tracking-wide rounded-md border border-brand-primary hover:bg-brand-primary/10 transition-colors uppercase">
              Contact Me
            </a>
          </div>
        </div>
      ) : (
        // DESKTOP / TABLET LAYOUT
        <div className="w-full flex flex-row items-center justify-between gap-12 h-full z-10 relative">
          <div className="w-1/2 flex flex-col items-start pr-4">
            <div className="font-mono text-[13px] text-brand-primary tracking-[2px] mb-6 uppercase">
              ✦ TIRTH PATEL — RAJKOT, INDIA
            </div>
            
            <h1 className="font-display font-medium text-[clamp(48px,5.5vw,96px)] leading-[1] mb-6 tracking-tight overflow-visible">
              <div className="text-white italic">AI Engineer.</div>
              <div className="text-brand-primary ml-8 lg:ml-16">Founder.</div>
              <div className="text-white/30 text-[clamp(32px,3vw,56px)] mt-2">Age 19.</div>
            </h1>

            <p className="font-sans font-light text-[17px] text-brand-dim leading-[1.6] max-w-[420px] mb-10">
              Building intelligent systems and decentralized infrastructure to solve hard global problems.
            </p>

            {/* Desktop Stats */}
            <div className="flex flex-row flex-wrap gap-8 lg:gap-12 mb-10">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="font-display font-medium text-3xl lg:text-4xl text-brand-primary mb-1">{s.num}</div>
                  <div className="font-mono text-[11px] text-brand-dim uppercase">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-row gap-4">
              <a href="#work" className="inline-block px-8 py-4 bg-brand-primary text-brand-bg font-mono text-sm font-bold tracking-wide rounded border border-brand-primary hover:bg-brand-primary/90 transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(199,125,255,0.4)] cursor-pointer">
                VIEW WORK
              </a>
              <a href="#now-terminal" className="inline-block px-8 py-4 bg-transparent text-white font-mono text-sm tracking-wide rounded border border-brand-dim hover:border-white transition-all hover:bg-white/5">
                READ RESEARCH
              </a>
            </div>
          </div>

          <div className="w-1/2 h-[450px] lg:h-[600px] relative flex items-center justify-center">
            <div className="absolute inset-0 z-0 opacity-80">
              <ConstellationCanvas isMobile={isMobile} />
            </div>
            
            {/* Magical Sparks */}
            <div className="absolute top-[15%] right-[15%] text-brand-secondary text-3xl animate-[pulse_3s_ease-in-out_infinite]">✦</div>
            <div className="absolute bottom-[25%] left-[10%] text-brand-primary text-2xl animate-[pulse_4s_ease-in-out_infinite]">✧</div>
            <div className="absolute top-[35%] left-[20%] text-brand-dim text-xl animate-[pulse_5s_ease-in-out_infinite]">✨</div>
            <div className="absolute bottom-[15%] right-[25%] text-brand-tertiary text-lg animate-[pulse_3.5s_ease-in-out_infinite]">✦</div>

            <div className="relative z-10 w-[280px] h-[280px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden border-[1.5px] border-brand-primary/40 shadow-[0_0_50px_rgba(199,125,255,0.3)] animate-[floatOrb_8s_ease-in-out_infinite]">
               <div className="absolute inset-0 bg-gradient-to-tr from-[#3C096C]/40 to-transparent mix-blend-overlay z-20 pointer-events-none"></div>
               <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(199,125,255,0.3)] z-20 pointer-events-none"></div>
               <img src="https://www.image2url.com/r2/default/images/1778759871346-12a8673a-7241-4b2d-ad88-2000caaf7876.png" referrerPolicy="no-referrer" alt="Tirth Patel" className="w-full h-full object-cover z-10 relative" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
