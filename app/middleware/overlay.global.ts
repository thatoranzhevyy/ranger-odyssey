export default defineNuxtRouteMiddleware((to) => {
  const overlay = useOverlay();
  overlay.closeAll();
});
