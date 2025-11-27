'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Analyse de rentabilité précise',
    description: 'Études détaillées avec projections financières sur 10 ans',
  },
  {
    title: 'Optimisation fiscale',
    description: 'Conseils personnalisés pour réduire votre imposition',
  },
  {
    title: 'Gestion clé en main',
    description: 'Service complet de la recherche à la gestion locative',
  },
  {
    title: 'Financement optimisé',
    description: 'Partenariats bancaires pour les meilleures conditions',
  },
];

export function Investment() {
  return (
    <section id="investment" className="py-24 relative bg-gradient-to-br from-white via-blue-50/20 to-slate-50 overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-evolys-blue/20 to-transparent" />
      <div className="absolute top-20 right-[-5%] w-96 h-96 bg-evolys-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-[-5%] w-72 h-72 bg-evolys-accent/5 rounded-full blur-3xl" />

      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-evolys-blue text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-4">
            INVESTIR AVEC EVOLYS
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold mb-6 tracking-tight">
            L'investissement immobilier réinventé
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Bénéficiez de notre expertise pour construire un patrimoine solide et rentable
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mt-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl font-bold mb-6 leading-tight">
              Maximisez votre retour sur investissement
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Notre approche data-driven et notre connaissance approfondie du marché
              rouennais vous garantissent les meilleures opportunités d'investissement.
            </p>

            <ul className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg hover:translate-x-2 hover:shadow-[0_5px_15px_rgba(0,0,0,0.05)] transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-evolys-blue to-evolys-blue-dark rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="block text-dark mb-1">{feature.title}</strong>
                    <span className="text-gray-600 text-[0.95rem]">{feature.description}</span>
                  </div>
                </motion.li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-evolys-blue to-evolys-blue-dark text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_30px_rgba(0,180,216,0.3)]"
            >
              Contactez-nous
            </a>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-dark to-dark-light rounded-xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-br from-evolys-blue/10 to-transparent flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                  <div className="w-0 h-0 border-l-[25px] border-l-evolys-blue border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent ml-1" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
