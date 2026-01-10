<script setup lang="ts">
const { $api } = useNuxtApp();

const { data } = await $api('/api/v1/profile');
</script>

<template>
  <pre>{{ data }}</pre>
  <div class="min-h-[calc(100vh-var(--ui-header-height))] p-2">
    <Reward />
  </div>
</template>
