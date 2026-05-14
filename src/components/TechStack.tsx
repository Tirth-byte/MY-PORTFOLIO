import { useEffect, useState } from 'react';

const techRows = [
  {
    type: 'primary',
    colorClass: 'text-brand-primary border-brand-primary shadow-[var(--color-brand-primary)]',
    bgHoverClass: 'hover:bg-brand-primary/12',
    tags: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript']
  },
  {
    type: 'secondary',
    colorClass: 'text-brand-secondary border-brand-secondary shadow-[var(--color-brand-secondary)]',
    bgHoverClass: 'hover:bg-brand-secondary/12',
    tags: ['PyTorch', 'Next.js 14', 'Flutter', 'Three.js', 'Firebase', 'Git', 'WebGL']
  },
  {
    type: 'tertiary',
    colorClass: 'text-brand-dim border-brand-dim shadow-[var(--color-brand-dim)]',
    bgHoverClass: 'hover:bg-brand-dim/12',
    tags: ['Java', 'Flask', 'MediaPipe', 'Supabase', 'Linux', 'React Native', 'n8n', 'Capacitor', 'Groq API', 'EfficientNet', 'Android Studio', 'Kaggle']
  }
];

export default function TechStack() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="stack" className="w-full py-10 md:py-[60px] lg:py-[80px] px-5 sm:px-6 md:px-[60px] lg:px-[120px] flex flex-col items-center">
      <div className="w-full flex flex-col gap-[28px]">
        {techRows.map((row, rowIndex) => (
          <div 
            key={rowIndex} 
            className="w-full flex-wrap flex justify-center gap-[12px]"
          >
            {row.tags.map((tag, tagIndex) => {
              const dur = 3 + Math.random() * 4; // 3s - 7s
              const del = Math.random() * 2.5; // 0s - 2.5s
              
              // Mobile specific font size handling based on spec
              let px = isMobile ? 'px-3.5' : 'px-5';
              let py = isMobile ? 'py-2' : 'py-2.5';
              let textSzClass = isMobile ? 'text-[14px]' : 'text-[16px]';
              
              if (row.type === 'secondary') {
                px = isMobile ? 'px-3' : 'px-[18px]';
                py = isMobile ? 'py-[7px]' : 'py-[9px]';
                textSzClass = isMobile ? 'text-[13px]' : 'text-[14px]';
              } else if (row.type === 'tertiary') {
                px = isMobile ? 'px-2.5' : 'px-4';
                py = isMobile ? 'py-1.5' : 'py-2';
                textSzClass = isMobile ? 'text-[12px]' : 'text-[13px]';
              }

              return (
                <div
                  key={tag}
                  className={`
                    font-mono font-medium tracking-[0.5px] rounded-[4px] border border-solid
                    transition-all duration-200 ease-in-out hover:scale-105 cursor-default box-border max-w-full truncate
                    ${row.colorClass} ${row.bgHoverClass} hover:shadow-[0_0_12px_var(--tw-shadow-color)]
                    ${px} ${py} ${textSzClass}
                  `}
                  style={{
                    animation: `floatTag ${dur}s ease-in-out ${del}s infinite`,
                  }}
                >
                  {tag}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
