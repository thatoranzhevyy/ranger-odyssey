<script setup lang="ts">
useHead({ bodyAttrs: { class: 'select-none' } });
// onMounted(() => document.addEventListener('contextmenu', (event) => event.preventDefault()));
</script>
<template>
  <UApp>
    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>
  </UApp>
</template>
