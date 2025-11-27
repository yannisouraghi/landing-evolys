'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiTrendingUp, FiAward, FiPackage, FiUsers, FiDollarSign } from 'react-icons/fi';

const advantages = [
  {
    icon: FiAward,
    title: "Professionnalisation de votre conciergerie",
    description: "Élevez votre service à un niveau supérieur avec des processus structurés et professionnels.",
  },
  {
    icon: FiTrendingUp,
    title: "Différenciation par rapport à la concurrence",
    description: "Démarquez-vous avec une proposition de valeur unique sur votre marché.",
  },
  {
    icon: FiPackage,
    title: "Une offre plus complète",
    description: "Proposez une solution tout-en-un à vos clients, de l'acquisition à la gestion.",
  },
  {
    icon: FiUsers,
    title: "Un panel de clients plus large",
    description: "Accédez à de nouveaux segments de marché et élargissez votre clientèle.",
  },
  {
    icon: FiDollarSign,
    title: "Augmentation de votre chiffre d'affaires",
    description: "Multipliez vos revenus grâce à la transaction immobilière.",
  }
];

function AdvantageCard({ advantage, index, isEven }: { advantage: typeof advantages[0], index: number, isEven: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const Icon = advantage.icon;

  return (
    <motion.div
      ref={cardRef}
      className={`relative flex ${isEven ? 'md:justify-start' : 'md:justify-end'} pl-12 md:pl-0`}
    >
      {/* Card Container */}
      <div className={`relative w-full md:w-[calc(50%-3rem)] group`}>

        {/* Glow effect behind card */}
        <motion.div
          className="absolute -inset-3 bg-gradient-to-r from-evolys-blue/15 via-cyan-400/10 to-evolys-blue-dark/15 rounded-3xl blur-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.5, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* Reveal mask container */}
        <div className="relative overflow-hidden rounded-2xl">
          {/* Sliding reveal overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-slate-100 to-white z-20"
            initial={{ scaleX: 1 }}
            animate={isInView ? { scaleX: 0 } : { scaleX: 1 }}
            transition={{
              duration: 0.7,
              ease: [0.87, 0, 0.13, 1],
              delay: 0.1
            }}
            style={{
              transformOrigin: isEven ? 'right' : 'left',
            }}
          />

          {/* Colored reveal line */}
          <motion.div
            className="absolute inset-y-0 w-1.5 bg-gradient-to-b from-evolys-blue via-cyan-400 to-evolys-blue-dark z-30 shadow-[0_0_20px_rgba(0,180,216,0.5)]"
            initial={{
              left: isEven ? 0 : 'auto',
              right: isEven ? 'auto' : 0,
            }}
            animate={isInView ? {
              x: isEven ? 'calc(100vw)' : 'calc(-100vw)',
            } : {}}
            transition={{
              duration: 0.7,
              ease: [0.87, 0, 0.13, 1],
              delay: 0.1
            }}
          />

          {/* Card content */}
          <motion.div
            className="relative bg-gradient-to-br from-white via-white to-blue-50/50 backdrop-blur-md border border-gray-200/80 p-8 overflow-hidden transition-all duration-500 hover:border-evolys-blue/40 hover:shadow-[0_30px_80px_-20px_rgba(0,180,216,0.35)]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            {/* Subtle gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-evolys-blue/[0.03]" />

            {/* Soft corner glow */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-evolys-blue/[0.06] rounded-full blur-2xl" />

            {/* Animated background gradient on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-evolys-blue/5 via-transparent to-cyan-400/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            {/* Corner decoration top */}
            <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'}`}>
              <motion.div
                className="relative w-20 h-20"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                <motion.div
                  className={`absolute ${isEven ? 'right-0' : 'left-0'} top-0 w-[3px] bg-gradient-to-b from-evolys-blue via-cyan-400 to-transparent rounded-full`}
                  initial={{ height: 0 }}
                  animate={isInView ? { height: 50 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 }}
                />
                <motion.div
                  className={`absolute ${isEven ? 'right-0' : 'left-0'} top-0 h-[3px] bg-gradient-to-r ${isEven ? 'from-transparent via-cyan-400 to-evolys-blue' : 'from-evolys-blue via-cyan-400 to-transparent'} rounded-full`}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: 50 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                />
              </motion.div>
            </div>

            {/* Number indicator - always on the right to avoid overlap with icon */}
            <motion.div
              className="absolute top-2 right-4 text-8xl font-black text-evolys-blue/25 select-none leading-none"
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              0{index + 1}
            </motion.div>

            {/* Icon container */}
            <div className="relative mb-6 z-10">
              <motion.div
                className="relative w-16 h-16 flex items-center justify-center"
                initial={{ y: 40, opacity: 0, rotate: -15 }}
                animate={isInView ? { y: 0, opacity: 1, rotate: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                {/* Icon background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-evolys-blue/20 via-cyan-400/15 to-evolys-blue-dark/20 group-hover:from-evolys-blue/30 group-hover:via-cyan-400/25 group-hover:to-evolys-blue-dark/30 transition-all duration-500" />

                {/* Inner white bg */}
                <div className="absolute inset-[3px] rounded-xl bg-white group-hover:bg-blue-50/50 transition-colors duration-500" />

                {/* Animated pulse ring */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-evolys-blue/25"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4
                  }}
                />

                {/* Second pulse ring */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border border-cyan-400/20"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.2, 0, 0.2],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4 + 0.3
                  }}
                />

                {/* Icon */}
                <motion.div
                  className="relative z-10"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Icon className="w-7 h-7 text-evolys-blue" />
                </motion.div>
              </motion.div>
            </div>

            {/* Title */}
            <div className="overflow-hidden mb-4 relative z-10">
              <motion.h3
                className="text-xl font-bold text-dark leading-snug"
                initial={{ y: '100%' }}
                animate={isInView ? { y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.55,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                {advantage.title}
              </motion.h3>
            </div>

            {/* Description */}
            <div className="overflow-hidden relative z-10">
              <motion.p
                className="text-gray-600 leading-relaxed"
                initial={{ y: '100%', opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                {advantage.description}
              </motion.p>
            </div>

            {/* Bottom gradient bar */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-evolys-blue via-cyan-400 to-evolys-blue-dark"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.7,
                ease: [0.22, 1, 0.36, 1]
              }}
              style={{ transformOrigin: isEven ? 'left' : 'right' }}
            />

            {/* Shine effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.5) 40%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.5) 60%, transparent 65%)',
                }}
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function Advantages() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0.15, 0.8], [0, 1]);

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 md:py-40 bg-gradient-to-b from-slate-50 via-blue-50/50 to-slate-50 overflow-hidden">

      {/* Background orbs */}
      <motion.div
        className="absolute top-0 left-[-15%] w-[600px] h-[600px] bg-evolys-blue/[0.06] rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-[-15%] w-[700px] h-[700px] bg-evolys-blue-dark/[0.06] rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div
        className="absolute top-1/3 right-[10%] w-[300px] h-[300px] bg-cyan-200/15 rounded-full blur-[80px]"
        animate={{
          scale: [1, 1.3, 1],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-[5%] w-[250px] h-[250px] bg-blue-200/15 rounded-full blur-[60px]"
        animate={{
          scale: [1, 1.25, 1],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      {/* Dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#00B4D8_1px,transparent_1px)] bg-[length:32px_32px] opacity-[0.08]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 md:mb-24"
        >
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-dark">
            Les avantages{' '}
            <span className="text-evolys-blue">pour vous</span>
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">

          {/* Floating bubbles around the line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-60 pointer-events-none hidden md:block">
            {/* Left side bubbles */}
            <motion.div
              className="absolute left-[10%] top-[5%] w-4 h-4 bg-evolys-blue/30 rounded-full"
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute left-[5%] top-[20%] w-6 h-6 bg-evolys-blue/20 rounded-full"
              animate={{
                y: [0, 25, 0],
                scale: [1, 0.8, 1],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.div
              className="absolute left-[15%] top-[38%] w-3 h-3 bg-cyan-400/40 rounded-full"
              animate={{
                y: [0, -15, 0],
                x: [0, -8, 0],
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div
              className="absolute left-[8%] top-[55%] w-5 h-5 bg-evolys-blue-dark/25 rounded-full"
              animate={{
                y: [0, 20, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
            <motion.div
              className="absolute left-[12%] top-[72%] w-4 h-4 bg-evolys-blue/35 rounded-full"
              animate={{
                y: [0, -18, 0],
                x: [0, 12, 0],
              }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            />
            <motion.div
              className="absolute left-[6%] top-[88%] w-3 h-3 bg-cyan-300/30 rounded-full"
              animate={{
                y: [0, 15, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />

            {/* Right side bubbles */}
            <motion.div
              className="absolute right-[8%] top-[10%] w-5 h-5 bg-evolys-blue-dark/25 rounded-full"
              animate={{
                y: [0, 22, 0],
                x: [0, -10, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            />
            <motion.div
              className="absolute right-[15%] top-[28%] w-3 h-3 bg-evolys-blue/40 rounded-full"
              animate={{
                y: [0, -12, 0],
                scale: [1, 1.4, 1],
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            />
            <motion.div
              className="absolute right-[5%] top-[45%] w-6 h-6 bg-cyan-400/25 rounded-full"
              animate={{
                y: [0, 18, 0],
                x: [0, 8, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
            />
            <motion.div
              className="absolute right-[12%] top-[62%] w-4 h-4 bg-evolys-blue/30 rounded-full"
              animate={{
                y: [0, -20, 0],
                scale: [1, 0.7, 1],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
            />
            <motion.div
              className="absolute right-[7%] top-[78%] w-5 h-5 bg-evolys-blue-dark/30 rounded-full"
              animate={{
                y: [0, 15, 0],
                x: [0, -12, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
            />
            <motion.div
              className="absolute right-[18%] top-[92%] w-3 h-3 bg-evolys-blue/35 rounded-full"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          </div>

          {/* Curved SVG Line */}
          <svg
            className="absolute left-1/2 top-0 h-full w-24 -translate-x-1/2 pointer-events-none hidden md:block"
            viewBox="0 0 100 1000"
            preserveAspectRatio="none"
            fill="none"
          >
            {/* Background path */}
            <path
              d="M 50 0
                 Q 10 100 50 200
                 Q 90 300 50 400
                 Q 10 500 50 600
                 Q 90 700 50 800
                 Q 10 900 50 1000"
              stroke="#CBD5E1"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />

            {/* Animated path */}
            <motion.path
              d="M 50 0
                 Q 10 100 50 200
                 Q 90 300 50 400
                 Q 10 500 50 600
                 Q 90 700 50 800
                 Q 10 900 50 1000"
              stroke="url(#lineGradientAdvantages)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              style={{ pathLength }}
            />

            {/* Glow path */}
            <motion.path
              d="M 50 0
                 Q 10 100 50 200
                 Q 90 300 50 400
                 Q 10 500 50 600
                 Q 90 700 50 800
                 Q 10 900 50 1000"
              stroke="url(#lineGradientAdvantages)"
              strokeWidth="12"
              strokeLinecap="round"
              fill="none"
              style={{ pathLength }}
              opacity={0.4}
              filter="blur(6px)"
            />

            <defs>
              <linearGradient id="lineGradientAdvantages" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00B4D8" />
                <stop offset="100%" stopColor="#0077B6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Mobile line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300 md:hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-evolys-blue to-evolys-blue-dark"
              style={{ height: useTransform(scrollYProgress, [0.15, 0.8], ["0%", "100%"]) }}
            />
          </div>

          {/* Advantages List */}
          <div className="space-y-20 md:space-y-28">
            {advantages.map((advantage, index) => (
              <AdvantageCard
                key={index}
                advantage={advantage}
                index={index}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* Important Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-2xl mx-auto mt-28 text-center"
        >
          <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-10 md:p-12 shadow-sm">
            <h3 className="text-[clamp(1.4rem,3vw,1.8rem)] font-semibold leading-tight text-dark mb-3">
              Vous ne devenez pas{' '}
              <span className="text-evolys-blue">agent immobilier</span>
            </h3>
            <p className="text-gray-500">
              Ce n'est pas le but, et ce n'est pas ce que vous voulez.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
