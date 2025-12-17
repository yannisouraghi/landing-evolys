'use client';

import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export function CTA() {
  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-32 bg-gradient-to-r from-evolys-blue to-evolys-blue-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent_0,transparent_10px,rgba(255,255,255,0.03)_10px,rgba(255,255,255,0.03)_20px)]" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white"
        >
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold mb-6 tracking-tight">
            Contactez Evolys dès maintenant
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 md:mb-12 opacity-95 max-w-2xl mx-auto leading-relaxed">
            Notre équipe d'experts est à votre écoute pour concrétiser vos projets immobiliers.
            Prenons rendez-vous pour discuter de vos besoins.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12">
            {[
              { icon: FiMail, text: 'contact@evolys.fr', href: 'mailto:contact@evolys.fr' },
              { icon: FiPhone, text: '02 76 12 34 56', href: 'tel:+33276123456' },
              { icon: FiMapPin, text: 'Rouen, Normandie', href: '#' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4 rounded-full hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base"
              >
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                <a href={item.href} className="font-medium">
                  {item.text}
                </a>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="mailto:contact@evolys.fr"
              className="bg-white text-evolys-blue px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
            >
              Envoyer un email
            </a>
            <a
              href="tel:+33276123456"
              className="bg-transparent text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-lg font-semibold border-2 border-white/30 text-base sm:text-lg transition-all duration-300 hover:bg-white/10 hover:border-white hover:-translate-y-1"
            >
              Appeler maintenant
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
