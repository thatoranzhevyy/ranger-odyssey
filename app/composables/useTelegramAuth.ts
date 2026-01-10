import { useWebApp } from 'vue-tg';
import { useAuthStore } from '~/stores/auth';

class TelegramAuthError extends Error {}

export const useTelegramAuth = () => {
  const tg = useWebApp();
  const authStore = useAuthStore();
  const config = useRuntimeConfig();
  const toast = useToast();
  function getStartParamRaw(): string | null {
    try {
      const fromTg =
        typeof window !== 'undefined'
          ? window.Telegram?.WebApp?.initDataUnsafe?.start_param
          : undefined;
      if (fromTg) return fromTg;
      if (typeof window === 'undefined') return null;
      const url = new URL(window.location.href);
      const fromQuery = url.searchParams.get('tgWebAppStartParam');
      return fromQuery || null;
    } catch {
      return null;
    }
  }
  const authorize = async () => {
    if (!tg?.initData) {
      toast.add({
        title: 'Ошибка авторизации',
        description: 'Telegram initData не найден',
        color: 'error',
      });
      throw new TelegramAuthError('No initData');
    }
    console.log(getStartParamRaw());
    authStore.loading = true;

    try {

      const body: Record<string, unknown> = {
        initData: tg.initData,
        startParamRaw: getStartParamRaw(),
      };
      const response = await $fetch<{ token?: string }>(
        `${config.public.apiBaseUrl}/api/v1/auth/telegram`,
        {
          method: 'POST',
          body: JSON.stringify(body),
        },
      );

      if (!response?.token) {
        throw new TelegramAuthError('Token not received');
      }

      authStore.setToken(response.token);
    } catch (e) {
      authStore.logout();

      toast.add({
        title: 'Авторизация не прошла',
        description: 'Токен не получен или сессия недействительна',
        color: 'error',
      });

      throw e;
    } finally {
      authStore.loading = false;
    }
  };

  return { authorize };
};
