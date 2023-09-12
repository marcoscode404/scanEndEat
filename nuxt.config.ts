// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-icon',
    '@pinia/nuxt',
    '@nuxt/ui',
    '@hypernym/nuxt-anime'
  ],

  ssr: false,
  srcDir: 'src/',

  pinia: {
    autoImports: ["defineStore"],
  },

  anime: {
    provide: true
  },

  // config pwa
  app: {
    head: {
      link: [{ rel: 'manifest', href: '/manifest.json' }]
    }
  },


  devtools: { enabled: false }
})
