'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FiTrendingUp, FiAward, FiPackage, FiUsers, FiDollarSign } from 'react-icons/fi';

const advantages = [
  {
    icon: FiAward,
    title: "Professionnalisation de votre conciergerie :",
    description: "Élevez votre service à un niveau supérieur avec des processus structurés et professionnels.",
  },
  {
    icon: FiTrendingUp,
    title: "Différenciation par rapport à la concurrence :",
    description: "Démarquez-vous avec une proposition de valeur unique sur votre marché.",
  },
  {
    icon: FiPackage,
    title: "Une offre plus complète :",
    description: "Proposez une solution tout-en-un à vos clients, de l'acquisition à la gestion.",
  },
  {
    icon: FiUsers,
    title: "Un panel de clients plus large :",
    description: "Accédez à de nouveaux segments de marché et élargissez votre clientèle.",
  },
  {
    icon: FiDollarSign,
    title: "Augmentation de votre chiffre d'affaires :",
    description: "Multipliez vos revenus grâce à la transaction immobilière.",
  }
];

export function Advantages() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section ref={sectionRef} className="relative py-10 sm:py-12 md:py-16 bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-dark">
            Les avantages{' '}
            <span className="text-evolys-blue">pour vous</span>
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Curved SVG Line - Desktop */}
          <svg
            className="absolute left-1/2 top-0 h-full w-16 -translate-x-1/2 pointer-events-none hidden md:block"
            viewBox="0 0 60 1000"
            preserveAspectRatio="none"
            fill="none"
          >
            {/* Background path */}
            <path
              d="M 30 0 Q 5 100 30 200 Q 55 300 30 400 Q 5 500 30 600 Q 55 700 30 800 Q 5 900 30 1000"
              stroke="#E2E8F0"
              strokeWidth="2"
              fill="none"
            />
            {/* Animated path */}
            <motion.path
              d="M 30 0 Q 5 100 30 200 Q 55 300 30 400 Q 5 500 30 600 Q 55 700 30 800 Q 5 900 30 1000"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              fill="none"
              style={{ pathLength }}
            />
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00B4D8" />
                <stop offset="100%" stopColor="#0077B6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Mobile line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 md:hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-evolys-blue to-evolys-blue-dark"
              style={{ height: useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]) }}
            />
          </div>

          {/* Advantages List */}
          <div className="space-y-8 md:space-y-10">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4 }}
                  className={`relative flex ${isEven ? 'md:justify-start' : 'md:justify-end'} pl-10 md:pl-0`}
                >
                  {/* Dot on line - Mobile */}
                  <div className="absolute left-[14px] top-6 w-2 h-2 rounded-full bg-evolys-blue md:hidden" />

                  {/* Card */}
                  <div className={`relative w-full md:w-[calc(50%-2rem)] bg-white rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,180,216,0.12)] transition-all duration-300 group`}>
                    {/* Number */}
                    <div className="absolute top-4 right-4 text-5xl font-black text-evolys-blue/25">
                      0{index + 1}
                    </div>

                    {/* Icon */}
                    <div className="w-11 h-11 rounded-lg bg-evolys-blue/10 flex items-center justify-center mb-3 group-hover:bg-evolys-blue/15 transition-colors">
                      <Icon className="w-5 h-5 text-evolys-blue" />
                    </div>

                    {/* Content */}
                    <h3 className="text-base font-bold text-dark mb-2">{advantage.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{advantage.description}</p>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-evolys-blue to-cyan-400 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Important Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto mt-10 text-center"
        >
          <div className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-[clamp(1.2rem,2.5vw,1.6rem)] font-semibold leading-tight text-dark mb-2">
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
