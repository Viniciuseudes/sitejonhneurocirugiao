import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";
// 1. IMPORTAÇÃO DO TOASTER
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://drjohnrocha.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "Dr. John Rocha | Neurocirurgião - Especialista em Coluna, Crânio e Dor",
    template: "%s | Dr. John Rocha",
  },
  description:
    "Dr. John Rocha é neurocirurgião especialista no tratamento de hérnia de disco, dor no nervo ciático e cirurgias minimamente invasivas em Recife e João Pessoa.",
  keywords: [
    "Neurocirurgião",
    "Cirurgia de Coluna",
    "Endoscopia de Coluna",
    "Hérnia de Disco",
    "Tratamento da Dor",
    "Dor no nervo ciático",
    "Dor na lombar",
    "Cirurgia minimamente invasiva",
    "Especialista em dor crônica",
    "Bloqueio da dor",
    "Neurocirurgia Recife",
    "Neurocirurgia João Pessoa",
    "Neurocirurgião Campina Grande",
    "Dr. John Rocha",
  ],
  authors: [{ name: "Dr. John Rocha" }],
  creator: "Dr. John Rocha",
  publisher: "Dr. John Rocha",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
  twitter: {
    card: "summary_large_image",
    title: "Dr. John Rocha | Neurocirurgião",
    description:
      "Especialista em cirurgia endoscópica da coluna e tratamento da dor.",
    images: ["/professional-neurosurgeon-portrait.jpg"],
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
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
    description:
      "Neurocirurgião especializado em coluna, crânio e dor. Cirurgias minimamente invasivas e endoscópicas.",
    medicalSpecialty: [
      "Neurological Surgery",
      "Spinal Surgery",
      "Pain Management",
    ],
    url: BASE_URL,
    telephone: "+558120114050",
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Recife",
        addressRegion: "PE",
        addressCountry: "BR",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "João Pessoa",
        addressRegion: "PB",
        addressCountry: "BR",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Campina Grande",
        addressRegion: "PB",
        addressCountry: "BR",
      },
    ],
    sameAs: [
      "https://instagram.com/drjohnrocha",
      "https://facebook.com/drjohnrocha",
    ],
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

        {/* 2. COMPONENTE TOASTER ADICIONADO */}
        <Toaster />

        <Analytics />
      </body>
    </html>
  );
}
