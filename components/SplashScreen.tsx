'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Wait for exit animation
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(10px)"
          }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Background animated orbs */}
          <motion.div
            className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-evolys-blue/10 rounded-full blur-[120px]"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[120px]"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-evolys-blue-dark/5 rounded-full blur-[100px]"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Dot pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#00B4D8_1px,transparent_1px)] bg-[length:32px_32px] opacity-[0.05]" />

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-evolys-blue/30 rounded-full"
              style={{
                top: `${20 + i * 12}%`,
                left: `${15 + i * 12}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}

          {/* Content */}
          <div className="relative flex flex-col items-center gap-8">
            {/* Logo container with animated border */}
            <motion.div
              className="relative"
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Rotating border */}
              <div className="absolute -inset-[3px] rounded-2xl overflow-hidden">
                <motion.div
                  className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,#00B4D8,#22D3EE,#0077B6,#00B4D8)]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Glow */}
              <motion.div
                className="absolute -inset-4 bg-evolys-blue/20 rounded-3xl blur-2xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Logo */}
              <div className="relative bg-white p-4 rounded-2xl">
                <Image
                  src="/logo_evolys.jpg"
                  alt="Evolys Logo"
                  width={80}
                  height={80}
                  className="rounded-xl"
                />
              </div>
            </motion.div>

            {/* Loader */}
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Animated loader bar */}
              <div className="relative w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-evolys-blue via-cyan-400 to-evolys-blue-dark rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                />
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Loading text */}
              <motion.p
                className="text-sm text-gray-500 font-medium"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                Chargement...
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
