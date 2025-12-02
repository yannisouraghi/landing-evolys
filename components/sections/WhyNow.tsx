'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiUsers, FiHome, FiArrowRight } from 'react-icons/fi';

export function WhyNow() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative pt-10 pb-8 sm:pt-12 sm:pb-10 md:pt-14 md:pb-12 bg-gradient-to-b from-blue-50/50 via-slate-100 to-blue-50/50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-10"
        >
          <span className="text-evolys-blue font-medium text-sm tracking-wider uppercase mb-2 block">
            Le moment parfait
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-dark">
            Pourquoi <span className="text-evolys-blue">maintenant</span> ?
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Card 1 - Acheteurs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group"
          >
            <div className="relative bg-white rounded-2xl p-8 h-full border-2 border-evolys-blue/20 shadow-[0_8px_30px_rgba(0,180,216,0.12)] hover:shadow-[0_15px_50px_rgba(0,180,216,0.2)] hover:border-evolys-blue/40 transition-all duration-300">
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-evolys-blue to-cyan-500 rounded-xl flex items-center justify-center shadow-lg mb-5">
                <FiUsers className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-dark mb-3">
                Côté <span className="text-evolys-blue">acheteurs</span>
              </h3>

              <p className="text-gray-600 leading-relaxed mb-5">
                Chaque jour, des milliers de personnes veulent investir en immobilier mais très peu sont réellement accompagnées !
              </p>

              <div className="inline-flex items-center gap-2 text-sm text-evolys-blue font-medium bg-evolys-blue/10 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-evolys-blue rounded-full" />
                Les clients de votre portefeuille ou non
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-3 h-12 bg-gradient-to-b from-evolys-blue to-transparent rounded-bl" />
                <div className="absolute top-0 right-0 h-3 w-12 bg-gradient-to-l from-evolys-blue to-transparent rounded-bl" />
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Vendeurs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group"
          >
            <div className="relative bg-white rounded-2xl p-8 h-full border-2 border-evolys-blue-dark/20 shadow-[0_8px_30px_rgba(0,119,182,0.12)] hover:shadow-[0_15px_50px_rgba(0,119,182,0.2)] hover:border-evolys-blue-dark/40 transition-all duration-300">
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-evolys-blue-dark to-evolys-blue rounded-xl flex items-center justify-center shadow-lg mb-5">
                <FiHome className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-dark mb-3">
                Côté <span className="text-evolys-blue-dark">vendeurs</span>
              </h3>

              <p className="text-gray-600 leading-relaxed mb-5">
                Vos propriétaires souhaitent vendre ? C'est de l'argent qui part chez les agences immobilières alors que c'est vous qui connaissez le bien, sa rentabilité et le propriétaire.
              </p>

              <div className="inline-flex items-center gap-2 text-sm text-evolys-blue-dark font-medium bg-evolys-blue-dark/10 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-evolys-blue-dark rounded-full" />
                Gardez la valeur dans votre écosystème
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-20 h-20 overflow-hidden rounded-tl-2xl">
                <div className="absolute top-0 left-0 w-3 h-12 bg-gradient-to-b from-evolys-blue-dark to-transparent rounded-br" />
                <div className="absolute top-0 left-0 h-3 w-12 bg-gradient-to-r from-evolys-blue-dark to-transparent rounded-br" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Center message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-8"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-1 bg-gradient-to-r from-evolys-blue to-cyan-400 rounded-full" />
            <h3 className="text-xl md:text-2xl font-bold text-dark">
              Les deux côtés ont besoin de vous
            </h3>
            <span className="text-2xl md:text-3xl font-black text-evolys-blue">
              maintenant !
            </span>
            <div className="w-10 h-1 bg-gradient-to-r from-cyan-400 to-evolys-blue-dark rounded-full" />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="https://calendly.com/d/cwv3-jv5-bmj/developper-sa-conciergerie-grace-a-la-transaction"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-evolys-blue to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-[0_8px_25px_rgba(0,180,216,0.3)] hover:shadow-[0_12px_35px_rgba(0,180,216,0.4)] hover:scale-105 transition-all duration-300"
          >
            <span>Réservez votre appel</span>
            <FiArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
