<template>
  <div
    class="rounded-md border border-purple-400/30
           p-3 flex flex-col items-center justify-center text-center
           shadow-[0_0_20px_rgba(99,102,241,0.25)]"
  >
    <div class="text-4xl mb-2 drop-shadow">
      <slot />
    </div>

    <div class="text-lg font-medium text-yellow-200">
      {{ title }}
    </div>

    <div class="text-sm text-gray-300 mt-1">
      {{ value }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  value: number
}>()
</script>
