import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import NowBoard from './components/NowBoard';
import Terminal from './components/Terminal';
import TechStack from './components/TechStack';
import ProjectsAccordion from './components/ProjectsAccordion';
import Ventures from './components/Ventures';
import AchievementsTicker from './components/AchievementsTicker';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import NebulaBlobs from './components/NebulaBlobs';

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full min-h-screen text-white bg-brand-bg overflow-hidden font-sans selection:bg-brand-primary/30">
      <CustomCursor />
      <NebulaBlobs isMobile={isMobile} />
      
      <Nav />
      
      <main className="relative z-10 w-full max-w-7xl mx-auto">
        <Hero isMobile={isMobile} />
        
        <section id="now-terminal" className="py-10 md:py-[80px] lg:py-[120px] px-6 lg:px-[80px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between">
            <div className="w-full lg:w-[48%]">
              {isMobile ? <NowBoard /> : null}
              <Terminal />
            </div>
            <div className="w-full lg:w-[48%] mt-8 lg:mt-0">
              {isMobile ? null : <NowBoard />}
            </div>
          </div>
        </section>
        
        <TechStack />
        <ProjectsAccordion />
        <Ventures />
        <AchievementsTicker />
        <Contact />
      </main>
    </div>
  );
}
