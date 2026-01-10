import { useAuthStore } from '~/stores/auth';

export default defineNuxtRouteMiddleware((to) => {
  // SSR пропускаем
  if (process.server) return;

  const config = useRuntimeConfig();

  // Отключена защита Telegram?
  if (!config.public.telegramGuardEnabled) return;

  // Разрешённые страницы
  if (to.path === '/not-telegram' || to.path === '/unauthorized') return;

  // Проверяем Telegram Mini App
  const tg = (window as any)?.Telegram?.WebApp;
  const isTelegramMiniApp =
    !!tg && typeof tg.initData === 'string' && tg.initData.length > 0 && tg.platform !== 'unknown';

  if (!isTelegramMiniApp) {
    return navigateTo('/not-telegram');
  }

  // Проверяем авторизацию
  const auth = useAuthStore();
  if (!auth.isAuthorized) {
    return navigateTo('/unauthorized');
  }
});
