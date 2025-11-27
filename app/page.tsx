'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/sections/Navigation';
import { Hero } from '@/components/sections/Hero';
import { Process } from '@/components/sections/Process';
import { Journey } from '@/components/sections/Journey';
import { Advantages } from '@/components/sections/Advantages';
import { WhyNow } from '@/components/sections/WhyNow';
import { Footer } from '@/components/sections/Footer';
import { SplashScreen } from '@/components/SplashScreen';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: showSplash ? 0 : 1,
          y: showSplash ? 20 : 0,
        }}
        transition={{
          duration: 0.8,
          ease: [0.4, 0, 0.2, 1],
          delay: showSplash ? 0 : 0.1,
        }}
      >
        <Navigation />
        <main>
          <Hero />
          <Process />
          <Journey />
          <Advantages />
          <WhyNow />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}
