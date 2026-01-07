<script setup lang="ts">
import { useViewport } from 'vue-tg';
const { safeAreaInset } = useViewport();
const safeAreaInsetTop = safeAreaInset.value.top;
</script>

<template>
  <div class="w-full" :style="{ height: `${safeAreaInsetTop}px` }"></div>
  <div class="w-full" :style="{ height: `${safeAreaInsetTop}px` }"></div>
</template>
