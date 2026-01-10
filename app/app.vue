<script setup lang="ts">
import { useTelegramAuth } from '~/composables/useTelegramAuth';

onMounted(async () => {
  await useTelegramAuth();
});
// useHead({ bodyAttrs: { class: 'select-none' } });
// onMounted(() => document.addEventListener('contextmenu', (event) => event.preventDefault()));
</script>
<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
