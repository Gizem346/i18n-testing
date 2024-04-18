// import en  from "lang/en.js"
// import fr from "lang/fr.js"

import { defineI18nConfig } from '#imports'

export default defineI18nConfig(() => ({
  fallbackLocale: 'en',
  legacy: false,
  locale: 'en',
}))