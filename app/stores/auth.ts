import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null as string | null,
  }),

  actions: {
    setToken(token: string) {
      this.token = token;
      localStorage.setItem('jwt', token);
    },

    loadToken() {
      this.token = localStorage.getItem('jwt');
    },

    logout() {
      this.token = null;
      localStorage.removeItem('jwt');
    },
  },
});
