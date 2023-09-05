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
  modules: [
    '@kevinmarrec/nuxt-pwa',
    '@davestewart/nuxt-scrollbar'
  ],
  pwa: {
    manifest: {
      name: 'Turing Machine Companion',
      short_name: 'Turing Machine Companion',
      theme_color: "#2db563",
      background_color: "#2db563",
      display: "fullscreen"
    }
  }
})
