'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

export function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current?.play();
  };

  return (
    <section className="relative pt-[2vh] pb-[0.5vh] h-screen flex items-center bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden">
      {/* Simple background pattern */}
      <div className="absolute top-0 right-[-10%] w-[60%] h-full opacity-[0.04] pointer-events-none bg-[repeating-linear-gradient(45deg,#00B4D8_0,#00B4D8_1px,transparent_1px,transparent_15px)]" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 relative z-10 w-full flex flex-col justify-center h-full py-4">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-[1vh] sm:mb-[0.2vh]"
        >
          {/* Subtitle */}
          <div className="mb-[1vh] sm:mb-[0.2vh]">
            <p className="text-[10px] sm:text-[clamp(11px,1.9vh,28px)] font-light text-gray-600 tracking-wide leading-tight px-2">
              ( Si vous avez une entreprise de{' '}
              <span className="font-semibold text-evolys-blue">conciergerie</span>
              {' '}ou de{' '}
              <span className="font-semibold text-evolys-blue">sous-location</span>
              , vous êtes au bon endroit )
            </p>
          </div>

          <div className="mt-[2.5vh]">
            <h1 className="text-[clamp(16px,4vh,52px)] font-black leading-[1.1] mb-[0.2vh] tracking-tight sm:whitespace-nowrap">
              Découvrez en{' '}
              <span className="bg-gradient-to-r from-evolys-blue via-evolys-blue-dark to-evolys-blue bg-clip-text text-transparent">
                2 minutes
              </span>
              {' '}l'opportunité pour votre conciergerie :
            </h1>
          </div>

          {/* Simple decorative dots */}
          <div className="flex justify-center gap-2 mt-[0.5vh] mb-[2vh]">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-[clamp(6px,0.9vh,16px)] h-[clamp(6px,0.9vh,16px)] bg-gradient-to-r from-evolys-blue to-evolys-blue-dark rounded-full"
              />
            ))}
          </div>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-[90vw] sm:w-[clamp(220px,48vw,1000px)] mx-auto"
        >
          <div className="relative">
            {/* Corner accents */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-l-4 border-t-4 border-evolys-blue rounded-tl-2xl hidden sm:block" />
            <div className="absolute -top-3 -right-3 w-16 h-16 border-r-4 border-t-4 border-evolys-blue-dark rounded-tr-2xl hidden sm:block" />
            <div className="absolute -bottom-3 -left-3 w-16 h-16 border-l-4 border-b-4 border-evolys-blue-dark rounded-bl-2xl hidden sm:block" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-4 border-b-4 border-evolys-blue rounded-br-2xl hidden sm:block" />

            {/* Video Container */}
            <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-dark to-dark-light rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                controls={isPlaying}
                playsInline
                preload="metadata"
                onEnded={() => setIsPlaying(false)}
              >
                <source src="/main_video.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture vidéo.
              </video>

              {/* Overlay with Play Button */}
              {!isPlaying && (
                <div
                  className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer group"
                  onClick={handlePlay}
                >
                  {/* Animated rings */}
                  <div className="absolute w-[clamp(80px,15vh,220px)] h-[clamp(80px,15vh,220px)] rounded-full border-2 border-white/30 animate-ping" style={{ animationDuration: '2s' }} />
                  <div className="absolute w-[clamp(100px,18vh,260px)] h-[clamp(100px,18vh,260px)] rounded-full border border-white/20" />

                  {/* Play Button */}
                  <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute -inset-4 bg-white/25 rounded-full blur-xl group-hover:bg-white/35 transition-all duration-300" />
                    {/* Button */}
                    <div className="relative w-[clamp(60px,11vh,160px)] h-[clamp(60px,11vh,160px)] bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.3)] group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                      <div className="w-0 h-0 border-l-[clamp(20px,4vh,65px)] border-l-evolys-blue border-t-[clamp(12px,2.4vh,40px)] border-t-transparent border-b-[clamp(12px,2.4vh,40px)] border-b-transparent ml-2" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-[2vh] flex flex-col items-center gap-[2vh]"
          >
            <a
              href="https://calendly.com/d/cwv3-jv5-bmj/developper-sa-conciergerie-grace-a-la-transaction"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden bg-gradient-to-r from-evolys-blue to-evolys-blue-dark text-white px-[clamp(16px,2.8vw,60px)] py-[clamp(8px,1.4vh,26px)] rounded-full font-bold text-[clamp(12px,1.9vh,28px)] shadow-[0_10px_30px_rgba(0,180,216,0.3)] hover:scale-105 hover:-translate-y-1 transition-all duration-300 mb-4 sm:mb-0"
            >
              <span className="relative flex items-center gap-[clamp(4px,0.5vw,14px)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[clamp(12px,1.9vh,26px)] h-[clamp(12px,1.9vh,26px)]"
                >
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                Réservez votre appel →
              </span>
            </a>

            {/* Title for next section */}
            <p className="text-[clamp(14px,3.5vh,46px)] font-black text-dark sm:whitespace-nowrap mt-[1vh]">
              Concrètement, voici ce que{' '}
              <span className="text-evolys-blue">vous pourrez proposer</span>{' '}
              à vos clients :
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
