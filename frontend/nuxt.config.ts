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

  // 3. Alkalmazás beállítások
  app: {
    head: {
      htmlAttrs: { lang: 'hu' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: '%s - Palásti Gránit',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      meta: [
        { property: 'og:image', content: 'https://palastigranit.hu/og-logo.png' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://palastigranit.hu/og-logo.png' }
      ]
    }
  }
})