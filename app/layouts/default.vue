<script setup lang="ts"></script>
<template>
  <UContainer>
    <slot />
  </UContainer>
  <div class="bg-default sticky bottom-0 z-50 h-(--ui-header-height) py-2">
    <UContainer>
      <div class="flex items-center justify-between gap-2">
        <UButton block size="xl" icon="i-ph-house-bold" color="neutral" variant="soft" to="/" />
        <UButton
          block
          size="xl"
          icon="i-ph-coins-bold"
          color="neutral"
          variant="soft"
          to="/rewards"
        />
        <UButton
          block
          size="xl"
          icon="i-ph-gear-bold"
          color="neutral"
          variant="soft"
          to="/setting"
        />
      </div>
    </UContainer>
  </div>
</template>
