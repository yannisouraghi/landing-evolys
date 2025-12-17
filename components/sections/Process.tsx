'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';

export function Process() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.volume = 1.0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section id="process" className="pt-4 sm:pt-6 md:pt-8 pb-10 sm:pb-12 md:pb-14 relative bg-gradient-to-b from-white via-blue-50/20 to-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Content Layout - Text Left + Video Right */}
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr,auto] gap-8 sm:gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-auto space-y-4"
          >
            {/* Video Badge with Arrow */}
            <div className="hidden sm:flex justify-end items-center">
              <div className="bg-evolys-blue text-white px-3 py-1.5 rounded-lg font-bold text-sm shadow-md">
                Vidéo
              </div>
              <svg className="w-12 h-6 text-evolys-blue ml-2" viewBox="0 0 50 24" fill="none">
                <line x1="0" y1="12" x2="38" y2="12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <path d="M32 5 L42 12 L32 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>

            {/* Text Content */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-[clamp(1.05rem,2.2vw,1.6rem)] text-gray-700 leading-relaxed font-light">
                Désormais, votre conciergerie propose des{' '}
                <span className="font-semibold text-evolys-blue">projets clé en main</span>
                {' '}: de A à Z
              </p>

              <div className="space-y-3 sm:space-y-4 pl-3 sm:pl-4 border-l-4 border-evolys-blue/30">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 rounded-full bg-evolys-blue mt-2 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    <span className="font-semibold text-dark">Recherche de biens</span> adaptés aux critères de vos clients
                  </p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 rounded-full bg-evolys-blue mt-2 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    <span className="font-semibold text-dark">Négociation et acquisition</span> pour le meilleur prix
                  </p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 rounded-full bg-evolys-blue mt-2 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    <span className="font-semibold text-dark">Gestion complète</span> de la mise en location
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Video */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full lg:w-auto flex justify-center"
          >
            <div className="relative w-[240px] sm:w-[280px] lg:w-[320px] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
              {/* Video Element */}
              <video
                ref={videoRef}
                className="w-full h-auto max-h-[500px] object-contain"
                preload="metadata"
                controls={isPlaying}
                playsInline
                onEnded={() => setIsPlaying(false)}
              >
                <source src="/video2.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>

              {/* Overlay with Play Button */}
              <AnimatePresence>
                {!isPlaying && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-evolys-blue/10 to-transparent flex items-center justify-center cursor-pointer"
                    onClick={handlePlayClick}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(0,180,216,0.3)] hover:scale-110 transition-transform duration-300">
                      <div className="w-0 h-0 border-l-[20px] sm:border-l-[24px] border-l-evolys-blue border-t-[12px] sm:border-t-[14px] border-t-transparent border-b-[12px] sm:border-b-[14px] border-b-transparent ml-1" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
