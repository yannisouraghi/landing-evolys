'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const founders = [
  {
    name: 'Axel',
    role: 'Co-fondateur & CEO',
    image: '/axel.png',
    bio: "Passionné par l'immobilier et l'innovation, Axel apporte son expertise et sa vision stratégique pour offrir un service d'excellence. Sa connaissance approfondie du marché rouennais est un atout majeur pour nos clients.",
    stats: [
      { value: '10+', label: "Ans d'expertise" },
      { value: '100%', label: 'Engagement' },
    ],
  },
  {
    name: 'Hugo',
    role: 'Co-fondateur & Directeur Commercial',
    image: '/hugo.png',
    bio: 'Expert en stratégie commerciale et relation client, Hugo développe des solutions sur-mesure pour chaque projet. Son approche personnalisée et son réseau local garantissent un accompagnement optimal.',
    stats: [
      { value: '95%', label: 'Satisfaction client' },
      { value: '24/7', label: 'Disponibilité' },
    ],
  },
];

export function Founders() {
  return (
    <section id="founders" className="py-32 relative overflow-hidden bg-gradient-to-br from-blue-50/20 via-white to-slate-50/50">
      {/* Elegant floating backgrounds */}
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[140%] bg-[radial-gradient(circle,rgba(0,180,216,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-evolys-blue/20 to-transparent" />
      <div className="absolute top-1/4 left-[-10%] w-80 h-80 bg-evolys-accent/5 rounded-full blur-3xl" />

      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block bg-evolys-blue text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-4">
            LES FONDATEURS
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold mb-6 tracking-tight">
            Les visionnaires derrière Evolys
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Une passion commune pour l'excellence immobilière et l'innovation
          </p>
        </motion.div>

        {/* Founders Grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative bg-white rounded-3xl p-12 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Floating shapes */}
              <div className="absolute w-20 h-20 bg-evolys-blue opacity-10 rounded-full -top-5 -right-5 animate-[float_6s_ease-in-out_infinite]" />
              <div className="absolute w-15 h-15 bg-evolys-blue-light opacity-10 rounded-full -bottom-5 -left-5 animate-[float_8s_ease-in-out_infinite_reverse]" />

              {/* Avatar */}
              <div className="relative w-[200px] h-[200px] mx-auto mb-8">
                <div className="w-full h-full rounded-full relative overflow-hidden border-4 border-evolys-blue/20">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-evolys-blue/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4">
                      {['in', '@'].map((icon, i) => (
                        <a
                          key={i}
                          href="#"
                          className="w-10 h-10 bg-white text-evolys-blue rounded-full flex items-center justify-center font-bold hover:bg-evolys-blue hover:text-white transition-colors duration-300"
                        >
                          {icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-3xl font-extrabold text-dark mb-2 relative inline-block group">
                  {founder.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-evolys-blue to-evolys-blue-dark group-hover:w-full transition-all duration-500" />
                </h3>
                <p className="text-evolys-blue font-semibold mb-6 tracking-wide">{founder.role}</p>

                <div className="w-15 h-0.5 bg-gradient-to-r from-evolys-blue to-evolys-blue-dark mx-auto my-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-[shimmer_3s_ease_infinite]" />
                </div>

                <p className="text-gray-600 leading-relaxed mb-8">{founder.bio}</p>

                {/* Stats */}
                <div className="flex justify-center gap-12 pt-8 border-t border-gray-100">
                  {founder.stats.map((stat, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <span className="text-2xl font-extrabold bg-gradient-to-r from-evolys-blue to-evolys-blue-dark bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </span>
                      <span className="text-sm text-gray-600 font-medium">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
