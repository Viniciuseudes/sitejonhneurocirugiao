import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drjohnneuro.com.br'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/', // Protege a área administrativa da indexação
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}