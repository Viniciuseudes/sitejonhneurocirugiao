/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // ATENÇÃO: A linha 'unoptimized: true' foi removida para ativar a performance máxima.
  // Se as imagens quebrarem na Vercel, certifique-se de que não ultrapassou os limites do plano Hobby.
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig