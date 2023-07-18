// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    'nuxt-headlessui',
    '@pinia/nuxt',
  ],

  ssr: false,
  srcDir: 'src/',

  // config pwa
  app: {
    head: {
      link: [{ rel: 'manifest', href: '/manifest.json' }]
    }
  },


  devtools: { enabled: false }
})
