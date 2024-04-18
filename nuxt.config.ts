// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    fallbackLocale: 'en',
    legacy: false,
    locale: 'en',
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts',
    strategy: 'prefix_except_default',
    customRoutes: 'config',
    pages: {
      about: {
        en: '/about-us',
        de: '/uber-uns'
      }
    },
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'de',
        iso: 'de-DE',
        name: 'Deutsch',
        file: 'de.json'
      }
    ],
    langDir: 'lang/'
  }
})