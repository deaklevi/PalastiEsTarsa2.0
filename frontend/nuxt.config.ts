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
    // Itt nem kell hostname, a modul automatikusan a `site.url`-t használja
    enabled: true,
    discoverImages: true, // Megpróbálja megkeresni a képeket a tartalomban
  },

  routeRules: {
    // Kényszerítsük ki a perjel mentességet a tisztább URL-ekért
    '/**': { isr: true }, 
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
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://www.palasti.hu/favicon.ico' },
      ],
    }
  }
})