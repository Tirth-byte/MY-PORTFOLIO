import { useState, useEffect } from 'react';

const venturesData = [
  {
    title: 'Qeist',
    subtitle: 'Health Records / R&D',
    desc: 'Developing decentralized systems for medical data interoperability in emerging markets.',
    rotation: '-rotate-3',
    zIndex: 'z-30',
    color: 'border-brand-primary shadow-[0_0_25px_rgba(199,125,255,0.15)]'
  },
  {
    title: 'SchoolOS',
    subtitle: 'EdTech / SaaS',
    desc: 'Modernizing administration infrastructure for educational institutions.',
    rotation: 'rotate-2',
    zIndex: 'z-20',
    color: 'border-brand-secondary shadow-[0_0_25px_rgba(224,170,255,0.15)]'
  },
  {
    title: 'Xinity',
    subtitle: 'Web3 / Stealth',
    desc: 'Exploring alternative models for decentralized computation.',
    rotation: 'rotate-6',
    zIndex: 'z-10',
    color: 'border-brand-dim shadow-[0_0_25px_rgba(122,105,155,0.15)]'
  }
];

export default function Ventures() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="ventures" className="w-full py-[60px] md:py-[80px] lg:py-[120px] px-6 lg:px-[80px] overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 lg:mb-20">
        <h2 className="font-display font-medium text-[clamp(42px,6vw,72px)] text-white tracking-tight">
          <span className="italic">Live</span> Realms
        </h2>
        <div className="font-mono text-sm text-brand-primary mt-4 md:mt-6">
          Founder · Builder
        </div>
      </div>

      <div className={`w-full relative ${isMobile ? 'flex flex-col gap-6' : 'flex justify-center min-h-[500px] lg:min-h-[600px] mt-16 perspective-1000'}`}>
        
        {/* Ambient background glow for realms */}
        {!isMobile && (
          <div className="absolute inset-0 top-1/4 left-1/4 w-1/2 h-1/2 bg-brand-primary/10 blur-[100px] pointer-events-none z-0 rounded-full animate-pulse"></div>
        )}

        {venturesData.map((v, i) => {
          const rotationClass = isMobile ? 'rotate-0' : v.rotation;
          const leftOffset = isMobile ? '0' : (i === 0 ? '-10%' : i === 1 ? '0' : '10%');
          const topOffset = isMobile ? '0' : (i === 0 ? '0' : i === 1 ? '20px' : '40px');

          return (
            <div 
              key={v.title}
              className={`
                bg-[#05010A]/80 backdrop-blur-xl border border-white/5 p-8 md:p-10 rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.6)] 
                flex flex-col gap-4 transform transition-all duration-500 ease-out group
                ${isMobile ? 'w-full relative mb-4' : `absolute w-[380px] md:w-[440px] lg:w-[480px] ${v.zIndex} hover:z-50 hover:scale-105 hover:-translate-y-4 hover:rotate-0 hover:shadow-[0_0_60px_rgba(199,125,255,0.4)]`}
                ${rotationClass}
              `}
              style={!isMobile ? { 
                marginLeft: leftOffset, 
                marginTop: topOffset 
              } : {}}
            >
              <div className="flex flex-col relative z-20">
                <span className="font-mono text-[11px] md:text-sm text-brand-primary uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse shadow-[0_0_8px_#C77DFF]"></span>
                  {v.subtitle}
                </span>
                <h3 className="font-display font-medium text-[32px] md:text-[42px] text-white mt-3 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all">{v.title}</h3>
              </div>
              <p className="font-sans text-brand-dim text-base md:text-lg mt-3 flex-grow leading-relaxed font-light relative z-20">
                {v.desc}
              </p>
              <div className="mt-8 flex items-center justify-between relative z-20">
                <span className="w-10 h-10 rounded-full border border-brand-primary/40 shadow-[0_0_15px_rgba(199,125,255,0.2)] flex items-center justify-center text-brand-primary text-sm group-hover:bg-brand-primary group-hover:text-black transition-all group-hover:shadow-[0_0_20px_rgba(199,125,255,0.6)]">
                  ↗
                </span>
                <span className="font-mono text-[11px] md:text-xs text-brand-primary uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                  Status: Active
                </span>
              </div>
              
              {/* Inner ambient glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none z-10 ${v.color}`}></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
