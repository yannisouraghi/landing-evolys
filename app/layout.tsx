import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
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
      <head>
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '9188010807969736');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=9188010807969736&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
