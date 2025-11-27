'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative pt-[2vh] pb-[0.5vh] h-screen flex items-center bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden">
      {/* Animated Background Shapes */}
      <motion.div
        className="absolute top-[30%] right-[-5%] w-96 h-96 bg-evolys-blue/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-[-5%] w-80 h-80 bg-evolys-blue-light/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Floating Accent Elements - Elegant Circles */}
      <motion.div
        className="absolute top-32 left-[15%] w-32 h-32 border border-evolys-blue/20 rounded-full hidden lg:block"
        animate={{
          y: [0, -25, 0],
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-48 left-[18%] w-20 h-20 border border-evolys-blue/15 rounded-full"
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.08, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      <motion.div
        className="absolute bottom-32 right-[12%] w-40 h-40 border border-evolys-blue-dark/15 rounded-full"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.06, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute bottom-48 right-[16%] w-24 h-24 border border-evolys-blue/10 rounded-full"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />


      {/* Floating Dots Pattern */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-evolys-blue/50 rounded-full shadow-[0_0_10px_rgba(0,180,216,0.4)] hidden lg:block"
          style={{
            top: `${15 + (i * 7)}%`,
            left: `${5 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Elegant Wave Effect - Transition to next section */}
      <svg className="absolute bottom-0 left-0 w-full opacity-10" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ height: '150px' }}>
        <motion.path
          fill="url(#wave-gradient)"
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
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00B4D8" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#0096C7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00B4D8" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>

      {/* Background Pattern */}
      <div className="absolute top-0 right-[-10%] w-[60%] h-full opacity-[0.04] pointer-events-none bg-[repeating-linear-gradient(45deg,#00B4D8_0,#00B4D8_1px,transparent_1px,transparent_15px)]" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 relative z-10 w-full flex flex-col justify-center h-full py-4">
        {/* Title Section - Centered at Top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[1vh] sm:mb-[0.2vh]"
        >
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-[1vh] sm:mb-[0.2vh]"
          >
            <p className="text-[clamp(11px,1.9vh,28px)] font-light text-gray-600 tracking-wide leading-tight px-2">
              ( Si vous avez une entreprise de{' '}
              <span className="font-semibold text-evolys-blue relative">
                conciergerie
                <motion.span
                  className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-evolys-blue to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                />
              </span>
              {' '}ou de{' '}
              <span className="font-semibold text-evolys-blue relative">
                sous-location
                <motion.span
                  className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-evolys-blue to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                />
              </span>
              , vous êtes au bon endroit )
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-[2.5vh]"
          >
            <h1 className="text-[clamp(26px,6.5vh,90px)] font-black leading-[1.05] mb-[0.2vh] tracking-tight">
              Découvrez en{' '}
              <span className="bg-gradient-to-r from-evolys-blue via-evolys-blue-dark to-evolys-blue bg-clip-text text-transparent">
                2 minutes
              </span>
            </h1>
            <h2 className="text-[clamp(18px,3.8vh,56px)] font-bold text-dark-light">
              l'opportunité pour votre conciergerie
            </h2>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="flex justify-center gap-2 mt-[0.5vh] mb-[2vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-[clamp(6px,0.9vh,16px)] h-[clamp(6px,0.9vh,16px)] bg-gradient-to-r from-evolys-blue to-evolys-blue-dark rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-[90vw] sm:w-[clamp(220px,48vw,1000px)] mx-auto"
        >
          <div className="relative">
            {/* Glow Effect Behind Video */}
            <motion.div
              className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-evolys-blue via-evolys-blue-dark to-evolys-blue rounded-3xl blur-2xl opacity-20 hidden sm:block"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Floating particles around video */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-evolys-blue/60 rounded-full shadow-[0_0_15px_rgba(0,180,216,0.6)] hidden md:block"
                style={{
                  top: `${10 + (i % 4) * 30}%`,
                  left: i < 4 ? '-5%' : '105%',
                }}
                animate={{
                  y: [0, -40, 0],
                  x: i < 4 ? [0, 15, 0] : [0, -15, 0],
                  opacity: [0.4, 1, 0.4],
                  scale: [0.8, 1.4, 0.8],
                }}
                transition={{
                  duration: 3 + (i % 2),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              />
            ))}

            {/* Corner accents */}
            <motion.div
              className="absolute -top-4 -left-4 w-20 h-20 border-l-4 border-t-4 border-evolys-blue/60 rounded-tl-3xl hidden sm:block"
              animate={{
                borderColor: ['rgba(0,180,216,0.6)', 'rgba(0,180,216,1)', 'rgba(0,180,216,0.6)'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 border-r-4 border-t-4 border-evolys-blue-dark/60 rounded-tr-3xl hidden sm:block"
              animate={{
                borderColor: ['rgba(0,150,199,0.6)', 'rgba(0,150,199,1)', 'rgba(0,150,199,0.6)'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-20 h-20 border-l-4 border-b-4 border-evolys-blue-dark/60 rounded-bl-3xl hidden sm:block"
              animate={{
                borderColor: ['rgba(0,150,199,0.6)', 'rgba(0,150,199,1)', 'rgba(0,150,199,0.6)'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-20 h-20 border-r-4 border-b-4 border-evolys-blue/60 rounded-br-3xl hidden sm:block"
              animate={{
                borderColor: ['rgba(0,180,216,0.6)', 'rgba(0,180,216,1)', 'rgba(0,180,216,0.6)'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            />

            {/* Video Container */}
            <motion.div
              className="relative w-full aspect-[16/9] bg-gradient-to-br from-dark to-dark-light rounded-2xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.2)]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-evolys-blue via-evolys-blue-dark to-evolys-blue opacity-0"
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.3 }}
              />

              <div className="absolute inset-0 bg-gradient-to-br from-evolys-blue/10 to-transparent flex items-center justify-center">
                {/* Play Button */}
                <motion.div
                  className="w-[clamp(50px,9.5vh,145px)] h-[clamp(50px,9.5vh,145px)] bg-white rounded-full flex items-center justify-center cursor-pointer shadow-[0_15px_40px_rgba(0,0,0,0.3)] group"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      '0 15px 40px rgba(0,180,216,0.3)',
                      '0 15px 60px rgba(0,180,216,0.5)',
                      '0 15px 40px rgba(0,180,216,0.3)',
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
                    className="w-0 h-0 border-l-[clamp(18px,3.5vh,58px)] border-l-evolys-blue border-t-[clamp(11px,2.1vh,35px)] border-t-transparent border-b-[clamp(11px,2.1vh,35px)] border-b-transparent ml-2"
                    whileHover={{
                      borderLeftColor: '#0096C7',
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  />
                </motion.div>

                {/* Pulse Rings Around Play Button */}
                <motion.div
                  className="absolute w-[clamp(50px,9.5vh,145px)] h-[clamp(50px,9.5vh,145px)] border-4 border-evolys-blue rounded-full"
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
                  className="absolute w-[clamp(50px,9.5vh,145px)] h-[clamp(50px,9.5vh,145px)] border-4 border-evolys-blue-dark rounded-full"
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
              </div>
            </motion.div>
          </div>

          {/* CTA Button Below Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-[3vh] flex justify-center"
          >
            <a href="https://calendly.com/d/cwv3-jv5-bmj/developper-sa-conciergerie-grace-a-la-transaction" target="_blank" rel="noopener noreferrer" className="group relative">
              <motion.div
                className="relative overflow-hidden bg-gradient-to-r from-evolys-blue to-evolys-blue-dark text-white px-[clamp(16px,2.8vw,60px)] py-[clamp(8px,1.4vh,26px)] rounded-full font-bold text-[clamp(12px,1.9vh,28px)] transition-all duration-300 shadow-[0_10px_30px_rgba(0,180,216,0.3)]"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  boxShadow: [
                    '0 10px 30px rgba(0,180,216,0.3)',
                    '0 15px 40px rgba(0,180,216,0.5)',
                    '0 10px 30px rgba(0,180,216,0.3)',
                  ],
                }}
                transition={{
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
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

                {/* Text with icon */}
                <span className="relative flex items-center gap-[clamp(4px,0.5vw,14px)]">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[clamp(12px,1.9vh,26px)] h-[clamp(12px,1.9vh,26px)]"
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
                      x: [0, 4, 0],
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
                className="absolute -inset-2 bg-gradient-to-r from-evolys-blue to-evolys-blue-dark rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10"
                animate={{
                  opacity: [0.2, 0.35, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicators - Bottom Corners - Apple Style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isScrolled ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-[0.5vh] left-[2vw] cursor-pointer group flex items-center gap-[0.5vw] pointer-events-none"
          style={{ pointerEvents: isScrolled ? 'none' : 'auto' }}
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <motion.p
            className="text-[clamp(10px,1.3vh,18px)] font-medium text-gray-500 tracking-wide group-hover:text-evolys-blue transition-colors duration-300"
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Faire défiler
          </motion.p>
          <div className="flex flex-col items-center gap-1">
            {[0, 1, 2].map((i) => (
              <motion.svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-gray-400 group-hover:text-evolys-blue transition-colors duration-300"
                style={{
                  width: `${1.2 + i * 0.3}vh`,
                  height: `${1.2 + i * 0.3}vh`,
                  marginTop: i === 0 ? '0' : '-0.6vh',
                }}
                animate={{
                  opacity: [0.3, 0.6, 1, 0.6, 0.3],
                  scale: [0.8, 0.9, 1, 0.9, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                }}
              >
                <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
              </motion.svg>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isScrolled ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-[0.5vh] right-[2vw] cursor-pointer group flex items-center gap-[0.5vw] pointer-events-none"
          style={{ pointerEvents: isScrolled ? 'none' : 'auto' }}
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <div className="flex flex-col items-center gap-1">
            {[0, 1, 2].map((i) => (
              <motion.svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-gray-400 group-hover:text-evolys-blue transition-colors duration-300"
                style={{
                  width: `${1.2 + i * 0.3}vh`,
                  height: `${1.2 + i * 0.3}vh`,
                  marginTop: i === 0 ? '0' : '-0.6vh',
                }}
                animate={{
                  opacity: [0.3, 0.6, 1, 0.6, 0.3],
                  scale: [0.8, 0.9, 1, 0.9, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                }}
              >
                <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
              </motion.svg>
            ))}
          </div>
          <motion.p
            className="text-[clamp(10px,1.3vh,18px)] font-medium text-gray-500 tracking-wide group-hover:text-evolys-blue transition-colors duration-300"
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Faire défiler
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
