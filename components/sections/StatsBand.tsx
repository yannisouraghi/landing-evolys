'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { number: '10+', label: "Années d'expérience" },
  { number: '95%', label: 'Clients satisfaits' },
  { number: '7J/7', label: 'Disponibilité' },
  { number: '100%', label: 'Sur-mesure' },
];

export function StatsBand() {
  return (
    <section className="bg-white py-8 sm:py-10 md:py-12 border-t border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-evolys-blue to-evolys-blue-dark bg-clip-text text-transparent mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-xs sm:text-sm md:text-[0.95rem] font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
