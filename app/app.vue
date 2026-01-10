<script setup lang="ts">
import { useWebApp } from 'vue-tg';
import { onMounted } from 'vue';

const webApp = useWebApp();

onMounted(() => {
  if (!webApp) return;

  console.log('initData:', webApp.initData);
  console.log('initDataUnsafe:', webApp.initDataUnsafe);
});
// useHead({ bodyAttrs: { class: 'select-none' } });
// onMounted(() => document.addEventListener('contextmenu', (event) => event.preventDefault()));
</script>
<template>
  <pre>{{ webApp.initData }}</pre>
  <pre>{{ webApp.initDataUnsafe }}</pre>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
