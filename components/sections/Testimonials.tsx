'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    content: "Grâce à Evolys, j'ai pu acquérir 3 biens en 2 ans avec une rentabilité moyenne de 12%. Leur expertise du marché rouennais est vraiment précieuse. Je recommande vivement leurs services !",
    author: 'Jean-Marc Petit',
    position: 'Investisseur - 3 biens acquis',
    avatar: 'JM',
  },
  {
    content: "L'équipe d'Evolys a vendu ma maison en seulement 3 semaines au prix demandé. Leur stratégie marketing et leur réseau sont impressionnants. Un service vraiment professionnel.",
    author: 'Sophie Leroux',
    position: 'Vendeuse satisfaite',
    avatar: 'SL',
  },
  {
    content: "Premier achat immobilier réussi grâce à Evolys ! Ils m'ont guidé à chaque étape, négocié un excellent prix et trouvé le financement optimal. Je ne peux que les recommander.",
    author: 'Alexandre Dumont',
    position: 'Primo-accédant',
    avatar: 'AD',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-24 relative bg-gradient-to-br from-slate-50 via-white to-blue-50/20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-evolys-blue/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-evolys-blue/3 rounded-full blur-3xl" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16"
        >
          <span className="inline-block bg-evolys-blue text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-4">
            TÉMOIGNAGES
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold mb-6 tracking-tight">
            La satisfaction de nos clients
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Des investisseurs satisfaits qui nous recommandent
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-gray-50 p-6 sm:p-8 md:p-10 rounded-xl hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              {/* Quote Mark */}
              <div className="absolute top-4 right-8 text-[4rem] text-evolys-blue opacity-15 font-serif leading-none">
                "
              </div>

              {/* Content */}
              <p className="text-base sm:text-lg text-dark-light leading-relaxed mb-6 sm:mb-8 relative z-10">
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-[50px] h-[50px] bg-gradient-to-br from-evolys-blue to-evolys-blue-dark rounded-full flex items-center justify-center text-white font-semibold text-xl">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-dark mb-1">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-yellow-400 text-base mt-1">★★★★★</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
