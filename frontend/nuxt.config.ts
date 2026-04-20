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
        { name: 'keywords', content: 'sírkő, sírkő felújítás, gránit sírkő, márvány sírkő, urna, sírkő tisztítás, kripta, emlékmű, konyhapult, kő bútor, Budapest, Csepel' },
        { name: 'author', content: 'BotanicBrothers Team' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://botanicbrothers.com/botanicbrothers.ico' },
      ],
    }
  }
})