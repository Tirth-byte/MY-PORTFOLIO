import { BookOpen, Rocket, Search, FileText, Globe } from 'lucide-react';

export default function NowBoard() {
  const rows = [
    {
      icon: <BookOpen size={16} />,
      label: 'Studying',
      value: 'B.Tech CSE (AI & ML) · Marwadi University · 2027'
    },
    {
      icon: <Rocket size={16} />,
      label: 'Building',
      value: 'Qeist · Health Records Research'
    },
    {
      icon: <Search size={16} />,
      label: 'Research',
      value: 'Neural Architectures for Decentralized Health Systems in Emerging Markets'
    },
    {
      icon: <FileText size={16} />,
      label: 'Published',
      value: 'The Truth Behind Artificial Intelligence · Kindle'
    },
    {
      icon: <Globe size={16} />,
      label: 'Open To',
      value: 'Research Collabs · Startup Conversations · Hard Problems'
    }
  ];

  return (
    <div className="w-full">
      <h2 className="font-display font-bold text-[28px] md:text-[32px] text-white mb-6 md:mb-10 tracking-tight">
        Right now
      </h2>

      <div className="w-full flex-col">
        {rows.map((row, i) => (
          <div 
            key={i} 
            className="flex flex-col md:flex-row md:items-start md:justify-between py-4 md:py-5 border-b border-brand-primary/20 last:border-b-0"
          >
            {/* Left side / Top side (Mobile) */}
            <div className="flex items-center gap-3 text-brand-primary font-mono text-[12px] uppercase tracking-wide md:w-1/3 shrink-0">
              {row.icon}
              <span>{row.label}</span>
            </div>
            
            {/* Right side / Bottom side (Mobile) */}
            <div className="text-white font-sans text-[15px] font-normal mt-1.5 md:mt-0 md:font-mono md:text-sm md:text-right md:w-2/3 md:ml-4 leading-snug">
              {row.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
