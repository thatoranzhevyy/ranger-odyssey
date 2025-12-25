export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  devtools: { enabled: true },
  components: [{ path: '~/components', pathPrefix: false }],
  modules: ['@nuxt/image', '@nuxt/ui', '@nuxtjs/i18n'],
  css: ['~/assets/css/tailwindcss.css'],
  i18n: {
    locales: [
      { code: 'ru', iso: 'ru-RU', name: '🇷🇺 Русский', file: 'ru.json' },
      { code: 'en', iso: 'en-US', name: '🇺🇸 English', file: 'en.json' },
    ],
    defaultLocale: 'ru',
    strategy: 'no_prefix',
    langDir: '../locales',
  },
});
