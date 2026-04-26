export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  
  // 1. Modulok
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],

  // 2. Új, szabványos sitemap konfiguráció
  site: {
    url: 'https://palasti.hu',
    name: 'Palásti Gránit',
  },

  sitemap: {
    enabled: true,
    discoverImages: true,
  },

  // EXPERIMENTAL: Itt tiltjuk le a payload generálást
  experimental: {
    payloadExtraction: false
  },

  // ROUTE RULES: Csak akkor használjon ISR-t, ha éles (production) módban vagy!
  routeRules: {
    '/**': import.meta.dev ? {} : { isr: true }
  },

  // NITRO: Kényszerítsük a memóriában való tárolást fejlesztéskor
  nitro: {
    devStorage: {
      cache: {
        driver: 'memory'
      }
    }
  },

  // 3. Alkalmazás beállítások
  app: {
    head: {
      htmlAttrs: { lang: 'hu' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: '%s - Palásti Gránit',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      meta: [
        { name: 'author', content: 'Palásti Gránit' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://www.palasti.hu/favicon.ico' },
      ],
    }
  }
})