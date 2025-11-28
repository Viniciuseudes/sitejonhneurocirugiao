import type { Metadata } from "next";
// Mantendo as fontes originais
import { Montserrat, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script"; // Importação necessária para o JSON-LD
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// URL base do site (Substitua pela URL de produção real quando tiver)
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
    "Dr. John Rocha é neurocirurgião especializado em cirurgia endoscópica da coluna, tratamento da dor e neurocirurgia craniana. Atendimento em Recife, João Pessoa e Campina Grande.",
  keywords: [
    "Neurocirurgião",
    "Cirurgia de Coluna",
    "Endoscopia de Coluna",
    "Hérnia de Disco",
    "Tratamento da Dor",
    "Neurocirurgia Recife",
    "Neurocirurgia João Pessoa",
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
  // Configuração para compartilhamento social (WhatsApp, Instagram, LinkedIn)
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
        url: "/professional-neurosurgeon-portrait.jpg", // A foto principal que já usamos
        width: 1200,
        height: 630,
        alt: "Dr. John Rocha - Neurocirurgião",
      },
    ],
  },
  // Configuração para Twitter/X
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
  // Estrutura de dados para o Google (Schema.org)
  // Isso ajuda o Google a entender os locais de atendimento e especialidades
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
    telephone: "+558120114050", // Telefone principal (Recife)
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
      "https://facebook.com/drjohnrocha", // Adicione se existir
      // "https://www.linkedin.com/in/..." // Adicione se existir
    ],
    priceRange: "$$$",
  };

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${inter.variable} font-sans antialiased`}
      >
        {/* Injeção do JSON-LD */}
        <Script
          id="schema-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {children}
        <Analytics />
      </body>
    </html>
  );
}
