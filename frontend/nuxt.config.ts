export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  
  // 1. Modulok
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],

  // 2. SEO és Sitemap
  site: {
    url: 'https://palasti.hu',
    name: 'Palásti Gránit',
  },

  sitemap: {
    enabled: true,
    discoverImages: true,
    zeroRuntime: true // Szuper, ez passzol a statikus generáláshoz
  },

  // 3. Optimalizáció a statikus kimenethez
  experimental: {
    payloadExtraction: true // Ez javítja ki a korábbi WARN üzenetet
  },

  // 4. Útvonal szabályok
  // Ha 'npm run generate'-et használsz, az ISR helyett érdemesebb 
  // csak a cache-elést vagy a prerender-t finomhangolni (ha szükséges).
  routeRules: {
    // Statikus generálásnál ez a rész elhagyható, 
    // vagy használhatod sima prerender-re:
    '/**': { prerender: true } 
  },

  // 5. Alkalmazás beállítások
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