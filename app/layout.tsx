import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// SEU DOMÍNIO
const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.drjohnneuro.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Dr. John Rocha | Neurocirurgião - Especialista em Coluna e Dor",
    template: "%s | Dr. John Rocha",
  },
  description:
    "Dr. John Rocha é neurocirurgião especialista em cirurgia minimamente invasiva da coluna, tratamento de hérnia de disco e dor ciática. Atendimento em Recife, João Pessoa, Campina Grande e Goiana.",
  keywords: [
    "Neurocirurgião em Recife",
    "Neurocirurgião em João Pessoa",
    "Cirurgia de Coluna Minimamente Invasiva",
    "Especialista em Hérnia de Disco",
    "Tratamento de Dor Ciática",
    "Dr. John Rocha",
    "Bloqueio da Dor",
    "Neurocirurgia Campina Grande",
  ],
  authors: [{ name: "Dr. John Rocha" }],
  creator: "Dr. John Rocha",
  publisher: "Dr. John Rocha",
  openGraph: {
    title: "Dr. John Rocha | Neurocirurgião Especialista em Coluna",
    description:
      "Recupere sua qualidade de vida. Tratamentos avançados para coluna e crânio com técnicas minimamente invasivas.",
    url: BASE_URL,
    siteName: "Dr. John Rocha",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/url.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. John Rocha - Neurocirurgião Especialista",
      },
    ],
  },
  icons: {
    icon: "/logojb.png",
    shortcut: "/logojb.png",
    apple: "/logojb.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/logojb.png",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. John Rocha",
    image: `${BASE_URL}/url.jpg`,
    description:
      "Neurocirurgião especializado em coluna, crânio e dor. Tratamentos minimamente invasivos.",
    url: BASE_URL,
    telephone: "+558120114050",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Recife",
      addressRegion: "PE",
      addressCountry: "BR",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Recife",
        sameAs: "https://en.wikipedia.org/wiki/Recife",
      },
      {
        "@type": "City",
        name: "João Pessoa",
        sameAs: "https://en.wikipedia.org/wiki/João_Pessoa",
      },
      {
        "@type": "City",
        name: "Campina Grande",
        sameAs: "https://en.wikipedia.org/wiki/Campina_Grande",
      },
      {
        "@type": "City",
        name: "Goiana",
        sameAs: "https://en.wikipedia.org/wiki/Goiana",
      },
    ],
    sameAs: ["https://instagram.com/drjohnrocha"],
    availableService: [
      {
        "@type": "MedicalTherapy",
        name: "Cirurgia de Coluna Minimamente Invasiva",
      },
      {
        "@type": "MedicalTherapy",
        name: "Tratamento de Hérnia de Disco",
      },
    ],
  };

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${inter.variable} font-sans antialiased`}
      >
        {/* --- 1. GTM NOSCRIPT (BODY) ---
            Deve ser o primeiro item do Body para validação do GTM
        */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WD89C22N"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* --- 2. GOOGLE TAG MANAGER (SCRIPT) --- */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WD89C22N');
          `}
        </Script>

        {/* --- 3. GOOGLE ANALYTICS 4 (GA4) --- */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M45WVJ449K"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-M45WVJ449K');
          `}
        </Script>

        {/* --- 4. SCHEMA JSON-LD (SEO) --- */}
        <Script
          id="schema-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
