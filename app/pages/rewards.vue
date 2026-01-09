<script setup lang="ts">
const { $api } = useNuxtApp();

const users = ref([]);

onMounted(async () => {
  users.value = await $api('/api/v1/profile');
});
</script>

<template>
  <div class="min-h-[calc(100vh-var(--ui-header-height))] p-2">
    <pre>{{ users }}</pre>
    <Reward />
  </div>
</template>
