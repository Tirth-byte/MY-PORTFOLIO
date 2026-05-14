import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'GALAXY ZOO',
    tags: ['Next.js', 'WebGL', 'Three.js'],
    desc: 'Interactive cosmic visualization of machine learning models.',
    diagram: 'Architecture: React -> R3F -> Custom Shaders'
  },
  {
    id: '02',
    title: 'QEIST',
    tags: ['React Native', 'Firebase', 'Healthcare'],
    desc: 'Decentralized autonomous health record architecture.',
    diagram: 'Mobile client securely syncing Encrypted Records via IPFS'
  },
  {
    id: '03',
    title: 'SCHOOL OS',
    tags: ['TypeScript', 'Node.js', 'PostgreSQL'],
    desc: 'Next-generation administration system designed to replace legacy platforms.',
    diagram: 'Microservices architecture scaled across multi-tenant schools.'
  }
];

export default function ProjectsAccordion() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="work" className="w-full py-[60px] md:py-[80px] lg:py-[120px] px-6 lg:px-[80px]">
      <div className="flex items-center gap-4 mb-10 md:mb-16">
        <div className="hidden md:flex text-brand-secondary text-2xl animate-pulse">✧</div>
        <h2 className="font-display font-medium text-[clamp(42px,6vw,72px)] text-white tracking-tight">
          <span className="italic">Arcane</span> Creations
        </h2>
        <div className="hidden md:flex text-brand-dim text-xl animate-[pulse_4s_ease-in-out_infinite]">✦</div>
      </div>
      
      <div className="w-full flex flex-col border-t border-brand-primary/20 relative">
        <div className="absolute top-0 right-10 text-brand-tertiary text-lg animate-pulse z-0 pointer-events-none">✨</div>
        {projects.map((project) => {
          const isExpanded = expandedId === project.id;
          
          return (
            <div 
              key={project.id} 
              className="w-full flex flex-col border-b border-brand-primary/20 group cursor-pointer"
              onClick={() => setExpandedId(isExpanded ? null : project.id)}
            >
              <div className="w-full flex items-center justify-between py-6 md:py-8 lg:py-10">
                <div className="flex items-center gap-6 md:gap-10">
                  <div className="font-mono text-[36px] md:text-[48px] text-brand-dim/50 group-hover:text-brand-primary transition-colors select-none text-shadow-[0_0_10px_rgba(199,125,255,0)] group-hover:text-shadow-[0_0_10px_rgba(199,125,255,0.4)]">
                    {project.id}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display font-medium text-[clamp(26px,7vw,38px)] text-white select-none">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 md:gap-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="font-mono text-[10px] md:text-[12px] text-brand-primary/80 uppercase px-2 py-1 bg-brand-primary/5 rounded-sm border border-brand-primary/20 shadow-[0_0_5px_rgba(199,125,255,0.2)]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-brand-primary/50 group-hover:text-brand-primary transition-colors p-2 shrink-0 group-hover:drop-shadow-[0_0_8px_rgba(199,125,255,0.6)]">
                  {isExpanded ? <Minus strokeWidth={1} size={32} /> : <Plus strokeWidth={1} size={32} />}
                </div>
              </div>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="w-full pb-5 md:pb-12 pt-2 px-4 md:px-8 space-y-6 md:space-y-0 md:flex md:gap-12 lg:gap-20">
                      <div className="w-full md:w-1/2 flex flex-col gap-6">
                        <p className="font-sans text-brand-dim text-sm md:text-base leading-relaxed max-w-lg">
                          {project.desc}
                        </p>
                        <a href="#contact" className="self-start uppercase font-mono text-xs text-brand-primary hover:text-white transition-colors border-b border-brand-primary/30 hover:border-white pb-1">
                          Inquire about Project ✨
                        </a>
                      </div>
                      
                      <div className="w-full md:w-1/2 bg-brand-bg relative border border-brand-primary/10 rounded overflow-x-auto -webkit-overflow-scrolling-touch p-4 md:p-6 mt-4 md:mt-0 max-w-full shadow-[0_0_20px_rgba(199,125,255,0.05)]">
                        <div className="font-mono text-[11px] text-brand-secondary mb-4 tracking-widest uppercase">
                          // Architecture
                        </div>
                        <div className="font-mono text-xs md:text-sm text-brand-dim/90 whitespace-nowrap md:whitespace-normal">
                          {project.diagram}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
