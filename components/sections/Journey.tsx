'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FiSearch, FiFileText, FiHome, FiDollarSign } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const steps = [
  {
    icon: FiSearch,
    number: '01',
    title: 'Recherche',
    description: 'Identification des biens à fort potentiel selon les critères de vos clients',
    color: '#00B4D8',
    gradient: 'from-[#00B4D8] to-[#0096C7]'
  },
  {
    icon: FiFileText,
    number: '02',
    title: 'Transaction',
    description: 'Gestion complète de l\'achat : négociation, financement et démarches administratives',
    color: '#0096C7',
    gradient: 'from-[#0096C7] to-[#0077A8]'
  },
  {
    icon: FiHome,
    number: '03',
    title: 'Conciergerie',
    description: 'Mise en location et gestion locative pour maximiser la rentabilité',
    color: '#48CAE4',
    gradient: 'from-[#48CAE4] to-[#00B4D8]'
  },
  {
    icon: FiDollarSign,
    number: '04',
    title: 'Vente',
    description: 'Revente optimisée au meilleur moment pour maximiser la plus-value',
    color: '#90E0EF',
    gradient: 'from-[#90E0EF] to-[#48CAE4]'
  }
];

export function Journey() {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 sm:py-28 md:py-36 relative overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br opacity-50"
        animate={{
          background: [
            'linear-gradient(135deg, #f0f9ff 0%, #ffffff 50%, #f0f9ff 100%)',
            'linear-gradient(135deg, #ffffff 0%, #f0f9ff 50%, #ffffff 100%)',
            'linear-gradient(135deg, #f0f9ff 0%, #ffffff 50%, #f0f9ff 100%)',
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-evolys-blue/30 rounded-full"
          style={{
            left: `${(i * 8 + 10) % 90}%`,
            top: `${(i * 13 + 5) % 80}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(i) * 50, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 8 + (i % 4),
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
            className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-white rounded-full shadow-lg border border-evolys-blue/10"
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-evolys-blue"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-evolys-blue font-bold text-sm uppercase tracking-widest">Processus Complet</span>
          </motion.div>

          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.95] tracking-tight text-dark mb-4">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Un{' '}
            </motion.span>
            <motion.span
              className="inline-block relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className={`bg-gradient-to-r ${steps[activeStep].gradient} bg-clip-text text-transparent`}>
                cycle
              </span>
              <motion.div
                className="absolute -bottom-3 left-0 right-0 h-2 rounded-full"
                style={{ background: steps[activeStep].color, opacity: 0.2 }}
                layoutId="underline"
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.span>
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {' '}parfait
            </motion.span>
          </h2>
        </motion.div>

        {/* Main Content - Horizontal Timeline with 3D Cards */}
        <div className="relative max-w-6xl mx-auto">
          {/* Mobile Version */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setActiveStep(index)}
                  className="relative"
                >
                  <motion.div
                    className={`relative bg-white rounded-3xl p-6 cursor-pointer overflow-hidden ${
                      isActive
                        ? 'shadow-[0_20px_70px_rgba(0,180,216,0.25)]'
                        : 'shadow-[0_8px_30px_rgba(0,0,0,0.08)]'
                    }`}
                    animate={{
                      scale: isActive ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Animated Background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0`}
                      animate={{ opacity: isActive ? 0.05 : 0 }}
                      transition={{ duration: 0.5 }}
                    />

                    <div className="relative flex items-start gap-5">
                      <motion.div
                        className="flex-shrink-0"
                        animate={{
                          rotate: isActive ? [0, 10, -10, 0] : 0,
                        }}
                        transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
                      >
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center relative overflow-hidden"
                          style={{
                            background: `linear-gradient(135deg, ${step.color}20, ${step.color}40)`
                          }}
                        >
                          <Icon className="w-8 h-8 relative z-10" style={{ color: step.color }} />
                          <motion.div
                            className="absolute inset-0"
                            style={{ background: `radial-gradient(circle at center, ${step.color}40, transparent)` }}
                            animate={{ scale: isActive ? [1, 1.5, 1] : 1, opacity: isActive ? [0.5, 0, 0.5] : 0 }}
                            transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
                          />
                        </div>
                      </motion.div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className="text-xs font-black px-2 py-1 rounded-full"
                            style={{
                              background: `${step.color}15`,
                              color: step.color
                            }}
                          >
                            {step.number}
                          </span>
                          <h3
                            className="text-xl font-bold"
                            style={{ color: isActive ? step.color : '#1F2937' }}
                          >
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop Version - Floating 3D Cards */}
          <div className="hidden lg:block relative" style={{ height: '450px' }}>
            {/* Connecting Line */}
            <motion.div
              className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />

            {/* Animated Progress Line */}
            <motion.div
              className="absolute top-20 left-0 h-2 rounded-full overflow-hidden"
              style={{
                width: `${(activeStep + 1) * 25}%`,
              }}
              initial={{ width: '0%' }}
              animate={{
                width: `${(activeStep + 1) * 25}%`,
              }}
              transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            >
              {/* Gradient Fill */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(90deg, ${steps[0].color}, ${steps[activeStep].color})`,
                }}
              />

              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(90deg, transparent, white, transparent)`,
                }}
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 blur-sm"
                style={{
                  background: `linear-gradient(90deg, ${steps[0].color}, ${steps[activeStep].color})`,
                }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Cards */}
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === index;
                const isHovered = hoveredCard === index;

                return (
                  <motion.div
                    key={index}
                    className="relative"
                    style={{ perspective: '1000px' }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.15,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    {/* Connection Point on Line */}
                    <motion.div
                      className="absolute top-[75px] left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-white z-20"
                      style={{
                        backgroundColor: isActive ? step.color : '#E5E7EB',
                        boxShadow: isActive ? `0 0 25px ${step.color}, 0 0 50px ${step.color}50` : 'none'
                      }}
                      animate={{
                        scale: isActive ? [1, 1.5, 1] : 1,
                        y: isActive ? [0, -3, 0] : 0,
                      }}
                      transition={{
                        scale: { duration: 1.5, repeat: isActive ? Infinity : 0, ease: "easeInOut" },
                        y: { duration: 1.5, repeat: isActive ? Infinity : 0, ease: "easeInOut" }
                      }}
                    >
                      {/* Pulse Rings */}
                      {isActive && [...Array(2)].map((_, i) => (
                        <motion.div
                          key={`pulse-${i}`}
                          className="absolute inset-0 rounded-full border-2"
                          style={{
                            borderColor: step.color,
                          }}
                          animate={{
                            scale: [1, 2.5],
                            opacity: [0.8, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.75,
                            ease: "easeOut"
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Card */}
                    <motion.div
                      className="relative bg-white rounded-3xl p-6 cursor-pointer overflow-hidden"
                      style={{
                        transformStyle: 'preserve-3d',
                        boxShadow: isActive
                          ? `0 30px 80px ${step.color}30`
                          : '0 10px 40px rgba(0,0,0,0.08)',
                      }}
                      onClick={() => setActiveStep(index)}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                      animate={{
                        rotateY: isActive ? [0, 8, -8, 0] : 0,
                        rotateX: isActive ? [0, 4, -4, 0] : 0,
                        z: isActive ? 60 : 0,
                        scale: isActive ? 1.08 : isHovered ? 1.03 : 1,
                      }}
                      transition={{
                        rotateY: { duration: 3, repeat: isActive ? Infinity : 0, ease: [0.45, 0, 0.55, 1] },
                        rotateX: { duration: 2.5, repeat: isActive ? Infinity : 0, ease: [0.45, 0, 0.55, 1] },
                        z: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
                        scale: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }
                      }}
                      whileHover={{ y: -10 }}
                    >
                      {/* Animated Background Gradient */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${step.gradient}`}
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: isActive ? [0.08, 0.15, 0.08] : 0,
                        }}
                        transition={{ duration: 1.5, repeat: isActive ? Infinity : 0 }}
                      />

                      {/* Liquid Morphing Background */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 opacity-20"
                          style={{
                            background: `radial-gradient(circle at 50% 50%, ${step.color}, transparent 70%)`,
                          }}
                          animate={{
                            scale: [1, 1.5, 1],
                            x: ['0%', '10%', '-10%', '0%'],
                            y: ['0%', '-10%', '10%', '0%'],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      )}

                      {/* Rotating Border Effect */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-3xl"
                          style={{
                            background: `conic-gradient(from 0deg, transparent 0%, ${step.color}40 50%, transparent 100%)`,
                          }}
                          animate={{
                            rotate: 360,
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      )}

                      {/* Floating Particles Inside Card */}
                      {isActive && [...Array(10)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1.5 h-1.5 rounded-full"
                          style={{
                            backgroundColor: step.color,
                            left: `${10 + i * 10}%`,
                            top: `${20 + (i % 3) * 30}%`,
                            filter: 'blur(0.5px)',
                          }}
                          animate={{
                            y: [0, -50, 0],
                            x: [0, Math.sin(i) * 20, 0],
                            opacity: [0, 0.8, 0],
                            scale: [0.5, 1.5, 0.5],
                          }}
                          transition={{
                            duration: 2.5 + i * 0.2,
                            repeat: Infinity,
                            delay: i * 0.15,
                            ease: "easeInOut"
                          }}
                        />
                      ))}

                      {/* Trail Effect */}
                      {isActive && [...Array(3)].map((_, i) => (
                        <motion.div
                          key={`trail-${i}`}
                          className="absolute inset-0 rounded-3xl border-2"
                          style={{
                            borderColor: step.color,
                          }}
                          initial={{ scale: 1, opacity: 0 }}
                          animate={{
                            scale: [1, 1.3, 1.6],
                            opacity: [0.6, 0.3, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.6,
                            ease: "easeOut"
                          }}
                        />
                      ))}

                      {/* Number Badge - z-index élevé pour être au premier plan */}
                      <motion.div
                        className="absolute -top-4 -right-4 w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl shadow-2xl z-50"
                        style={{
                          background: isActive ? `linear-gradient(135deg, ${step.color}, ${step.color}dd)` : '#F3F4F6',
                          color: isActive ? 'white' : '#9CA3AF',
                          border: isActive ? `3px solid white` : '3px solid transparent',
                        }}
                        animate={{
                          rotate: isActive ? [0, 360] : 0,
                          scale: isActive ? [1, 1.2, 1] : 1,
                          y: isActive ? [0, -5, 0] : 0,
                        }}
                        transition={{
                          rotate: { duration: 2.5, repeat: isActive ? Infinity : 0, ease: "linear" },
                          scale: { duration: 1.5, repeat: isActive ? Infinity : 0 },
                          y: { duration: 1.5, repeat: isActive ? Infinity : 0, ease: "easeInOut" }
                        }}
                      >
                        <motion.span
                          animate={{
                            scale: isActive ? [1, 1.1, 1] : 1,
                          }}
                          transition={{
                            duration: 1,
                            repeat: isActive ? Infinity : 0,
                          }}
                        >
                          {step.number}
                        </motion.span>

                        {/* Glow Ring Around Badge */}
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 rounded-2xl"
                            style={{
                              border: `2px solid ${step.color}`,
                            }}
                            animate={{
                              scale: [1, 1.6, 1],
                              opacity: [0.8, 0, 0.8],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeOut"
                            }}
                          />
                        )}
                      </motion.div>

                      {/* Icon with Advanced Morphing */}
                      <motion.div
                        className="relative w-24 h-24 flex items-center justify-center mb-5 mx-auto overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, ${step.color}15, ${step.color}30)`,
                        }}
                        animate={{
                          borderRadius: isActive ? ['20px', '50%', '20px'] : '20px',
                          rotate: isActive ? [0, 180, 360] : 0,
                        }}
                        transition={{
                          borderRadius: { duration: 3, repeat: isActive ? Infinity : 0, ease: "easeInOut" },
                          rotate: { duration: 6, repeat: isActive ? Infinity : 0, ease: "linear" }
                        }}
                      >
                        {/* Icon Glow */}
                        {isActive && (
                          <motion.div
                            className="absolute inset-0"
                            style={{
                              background: `radial-gradient(circle, ${step.color}60, transparent 70%)`,
                            }}
                            animate={{
                              scale: [0.8, 1.2, 0.8],
                              opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        )}

                        <motion.div
                          className="relative z-10"
                          animate={{
                            rotate: isActive ? [0, -360] : 0,
                            scale: isActive ? [1, 1.3, 1] : 1,
                          }}
                          transition={{
                            rotate: { duration: 6, repeat: isActive ? Infinity : 0, ease: "linear" },
                            scale: { duration: 2, repeat: isActive ? Infinity : 0, ease: "easeInOut" }
                          }}
                        >
                          <Icon className="w-12 h-12" style={{ color: step.color }} />
                        </motion.div>

                        {/* Multiple Ripple Effects */}
                        {isActive && [...Array(3)].map((_, i) => (
                          <motion.div
                            key={`ripple-${i}`}
                            className="absolute inset-0 rounded-2xl border-2"
                            style={{ borderColor: step.color }}
                            initial={{ scale: 0.8, opacity: 0.8 }}
                            animate={{
                              scale: [0.8, 2],
                              opacity: [0.8, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.7,
                              ease: "easeOut"
                            }}
                          />
                        ))}
                      </motion.div>

                      {/* Content with Glitch Effect */}
                      <div className="relative text-center space-y-3 z-10">
                        <motion.h3
                          className="text-xl font-bold"
                          style={{ color: isActive ? step.color : '#1F2937' }}
                          animate={{
                            scale: isActive ? [1, 1.08, 1] : 1,
                            y: isActive ? [0, -2, 0] : 0,
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: isActive ? Infinity : 0,
                            ease: "easeInOut"
                          }}
                        >
                          {step.title}
                        </motion.h3>
                        <motion.p
                          className="text-sm text-gray-600 leading-relaxed"
                          animate={{
                            opacity: isActive ? 1 : 0.7,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {step.description}
                        </motion.p>
                      </div>

                      {/* Scanning Line Effect */}
                      {isActive && (
                        <motion.div
                          className="absolute left-0 right-0 h-0.5 rounded-full"
                          style={{
                            background: `linear-gradient(90deg, transparent, ${step.color}, transparent)`,
                          }}
                          animate={{
                            top: ['0%', '100%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      )}

                      {/* Pulsating Glow Border */}
                      <motion.div
                        className="absolute inset-0 rounded-3xl pointer-events-none"
                        style={{
                          background: `linear-gradient(135deg, ${step.color}00, ${step.color}40, ${step.color}00)`,
                          boxShadow: isActive ? `inset 0 0 30px ${step.color}40` : 'none',
                        }}
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: isActive ? [0, 0.7, 0] : 0,
                          scale: isActive ? [1, 1.02, 1] : 1,
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: isActive ? Infinity : 0,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Progress Dots */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center items-center gap-3 mt-16"
          >
            {steps.map((step, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveStep(index)}
                className="group relative p-2"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="w-16 h-2 rounded-full relative overflow-hidden"
                  style={{
                    backgroundColor: activeStep === index ? step.color : '#E5E7EB',
                  }}
                >
                  {activeStep === index && (
                    <motion.div
                      className="absolute inset-0 bg-white/40"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </motion.div>

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 bg-gray-900/95 backdrop-blur-sm text-white text-xs font-semibold rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-xl">
                  {step.title}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-gray-900/95" />
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
