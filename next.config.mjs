/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    // AQUI ESTÁ A CORREÇÃO: Liberando domínios externos
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com', // Thumbnails principais do YouTube
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com', // Thumbnails de fallback do YouTube
      },
      {
        protocol: 'https',
        hostname: '**', // Libera todas as outras (Supabase, etc) para evitar erros futuros
      },
    ],
  },
}

export default nextConfig