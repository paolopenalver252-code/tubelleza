# Tu Belleza Holística · Rediseño (demo)

Propuesta de rediseño de https://tubellezaholistica.com, un centro de bienestar y spa privado en Palma de Mallorca.
Es un sitio estático hecho con [Astro 5](https://astro.build), sin frameworks de interfaz ni JavaScript innecesario.

## Comandos

```bash
npm install        # dependencias
npm run dev        # desarrollo en http://localhost:4321
npm run build      # compila a dist/ (optimiza imágenes a AVIF/WebP)
npm run preview    # sirve dist/
npm run check      # comprobación de tipos y plantillas
npm run photos     # regenera la corrección de color de las fotos del centro
```

## Estructura

```
src/
  data/        site.ts (contacto, horario, navegación, WhatsApp) · services.ts (tratamientos y precios)
               reviews.ts (reseñas literales) · seo.ts (datos estructurados)
  components/  Header, Footer, HomeHero, PageHero, ServiceSection, TreatmentList, VideoPlayer,
               Reviews, TrustSection, Commitments, GiftBand, BookingSection, RelatedLinks,
               WhatsAppButton (flotante), Icon
  layouts/     BaseLayout.astro (SEO, Open Graph, canonical, noindex de la demo)
  pages/       index, spa-privado, parejas, masajes, aparatologia, promociones, vales-regalo,
               el-centro, reservar, 404, robots.txt, sitemap.xml
  styles/      global.css (tokens de color, tipografía, botones)
  assets/images/  imágenes seleccionadas (Astro genera versiones responsive)
public/videos/    vídeos recomprimidos (se cargan solo al pulsar «Ver vídeo»)
recursos/originales/  todos los recursos descargados de la web actual, renombrados
docs/             inventario-recursos.md · datos-a-confirmar.md
```

## Editar contenido

- **Teléfono, WhatsApp, horario, dirección y redes:** `src/data/site.ts`. Los enlaces de WhatsApp se generan con
  `whatsappLink()` y llevan un mensaje ya escrito con el tratamiento elegido.
- **Tratamientos, duraciones y precios:** `src/data/services.ts`.
- **Reseñas:** `src/data/reviews.ts`. Solo deben ser reseñas reales y literales.
- **Publicación definitiva:** poner `isDemo: false` en `site.ts` para quitar `noindex` y abrir `robots.txt`.
  Revisar también `site` en `astro.config.mjs`.

## Decisiones

- Las URL de la web actual redirigen a las nuevas (`redirects` en `astro.config.mjs`).
- Las fuentes (Fraunces y Manrope) se sirven desde el propio sitio, sin llamadas a Google Fonts.
- Las fotos del centro llevan una corrección de color suave (`scripts/grade-photos.mjs`) que reduce el magenta de los LED. Los originales siguen sin tocar en `recursos/originales/`.
- Sin mapa incrustado ni scripts de terceros: «Cómo llegar» abre Google Maps.
- Las animaciones de aparición se desactivan con `prefers-reduced-motion`.
- `ffmpeg-static` solo se usa en desarrollo para recomprimir los vídeos.
