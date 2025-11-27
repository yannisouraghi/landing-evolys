'use client';

import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-dark py-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="bg-white p-2 rounded-lg">
            <Image
              src="/logo_evolys.jpg"
              alt="Evolys Logo"
              width={60}
              height={60}
              className="rounded"
            />
          </div>

          {/* Copyright & Legal */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-white/70">
            <p>&copy; {currentYear} Evolys. Tous droits réservés.</p>
            <a
              href="#"
              className="hover:text-evolys-blue transition-colors duration-300"
            >
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
