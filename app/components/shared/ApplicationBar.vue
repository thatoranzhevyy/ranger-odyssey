<script setup lang="ts"></script>

<template>
  <div class="bg-default sticky bottom-0 z-50 h-14 p-2">
    <div class="flex items-center justify-between gap-2">
      <UButton block size="xl" icon="i-ph-house-bold" color="neutral" variant="soft" to="/" />
      <UButton
        block
        size="xl"
        icon="i-ph-coins-bold"
        color="neutral"
        variant="soft"
        to="/rewards"
      /><UButton
        block
        size="xl"
        icon="i-ph-coins-bold"
        color="neutral"
        variant="soft"
        to="/tg-app"
      />
    </div>
  </div>
</template>
