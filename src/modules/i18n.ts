import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from '@/locales/en.json'
import zhCN from '@/locales/zh-CN.json'
import { COOKIE_LOCALE } from '@/constants'

if (import.meta.env.DEV) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      debug: true,
      resources: {
        en: { translation: en },
        'zh-CN': { translation: zhCN },
      },
      fallbackLng: 'zh-CN',
      interpolation: { escapeValue: false },
    })
} else {
  i18n.use(initReactI18next).init({
    lng: COOKIE_LOCALE,
    resources: {
      en: { translation: en },
      'zh-CN': { translation: zhCN },
    },
    fallbackLng: 'zh-CN',
    interpolation: { escapeValue: false },
  })
}
