'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation simplifiée */}
      <nav className="fixed top-0 w-full z-[1000] bg-white/98 backdrop-blur-xl py-[1.2vh] shadow-[0_1px_0_rgba(0,0,0,0.05)]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 flex justify-between items-center">
          <Link href="/">
            <Image
              src="/logo_evolys.jpg"
              alt="Evolys Logo"
              width={296}
              height={150}
              className="transition-transform duration-300 hover:scale-105 rounded-lg h-[clamp(35px,5vh,70px)] w-auto cursor-pointer"
            />
          </Link>
          <Link
            href="/"
            className="text-dark hover:text-evolys-blue transition-colors duration-300 font-medium"
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </nav>

      {/* Contenu principal */}
      <main className="pt-32 pb-20 px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[900px] mx-auto"
        >
          {/* Titre */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
              Mentions Légales
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-evolys-blue to-evolys-blue-dark mx-auto rounded-full" />
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {/* Éditeur du site */}
            <Section title="1. Éditeur du site">
              <p className="mb-4">
                Le site <strong>Evolys</strong> est édité par la société :
              </p>
              <InfoCard>
                <InfoRow label="Dénomination sociale" value="ARM IMMO" />
                <InfoRow label="Forme juridique" value="SAS, société par actions simplifiée" />
                <InfoRow label="Capital social" value="1 000,00 €" />
                <InfoRow label="Numéro SIREN" value="927 684 944" />
                <InfoRow label="Numéro SIRET (siège)" value="927 684 944 00014" />
                <InfoRow label="Code APE/NAF" value="68.31Z - Agences immobilières" />
                <InfoRow
                  label="Siège social"
                  value="809 Rue de Croixmare, 76510 Saint-Nicolas-d'Aliermont"
                />
                <InfoRow label="Date de création" value="2 avril 2024" />
              </InfoCard>
            </Section>

            {/* Directeur de publication */}
            <Section title="2. Directeur de la publication">
              <p>
                Le directeur de la publication est le représentant légal de la société ARM IMMO.
              </p>
            </Section>

            {/* Hébergeur */}
            <Section title="3. Hébergement">
              <p>
                Le site est hébergé par :
              </p>
              <InfoCard>
                <InfoRow label="Hébergeur" value="Vercel Inc." />
                <InfoRow label="Adresse" value="340 S Lemon Ave #4133, Walnut, CA 91789, USA" />
                <InfoRow label="Site web" value="https://vercel.com" isLink />
              </InfoCard>
            </Section>

            {/* Propriété intellectuelle */}
            <Section title="4. Propriété intellectuelle">
              <p className="mb-4">
                L'ensemble des éléments figurant sur ce site (textes, images, logos, graphismes,
                icônes, etc.) sont protégés par les dispositions du Code de la Propriété
                Intellectuelle.
              </p>
              <p className="mb-4">
                Toute reproduction, représentation, modification, publication, adaptation de tout
                ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé,
                est interdite, sauf autorisation écrite préalable de ARM IMMO.
              </p>
              <p>
                Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il
                contient sera considérée comme constitutive d'une contrefaçon et poursuivie
                conformément aux dispositions des articles L.335-2 et suivants du Code de
                Propriété Intellectuelle.
              </p>
            </Section>

            {/* Protection des données */}
            <Section title="5. Protection des données personnelles">
              <p className="mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la
                loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez des droits
                suivants concernant vos données personnelles :
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">
                <li>Droit d'accès et de rectification</li>
                <li>Droit à l'effacement (droit à l'oubli)</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit d'opposition</li>
              </ul>
              <p>
                Pour exercer ces droits ou pour toute question relative à la protection de vos
                données personnelles, vous pouvez nous contacter à l'adresse du siège social
                mentionnée ci-dessus.
              </p>
            </Section>

            {/* Cookies */}
            <Section title="6. Cookies">
              <p className="mb-4">
                Le site peut utiliser des cookies à des fins de mesure d'audience et
                d'amélioration de l'expérience utilisateur.
              </p>
              <p>
                Vous pouvez paramétrer votre navigateur pour refuser les cookies. Cependant,
                certaines fonctionnalités du site pourraient ne plus être disponibles.
              </p>
            </Section>

            {/* Limitation de responsabilité */}
            <Section title="7. Limitation de responsabilité">
              <p className="mb-4">
                ARM IMMO ne pourra être tenue responsable des dommages directs et indirects
                causés au matériel de l'utilisateur lors de l'accès au site.
              </p>
              <p className="mb-4">
                ARM IMMO décline toute responsabilité quant à l'utilisation qui pourrait être
                faite des informations et contenus présents sur ce site.
              </p>
              <p>
                ARM IMMO s'engage à sécuriser au mieux le site, cependant sa responsabilité
                ne pourra être mise en cause si des données indésirables sont importées et
                installées sur son site à son insu.
              </p>
            </Section>

            {/* Droit applicable */}
            <Section title="8. Droit applicable">
              <p>
                Les présentes mentions légales sont soumises au droit français. En cas de
                litige, les tribunaux français seront seuls compétents.
              </p>
            </Section>

            {/* Contact */}
            <Section title="9. Contact">
              <p className="mb-4">
                Pour toute question concernant ce site, vous pouvez nous contacter :
              </p>
              <InfoCard>
                <InfoRow
                  label="Adresse postale"
                  value="809 Rue de Croixmare, 76510 Saint-Nicolas-d'Aliermont"
                />
              </InfoCard>
            </Section>
          </div>

          {/* Date de mise à jour */}
          <div className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
            <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}</p>
          </div>
        </motion.div>
      </main>

      {/* Footer simplifié */}
      <footer className="bg-dark py-8">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} Evolys. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Composant Section
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 rounded-2xl p-6 sm:p-8"
    >
      <h2 className="text-xl sm:text-2xl font-semibold text-dark mb-4 flex items-center gap-3">
        <span className="w-1 h-6 bg-gradient-to-b from-evolys-blue to-evolys-blue-dark rounded-full" />
        {title}
      </h2>
      <div className="text-gray-600 leading-relaxed">
        {children}
      </div>
    </motion.section>
  );
}

// Composant InfoCard
function InfoCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 mt-4 border border-gray-100 shadow-sm">
      <dl className="space-y-3">
        {children}
      </dl>
    </div>
  );
}

// Composant InfoRow
function InfoRow({
  label,
  value,
  isLink = false
}: {
  label: string;
  value: string;
  isLink?: boolean;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
      <dt className="text-sm font-medium text-gray-500 sm:w-48 shrink-0">{label}</dt>
      <dd className="text-dark font-medium">
        {isLink ? (
          <a
            href={value}
            target="_blank"
            rel="noopener noreferrer"
            className="text-evolys-blue hover:text-evolys-blue-dark transition-colors"
          >
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}
