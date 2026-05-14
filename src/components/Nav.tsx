import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'WORK', href: '#work' },
    { name: 'STACK', href: '#stack' },
    { name: 'VENTURES', href: '#ventures' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference h-[70px] flex items-center px-6 lg:px-12 bg-transparent">
        <div className="flex-1">
          {/* Logo or signature could go here */}
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-mono text-sm tracking-widest text-[#E6E6E6]">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="hover:text-brand-primary transition-colors py-2"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden flex flex-col gap-[6px] items-end justify-center w-12 h-12 p-3 z-50 absolute right-6 top-4"
          onClick={() => setIsOpen(true)}
          aria-label="Open Menu"
        >
          <div className="w-[20px] h-[2px] bg-brand-primary" />
          <div className="w-[20px] h-[2px] bg-brand-primary" />
          <div className="w-[20px] h-[2px] bg-brand-primary" />
        </button>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-brand-bg-alpha backdrop-blur-[20px] flex flex-col items-center justify-center"
          >
            <button 
              className="absolute top-6 right-6 p-2 text-brand-primary"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} strokeWidth={1.5} />
            </button>
            
            <div className="flex flex-col w-[80%] max-w-[300px]">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-display font-bold text-3xl text-white text-center py-6 border-b border-brand-primary/20 last:border-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
