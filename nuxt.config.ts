export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  devtools: { enabled: true },
  components: [{ path: '~/components', pathPrefix: false }],
  modules: ['@nuxt/image', '@nuxt/ui', '@nuxt/scripts', '@pinia/nuxt'],
  colorMode: { preference: 'dark' },
  css: ['~/assets/css/tailwindcss.css'],
  app: { head: { script: [{ src: 'https://telegram.org/js/telegram-web-app.js' }] } },
  runtimeConfig: {
    public: {
      telegramGuardEnabled:true,
      apiBaseUrl: 'https://quests.tmbot.cc',
    },
  },
});
