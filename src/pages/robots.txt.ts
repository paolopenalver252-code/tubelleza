import type { APIRoute } from 'astro';
import { site } from '@/data/site';

// Mientras sea una demo no se permite el rastreo, para no duplicar la web actual.
export const GET: APIRoute = ({ site: siteUrl }) => {
  const body = site.isDemo
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', siteUrl)}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
