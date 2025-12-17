'use client';

import { motion } from 'framer-motion';

const services = [
  {
    icon: '🏡',
    title: 'Achat immobilier',
    description: 'Recherche personnalisée, visites sélectives et négociation pour trouver le bien idéal au meilleur prix.',
  },
  {
    icon: '💰',
    title: 'Vente immobilière',
    description: "Estimation précise, marketing ciblé et accompagnement jusqu'à la signature pour une vente optimale.",
  },
  {
    icon: '📈',
    title: 'Investissement locatif',
    description: 'Analyse de rentabilité, conseils fiscaux et gestion complète pour un investissement serein.',
  },
  {
    icon: '🎯',
    title: 'Mandataire exclusif',
    description: 'Service premium avec commission réduite et marketing intensif pour une vente rapide.',
  },
  {
    icon: '📊',
    title: 'Conseil patrimonial',
    description: "Stratégie d'investissement sur-mesure et optimisation fiscale pour développer votre patrimoine.",
  },
  {
    icon: '🔍',
    title: 'Expertise & estimation',
    description: 'Évaluation précise avec analyse comparative du marché pour une estimation juste de votre bien.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16"
        >
          <span className="inline-block bg-evolys-blue text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-4">
            NOS SERVICES
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold mb-6 tracking-tight">
            Une expertise complète pour tous vos projets
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            De l'achat à la vente, en passant par l'investissement locatif,
            nous vous accompagnons à chaque étape avec professionnalisme.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white p-6 sm:p-8 md:p-10 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-transparent hover:border-evolys-blue"
            >
              {/* Top bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-evolys-blue to-evolys-blue-dark rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-[60px] h-[60px] bg-gradient-to-br from-evolys-blue/15 to-evolys-blue/5 rounded-xl flex items-center justify-center mb-6 text-3xl">
                {service.icon}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-dark">{service.title}</h3>

              <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-evolys-blue font-semibold text-[0.95rem] group-hover:gap-3 transition-all duration-300"
              >
                En savoir plus →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
