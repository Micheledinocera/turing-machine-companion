const path = require('path');
let development = process.env.NODE_ENV !== 'production'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  components: [
    { path: '~/components/', pathPrefix: false },
  ],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/main.sass"'
        },
      },
    },
  },
  nitro: {
    output: {
      publicDir: path.join(__dirname, '/docs')
    }
  },
  app: {
    baseURL: development? "/" : "/turing-machine-companion/"
  },
  modules: ['@vite-pwa/nuxt'],
  pwa: {
    name: "Turing Machine Companion",
    themeColor: "#2db563",
    msTileColor: "#000000",
  }
})
