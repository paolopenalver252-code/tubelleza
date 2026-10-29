// @ts-check
import { defineConfig } from 'astro/config';

// Dominio actual del negocio. Si la demo se publica en otro dominio,
// cámbialo aquí: se usa para canonical, Open Graph y sitemap.
export default defineConfig({
  site: 'https://tubellezaholistica.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
  image: {
    responsiveStyles: false,
  },
  // Las URL de la web actual redirigen a su nueva ubicación para no perder enlaces.
  redirects: {
    '/inicio': '/',
    '/conoce-a-tu-belleza-holistica-en-palma-de-mallorca': '/el-centro/',
    '/masajes-y-bienestar-en-palma-de-mallorca': '/masajes/',
    '/aparatologia-estetica-en-palma-de-mallorca': '/aparatologia/',
    '/spa-y-tratamientos-combinados-en-palma-de-mallorca': '/spa-privado/',
    '/promociones-de-bienestar-y-spa-en-palma-de-mallorca': '/promociones/',
    '/tienda-de-tu-belleza-holistica': '/vales-regalo/',
    '/contacta-con-tu-belleza-holistica': '/reservar/',
    '/reserve-su-cita-de-bienestar-y-spa-en-palma-de-mallorca': '/reservar/',
  },
});
