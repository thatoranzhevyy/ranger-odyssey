<template>
  <div
    class="bg-elevated ring-primary-400/50 hover:ring-0.5 flex flex-col items-center rounded-lg px-4 py-2 shadow-[0_0_0_1px_rgba(56,189,248,0.25),0_0_28px_rgba(56,189,248,0.25)] ring-2 hover:-translate-y-0.5"
  >
    <img :src="item.image" class="w-1/2" />
    <div class="text-primary-400 text-xl font-bold">{{ item.title }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  item: {
    id: number;
    title: string;
    image?: string;
  };
}>();
</script>
