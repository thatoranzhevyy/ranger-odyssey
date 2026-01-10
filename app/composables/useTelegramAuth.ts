import { useAuthStore } from '~/stores/auth';
import { useWebApp } from 'vue-tg';

export const useTelegramAuth = async () => {
  const authStore = useAuthStore();
  const config = useRuntimeConfig();
  const webApp = useWebApp();

  // ⛔ НЕ Telegram
  if (!webApp?.initData) {
    console.warn('Не Telegram WebApp — пропускаем Telegram auth');
    return;
  }

  // ✅ Уже авторизованы
  if (authStore.token) {
    return;
  }

  useToast().add({
    title: 'webApp.initData',
    description: webApp.initData,
  });
  const { token } = await $fetch<{ token: string }>(
    `${config.public.apiBase}/api/v1/auth/telegram`,
    {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: webApp.initData,
      onResponseError({ response }) {
        useToast().add({
          title: 'auth error HTTP:',
          description: response.status,
        });
        useToast().add({
          title: 'auth error DATA:',
          description: response._data,
        });
        console.log('HTTP:', response.status);
        console.log('DATA:', response._data);
      },
    },
  );
  useToast().add({
    title: 'AppToken',
    description: token,
  });
  authStore.setToken(token);
};
