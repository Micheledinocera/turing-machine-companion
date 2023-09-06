import { createI18n } from 'vue-i18n'
import it from '../locales/it.json'
import en from '../locales/en.json'
import br from '../locales/br.json'
import de from '../locales/de.json'
import fr from '../locales/fr.json'
import hu from '../locales/hu.json'
import jp from '../locales/jp.json'
import kr from '../locales/kr.json'
import pl from '../locales/pl.json'
import cnt from '../locales/cnt.json'
import cns from '../locales/cns.json'

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
      jp,
      kr,
      pl,
      cnt,
      cns,
      br
    }
  })

  vueApp.use(i18n)
})
