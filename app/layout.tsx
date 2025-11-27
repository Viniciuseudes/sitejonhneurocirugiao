import type React from "react"
import type { Metadata } from "next"
// <CHANGE> Importing Montserrat and Inter fonts for the medical landing page
import { Montserrat, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// <CHANGE> Setting up Montserrat for headings
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

// <CHANGE> Setting up Inter for body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  // <CHANGE> Updated metadata for Dr. John Rocha's landing page
  title: "Dr. John Rocha | Neurocirurgião - Especialista em Coluna, Crânio e Dor",
  description:
    "Dr. John Rocha, neurocirurgião especializado em crânio, coluna e dor, com atuação em Recife, João Pessoa e Campina Grande. Cirurgia da coluna por vídeo, endoscopia e tratamento da dor.",
  generator: "v0.app",
  keywords:
    "neurocirurgião, cirurgia de coluna, endoscopia, neurocirurgia craniana, tratamento da dor, Recife, João Pessoa, Campina Grande",
  authors: [{ name: "Dr. John Rocha" }],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // <CHANGE> Added lang="pt-BR" for Portuguese content
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
