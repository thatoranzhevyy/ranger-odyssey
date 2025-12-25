<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  },
});
const isSystem = computed({
  get() {
    return colorMode.preference === 'system';
  },
  set() {
    colorMode.preference = colorMode.preference === 'system' ? colorMode.value : 'system';
  },
});
</script>

<template>
  <section>
    <div class="px-3.5 py-2 font-semibold">
      {{ $t('settings.theme.title') }}
    </div>
    <UButton
      block
      size="xl"
      color="neutral"
      variant="ghost"
      class="justify-start"
      :label="!isDark ? $t('settings.theme.toggle.toDark') : $t('settings.theme.toggle.toLight')"
      :icon="!isDark ? 'i-ph-moon-bold' : 'i-ph-sun-bold'"
      @click="isDark = !isDark"
    />
    <UButton
      size="xl"
      block
      color="neutral"
      variant="ghost"
      class="justify-between"
      @click="isSystem = !isSystem"
    >
      <div class="flex justify-center gap-x-2">
        <UIcon class="size-6 shrink-0" name="i-ph-devices-bold" />
        <span class="truncate">{{ $t('settings.theme.toggle.system') }}</span>
      </div>
      <template #trailing>
        <USwitch
          v-model="isSystem"
          checked-icon="i-ph-check-bold"
          unchecked-icon="i-ph-x-bold"
          @click="isSystem = !isSystem"
        />
      </template>
    </UButton>
  </section>
</template>
