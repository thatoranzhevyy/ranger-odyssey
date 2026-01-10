import { useAuthStore } from '~/stores/auth';

export default defineNuxtPlugin(() => {
  const auth = useAuthStore();
  const config = useRuntimeConfig();

  const api = $fetch.create({
    baseURL: config.public.apiBase,

    onRequest({ options }) {
      if (auth.token) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${auth.token}`,
        };
      }
    },

    onResponseError({ response }) {
      if (response.status === 401) {
        auth.logout();
        navigateTo('/unauthorized');
      }
    },
  });

  return {
    provide: {
      api,
    },
  };
});
