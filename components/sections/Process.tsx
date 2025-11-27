'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';

export function Process() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.volume = 1.0; // Volume au maximum
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section id="process" className="py-16 sm:py-24 md:py-32 relative bg-gradient-to-b from-white via-blue-50/20 to-white overflow-hidden">
      {/* Wave Effect - Continuation from Hero */}
      <svg className="absolute top-0 left-0 w-full opacity-10 rotate-180" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ height: '150px' }}>
        <motion.path
          fill="url(#wave-gradient-process)"
          d="M0,160L48,144C96,128,192,96,288,96C384,96,480,128,576,144C672,160,768,160,864,144C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          animate={{
            d: [
              "M0,160L48,144C96,128,192,96,288,96C384,96,480,128,576,144C672,160,768,160,864,144C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,117.3C672,107,768,117,864,138.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,160L48,144C96,128,192,96,288,96C384,96,480,128,576,144C672,160,768,160,864,144C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <defs>
          <linearGradient id="wave-gradient-process" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00B4D8" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#0096C7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00B4D8" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>

      {/* Background Pattern - Continuation from Hero */}
      <div className="absolute top-0 right-[-10%] w-[60%] h-[50%] opacity-[0.04] pointer-events-none bg-[repeating-linear-gradient(45deg,#00B4D8_0,#00B4D8_1px,transparent_1px,transparent_15px)]" />

      {/* Background Decorations */}
      <motion.div
        className="absolute top-20 left-[-5%] w-80 h-80 bg-evolys-blue/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-[-5%] w-96 h-96 bg-evolys-blue-light/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Main Title - Full Width */}
        <motion.h2
          className="text-[clamp(1.75rem,4.5vw,3.5rem)] font-black leading-[1.15] mb-8 sm:mb-12 md:mb-16 tracking-tight text-dark text-center px-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Concrètement, voici ce que{' '}
          <span className="text-evolys-blue">vous pourrez proposer</span>{' '}
          à vos clients
        </motion.h2>

        {/* Content Layout - Text Left + Video Right */}
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr,auto] gap-8 sm:gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 w-full lg:w-auto"
          >
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
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-auto flex justify-center"
          >
            <div className="relative">
              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-6 bg-gradient-to-r from-evolys-blue via-evolys-blue-dark to-evolys-blue rounded-3xl blur-2xl opacity-20"
                animate={{
                  opacity: [0.15, 0.3, 0.15],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Floating particles around video */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2.5 h-2.5 bg-evolys-blue/50 rounded-full shadow-[0_0_12px_rgba(0,180,216,0.5)]"
                  style={{
                    top: `${15 + (i % 3) * 30}%`,
                    left: i < 3 ? '-4%' : '104%',
                  }}
                  animate={{
                    y: [0, -30, 0],
                    x: i < 3 ? [0, 10, 0] : [0, -10, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.8, 1.3, 0.8],
                  }}
                  transition={{
                    duration: 3 + (i % 2),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                />
              ))}

              {/* Video Container */}
              <motion.div
                className="relative w-[240px] sm:w-[280px] lg:w-[320px] rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
                style={{ maxHeight: '500px' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
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

                {/* Overlay with Play Button - Hidden when playing */}
                <AnimatePresence>
                  {!isPlaying && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-evolys-blue/10 to-transparent flex items-center justify-center cursor-pointer"
                      onClick={handlePlayClick}
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                    {/* Play Button */}
                    <motion.div
                      className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center shadow-[0_12px_35px_rgba(0,0,0,0.3)]"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      animate={{
                        scale: [1, 1.05, 1],
                        boxShadow: [
                          '0 12px 35px rgba(0,180,216,0.3)',
                          '0 15px 50px rgba(0,180,216,0.5)',
                          '0 12px 35px rgba(0,180,216,0.3)',
                        ],
                      }}
                      transition={{
                        scale: {
                          duration: 4,
                          repeat: Infinity,
                          ease: [0.4, 0, 0.6, 1]
                        },
                        boxShadow: {
                          duration: 4,
                          repeat: Infinity,
                          ease: [0.4, 0, 0.6, 1]
                        }
                      }}
                    >
                      <motion.div
                        className="w-0 h-0 border-l-[24px] sm:border-l-[30px] border-l-evolys-blue border-t-[14px] sm:border-t-[18px] border-t-transparent border-b-[14px] sm:border-b-[18px] border-b-transparent ml-2"
                        whileHover={{
                          borderLeftColor: '#0096C7',
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                      />
                    </motion.div>

                    {/* Pulse Rings */}
                    <motion.div
                      className="absolute w-20 h-20 sm:w-24 sm:h-24 border-4 border-evolys-blue rounded-full pointer-events-none"
                      animate={{
                        scale: [1, 1.8, 1.8],
                        opacity: [0.8, 0, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: [0.4, 0, 0.6, 1]
                      }}
                    />
                    <motion.div
                      className="absolute w-20 h-20 sm:w-24 sm:h-24 border-4 border-evolys-blue-dark rounded-full pointer-events-none"
                      animate={{
                        scale: [1, 1.8, 1.8],
                        opacity: [0.8, 0, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: [0.4, 0, 0.6, 1],
                        delay: 2.5
                      }}
                    />
                  </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
