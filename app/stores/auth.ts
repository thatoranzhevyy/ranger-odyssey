import { defineStore } from 'pinia';
import { useLocalStorage } from '@vueuse/core';

export const useAuthStore = defineStore('auth', () => {
  const token = useLocalStorage<string | null>('jwt', null);

  const isAuthorized = computed(() => !!token.value);
  const loading = ref(false);

  function setToken(newToken: string) {
    token.value = newToken;
  }

  function logout() {
    token.value = null;
  }

  return {
    token,
    isAuthorized,
    loading,
    setToken,
    logout,
  };
});
