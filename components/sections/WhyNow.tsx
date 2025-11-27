'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiUsers, FiHome, FiArrowRight } from 'react-icons/fi';

const cards = [
  {
    icon: FiUsers,
    title: "Côté",
    highlight: "acheteurs",
    description: "Chaque jour, des milliers de personnes veulent investir en immobilier mais très peu sont réellement accompagnées !",
    badge: "Les clients de votre portefeuille ou non",
  },
  {
    icon: FiHome,
    title: "Côté",
    highlight: "vendeurs",
    description: "Vos propriétaires souhaitent vendre ? C'est de l'argent qui part chez les agences immobilières alors que c'est vous qui connaissez le bien, sa rentabilité et le propriétaire.",
    badge: "Gardez la valeur dans votre écosystème",
  },
];

export function WhyNow() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative pt-16 pb-10 sm:pt-20 sm:pb-12 md:pt-24 md:pb-14 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">

      {/* Background animated orbs */}
      <motion.div
        className="absolute top-20 left-[10%] w-[400px] h-[400px] bg-evolys-blue/10 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-[10%] w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Floating elements */}
      <motion.div
        className="absolute top-[20%] right-[15%] w-3 h-3 bg-evolys-blue/40 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[40%] left-[8%] w-2 h-2 bg-cyan-400/50 rounded-full"
        animate={{
          y: [0, 15, 0],
          x: [0, 8, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-[30%] right-[10%] w-2.5 h-2.5 bg-evolys-blue-dark/40 rounded-full"
        animate={{
          y: [0, -12, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute top-[60%] left-[12%] w-1.5 h-1.5 bg-evolys-blue/50 rounded-full"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#00B4D8_1px,transparent_1px)] bg-[length:32px_32px] opacity-[0.07]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-evolys-blue font-medium text-sm tracking-wider uppercase mb-3 block">
            Le moment parfait
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-dark">
            Pourquoi <span className="text-evolys-blue">maintenant</span> ?
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="relative grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-6 mb-16 items-stretch">

          {/* Card 1 - Acheteurs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="group relative h-full"
          >
            {/* Animated rotating border */}
            <div className="absolute -inset-[2px] rounded-2xl overflow-hidden">
              <motion.div
                className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,#00B4D8_60deg,#22D3EE_120deg,transparent_180deg)]"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Card */}
            <div className="relative bg-white rounded-2xl p-8 md:p-10 h-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(0,180,216,0.2)] overflow-hidden">
              {/* Icon */}
              <div className="relative mb-6">
                <motion.div
                  className="w-14 h-14 bg-gradient-to-br from-evolys-blue to-cyan-500 rounded-xl flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110"
                  animate={{
                    boxShadow: [
                      "0 4px 20px rgba(0,180,216,0.3)",
                      "0 4px 30px rgba(0,180,216,0.5)",
                      "0 4px 20px rgba(0,180,216,0.3)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FiUsers className="w-7 h-7 text-white" />
                </motion.div>
              </div>

              <h3 className="text-2xl font-bold text-dark mb-4 relative">
                Côté <span className="text-evolys-blue">acheteurs</span>
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6 relative">
                Chaque jour, des milliers de personnes veulent investir en immobilier mais très peu sont réellement accompagnées !
              </p>

              <div className="inline-flex items-center gap-2 text-sm text-evolys-blue font-medium bg-evolys-blue/10 px-4 py-2 rounded-full relative">
                <motion.span
                  className="w-2 h-2 bg-evolys-blue rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                Les clients de votre portefeuille ou non
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-evolys-blue via-cyan-400 to-evolys-blue-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </div>
          </motion.div>

          {/* Center & */}
          <motion.div
            className="hidden md:flex items-center justify-center px-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-evolys-blue/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-200">
                <span className="text-2xl font-bold bg-gradient-to-r from-evolys-blue to-cyan-500 bg-clip-text text-transparent">
                  &
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Vendeurs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="group relative h-full"
          >
            {/* Animated rotating border - opposite direction */}
            <div className="absolute -inset-[2px] rounded-2xl overflow-hidden">
              <motion.div
                className="absolute inset-[-100%] bg-[conic-gradient(from_180deg,transparent_0deg,#0077B6_60deg,#00B4D8_120deg,transparent_180deg)]"
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Card */}
            <div className="relative bg-white rounded-2xl p-8 md:p-10 h-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(0,180,216,0.2)] overflow-hidden">
              {/* Icon */}
              <div className="relative mb-6">
                <motion.div
                  className="w-14 h-14 bg-gradient-to-br from-evolys-blue-dark to-evolys-blue rounded-xl flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110"
                  animate={{
                    boxShadow: [
                      "0 4px 20px rgba(0,119,182,0.3)",
                      "0 4px 30px rgba(0,119,182,0.5)",
                      "0 4px 20px rgba(0,119,182,0.3)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <FiHome className="w-7 h-7 text-white" />
                </motion.div>
              </div>

              <h3 className="text-2xl font-bold text-dark mb-4 relative">
                Côté <span className="text-evolys-blue-dark">vendeurs</span>
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6 relative">
                Vos propriétaires souhaitent vendre ? C'est de l'argent qui part chez les agences immobilières alors que c'est vous qui connaissez le bien, sa rentabilité et le propriétaire.
              </p>

              <div className="inline-flex items-center gap-2 text-sm text-evolys-blue-dark font-medium bg-evolys-blue-dark/10 px-4 py-2 rounded-full relative">
                <motion.span
                  className="w-2 h-2 bg-evolys-blue-dark rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
                Gardez la valeur dans votre écosystème
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-evolys-blue-dark via-evolys-blue to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right" />
            </div>
          </motion.div>
        </div>

        {/* Center message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mb-10"
        >
          <div className="flex flex-col items-center gap-3">
            {/* Decorative line top */}
            <motion.div
              className="w-12 h-1 bg-gradient-to-r from-evolys-blue to-cyan-400 rounded-full"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            />

            <h3 className="text-2xl md:text-3xl font-bold text-dark leading-tight">
              Les deux côtés ont besoin de vous
            </h3>

            <motion.span
              className="text-3xl md:text-4xl font-black bg-gradient-to-r from-evolys-blue via-cyan-400 to-evolys-blue-dark bg-clip-text text-transparent"
              animate={{
                scale: [1, 1.05, 1],
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                backgroundPosition: { duration: 4, repeat: Infinity, ease: "linear" }
              }}
              style={{ backgroundSize: '200% 100%' }}
            >
              maintenant !
            </motion.span>

            {/* Decorative line bottom */}
            <motion.div
              className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-evolys-blue-dark rounded-full"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center pb-4"
        >
          <div className="relative inline-block group">
            {/* Animated border */}
            <div className="absolute -inset-[2px] rounded-full overflow-hidden">
              <motion.div
                className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,#00B4D8,#22D3EE,#0077B6,#00B4D8)]"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Glow on hover */}
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-evolys-blue to-cyan-400 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
            />

            <a
              href="https://calendly.com/d/cwv3-jv5-bmj/developper-sa-conciergerie-grace-a-la-transaction"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 bg-gradient-to-r from-evolys-blue to-cyan-500 text-white px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 hover:from-evolys-blue-dark hover:to-evolys-blue"
            >
              <span>Réservez votre appel</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <FiArrowRight className="w-5 h-5" />
              </motion.div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
