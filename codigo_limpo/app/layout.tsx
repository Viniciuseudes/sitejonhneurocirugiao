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

// ATUALIZAÇÃO: Seu novo domínio oficial
const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.drjohnneuro.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  // Canonical aponta para a raiz do novo domínio
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Dr. John Rocha | Neurocirurgião - Especialista em Coluna e Dor",
    template: "%s | Dr. John Rocha",
  },
  description:
    "Dr. John Rocha é neurocirurgião especialista no tratamento de hérnia de disco, dor no nervo ciático e cirurgias minimamente invasivas.",
  keywords: [
    "Neurocirurgião",
    "Cirurgia de Coluna",
    "Dr. John Rocha",
    "Hérnia de Disco",
    "Dor na lombar",
  ],
  authors: [{ name: "Dr. John Rocha" }],
  creator: "Dr. John Rocha",
  publisher: "Dr. John Rocha",
  openGraph: {
    title: "Dr. John Rocha | Neurocirurgião Especialista",
    description:
      "Recupere sua qualidade de vida. Especialista em coluna, crânio e dor com técnicas minimamente invasivas.",
    url: BASE_URL,
    siteName: "Dr. John Rocha",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/professional-neurosurgeon-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. John Rocha - Neurocirurgião",
      },
    ],
  },
  // Ícone atualizado para sua logo
  icons: {
    icon: "/logojb.png",
    shortcut: "/logojb.png",
    apple: "/logojb.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/logojb.png",
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
    image: `${BASE_URL}/professional-neurosurgeon-portrait.jpg`,
    description: "Neurocirurgião especializado em coluna, crânio e dor.",
    url: BASE_URL,
    telephone: "+558120114050", // Confirme se este telefone está correto
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-8.047562",
      longitude: "-34.877000",
    },
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Recife",
        addressRegion: "PE",
        addressCountry: "BR",
      },
    ],
    sameAs: ["https://instagram.com/drjohnrocha"],
    priceRange: "$$$",
  };

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${inter.variable} font-sans antialiased`}
      >
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
