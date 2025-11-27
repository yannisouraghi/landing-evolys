import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evolys - Investissement Immobilier & Mandataire à Rouen",
  description: "Expert en investissement immobilier et mandataire à Rouen. Nous vous accompagnons dans vos projets d'achat, vente et investissement locatif avec une approche sur-mesure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
