import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evolys, l'écosystème conçu pour les conciergeries",
  description:
    "Ecosystème tout-en-un pour les conciergeries modernes.",

  openGraph: {
    title: "Evolys, l'écosystème conçu pour les conciergeries",
    description:
      "Ecosystème tout-en-un pour les conciergeries : gestion, automatisation et performance.",
    url: "https://reseau-evolys.fr",
    siteName: "Evolys",
    images: [
      {
        url: "https://reseau-evolys.fr/logo_evolys.jpg",
        width: 1200,
        height: 630,
        alt: "Evolys – Conciergerie nouvelle génération",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Evolys, l'écosystème conçu pour les conciergeries",
    description:
      "La plateforme pensée pour faire passer votre conciergerie au niveau supérieur.",
    images: ["https://reseau-evolys.fr/logo_evolys.jpg"],
  },
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
