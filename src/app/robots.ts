import { MetadataRoute } from 'next';
import { businessInfo } from '@/lib/businessInfo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${businessInfo.website.url}/sitemap.xml`,
  };
}

