// middleware/telegram.global.ts
export default defineNuxtRouteMiddleware((to) => {
  if (process.server) return

  const config = useRuntimeConfig()

  if (!config.public.telegramGuardEnabled) return

  if (to.path === '/not-telegram') return

  const tg = (window as any)?.Telegram?.WebApp

  const isTelegramMiniApp =
    !!tg &&
    typeof tg.initData === 'string' &&
    tg.initData.length > 0 &&
    tg.platform !== 'unknown'

  if (!isTelegramMiniApp) {
    return navigateTo('/not-telegram')
  }
})
