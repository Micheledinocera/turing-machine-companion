import { createI18n } from 'vue-i18n'
import it from '../locales/it.json'
import en from '../locales/en.json'
import pt from '../locales/pt.json'
import de from '../locales/de.json'
import fr from '../locales/fr.json'
import hu from '../locales/hu.json'
import ja from '../locales/ja.json'
import ko from '../locales/ko.json'
import pl from '../locales/pl.json'
import zh from '../locales/zh.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      it,
      en,
      de,
      fr,
      hu,
      ja,
      ko,
      pl,
      zh,
      pt
    }
  })

  vueApp.use(i18n)
})
