<script setup lang="ts">
import { onMounted } from 'vue';
import { useWebApp } from 'vue-tg';

const webApp = useWebApp();

onMounted(() => {
  if (!webApp) return;

  console.log('initData:', webApp.initData);
  console.log('initDataUnsafe:', webApp.initDataUnsafe);
});
</script>

<template>
  <pre v-if="webApp">
    {{ webApp.initDataUnsafe }}
  </pre>
</template>
