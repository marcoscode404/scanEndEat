// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    'nuxt-headlessui',
    '@pinia/nuxt',
    '@hypernym/nuxt-anime'
  ],

  ssr: false,
  srcDir: 'src/',

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
