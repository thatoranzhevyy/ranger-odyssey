<script setup lang="ts">
// useHead({ bodyAttrs: { class: 'select-none' } });
// onMounted(() => document.addEventListener('contextmenu', (event) => event.preventDefault()));
const initDataUnsafe = ref('');
const url = ref('');
onMounted(() => {
  initDataUnsafe.value = window.Telegram?.WebApp?.initDataUnsafe;
  url.value = new URL(window.location.href);
});
</script>

<template>
  <pre>{{ initDataUnsafe }}</pre>
  <pre>{{ url }}</pre>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
