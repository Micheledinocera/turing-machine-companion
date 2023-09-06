const path = require('path');
let development = process.env.NODE_ENV !== 'production'
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "url";
import VueI18nVitePlugin from "@intlify/unplugin-vue-i18n/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  components: [
    { path: '~/components/', pathPrefix: false },
  ],
  imports: {
    presets: [
      {
        from: 'vue-i18n',
        imports: ['useI18n']
      }
    ]
  },
  vite: {
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), "./locales/*.json"),
        ],
      }),
    ],
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
