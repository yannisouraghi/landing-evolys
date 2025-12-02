'use client';

import { motion } from 'framer-motion';
import { FiSearch, FiFileText, FiHome, FiDollarSign } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const steps = [
  {
    icon: FiSearch,
    number: '01',
    title: 'Recherche',
    description: 'Identification des biens à fort potentiel selon les critères de vos clients',
    color: '#00B4D8',
    angle: 0,
  },
  {
    icon: FiFileText,
    number: '02',
    title: 'Transaction',
    description: 'Gestion complète de l\'achat : négociation, financement et démarches administratives',
    color: '#0096C7',
    angle: 90,
  },
  {
    icon: FiHome,
    number: '03',
    title: 'Conciergerie',
    description: 'Mise en location et gestion locative pour maximiser la rentabilité',
    color: '#0077B6',
    angle: 180,
  },
  {
    icon: FiDollarSign,
    number: '04',
    title: 'Vente',
    description: 'Revente optimisée au meilleur moment pour maximiser la plus-value',
    color: '#023E8A',
    angle: 270,
  }
];

export function Journey() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 sm:py-12 md:py-16 relative overflow-hidden bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
            <div className="w-2 h-2 rounded-full bg-evolys-blue" />
            <span className="text-evolys-blue font-bold text-sm uppercase tracking-widest">Processus Complet</span>
          </div>

          <h2 className="text-[clamp(2rem,5vw,4rem)] font-black leading-[0.95] tracking-tight text-dark">
            Un <span className="text-evolys-blue">cycle</span> parfait
          </h2>
        </motion.div>

        {/* Circle Diagram */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Circular Wheel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px]"
          >
            {/* Background circle */}
            <div className="absolute inset-0 rounded-full border-4 border-gray-100" />

            {/* Segments */}
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                const radius = 42;
                const circumference = 2 * Math.PI * radius;
                const segmentLength = circumference / 4;
                const offset = circumference - (index * segmentLength);

                return (
                  <circle
                    key={index}
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="none"
                    stroke={step.color}
                    strokeWidth={isActive ? "14" : "10"}
                    strokeDasharray={`${segmentLength - 2} ${circumference}`}
                    strokeDashoffset={offset}
                    className="cursor-pointer transition-all duration-300"
                    style={{
                      opacity: isActive ? 1 : 0.4,
                    }}
                    onClick={() => setActiveStep(index)}
                  />
                );
              })}
            </svg>

            {/* Icon buttons around the circle */}
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              const angleRad = (step.angle - 90) * (Math.PI / 180);
              const radius = 50;
              const x = 50 + radius * Math.cos(angleRad);
              const y = 50 + radius * Math.sin(angleRad);

              return (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                  }}
                >
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                      isActive ? 'scale-110' : 'hover:scale-105'
                    }`}
                    style={{
                      background: isActive ? step.color : 'white',
                      border: isActive ? 'none' : `2px solid ${step.color}40`,
                    }}
                  >
                    <Icon
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      style={{ color: isActive ? 'white' : step.color }}
                    />
                  </div>
                </button>
              );
            })}

            {/* Center content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div
                  className="text-4xl sm:text-5xl font-black mb-1"
                  style={{ color: steps[activeStep].color }}
                >
                  {steps[activeStep].number}
                </div>
                <div
                  className="text-base sm:text-lg font-bold"
                  style={{ color: steps[activeStep].color }}
                >
                  {steps[activeStep].title}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Description Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-[350px]"
          >
            <div
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-l-4 transition-all duration-300"
              style={{ borderColor: steps[activeStep].color }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `${steps[activeStep].color}15` }}
                >
                  {(() => {
                    const Icon = steps[activeStep].icon;
                    return <Icon className="w-6 h-6" style={{ color: steps[activeStep].color }} />;
                  })()}
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-400">{steps[activeStep].number}</span>
                  <h3 className="text-xl font-bold" style={{ color: steps[activeStep].color }}>
                    {steps[activeStep].title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {steps[activeStep].description}
              </p>
            </div>

            {/* Step indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className="p-1"
                >
                  <div
                    className="w-10 h-1.5 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: activeStep === index ? step.color : '#E5E7EB',
                    }}
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
