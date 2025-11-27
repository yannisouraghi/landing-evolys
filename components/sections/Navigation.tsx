'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-[1000] transition-all duration-300',
        'bg-white/98 backdrop-blur-xl',
        scrolled ? 'py-[0.8vh] shadow-[0_1px_0_rgba(0,0,0,0.05)]' : 'py-[1.2vh]'
      )}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <Image
            src="/logo_evolys.jpg"
            alt="Evolys Logo"
            width={296}
            height={150}
            className="transition-transform duration-300 hover:scale-105 rounded-lg h-[clamp(35px,5vh,70px)] w-auto"
          />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="https://calendly.com/d/cwv3-jv5-bmj/developper-sa-conciergerie-grace-a-la-transaction" target="_blank" rel="noopener noreferrer" className="group relative">
            <motion.div
              className="relative overflow-hidden bg-gradient-to-r from-evolys-blue to-evolys-blue-dark text-white px-[clamp(14px,1.8vw,36px)] py-[clamp(8px,1.1vh,18px)] rounded-full font-semibold text-[clamp(12px,1.5vh,18px)] transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-evolys-blue-dark to-evolys-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ borderRadius: 'inherit' }}
              />

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut"
                }}
                style={{ borderRadius: 'inherit' }}
              />

              {/* Pulse ring */}
              <motion.div
                className="absolute inset-0 border-2 border-evolys-blue rounded-full"
                animate={{
                  scale: [1, 1.2, 1.2],
                  opacity: [0.8, 0, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />

              {/* Text with icon */}
              <span className="relative flex items-center gap-[clamp(4px,0.5vw,10px)]">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[clamp(12px,1.5vh,18px)] h-[clamp(12px,1.5vh,18px)]"
                  animate={{
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </motion.svg>
                Réservez votre appel
                <motion.span
                  className="inline-block"
                  animate={{
                    x: [0, 3, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  →
                </motion.span>
              </span>
            </motion.div>

            {/* Glow effect */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-evolys-blue to-evolys-blue-dark rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"
              animate={{
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </a>
        </motion.div>
      </div>
    </nav>
  );
}
