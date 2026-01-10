import { useAuthStore } from '~/stores/auth';

export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore();

  if (!auth.isAuthorized && to.path !== '/unauthorized') {
    return navigateTo('/unauthorized');
  }
});
