import { useAuthStore } from '~/stores/auth';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const authStore = useAuthStore();

  authStore.loadToken();

  const api = $fetch.create({
    baseURL: config.public.apiBase,

    onRequest({ options }) {
      if (authStore.token) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${authStore.token}`,
        };
      }
    },
  });

  return {
    provide: {
      api,
    },
  };
});
