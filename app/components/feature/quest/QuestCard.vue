<script setup lang="ts">
type DayItemStatus = 'locked' | 'in_progress' | 'completed'

export type DayItem = {
  id: number
  day: string
  title: string
  description?: string
  label?: string
  status: DayItemStatus
  image?: string
}

const props = defineProps<{
  item: DayItem
}>()

const isLocked = computed(() => props.item.status === 'locked')
const inProgress = computed(() => props.item.status === 'in_progress')
const isCompleted = computed(() => props.item.status === 'completed')
</script>

<template>
  <div class="relative">
    <div
      class="bg-elevated/30 h-full rounded-lg flex flex-col justify-between"
      :class="[
        isLocked ? 'opacity-40' : 'hover:shadow-none',
        inProgress ? 'ring-2 ring-primary-400/50 shadow-[0_0_0_1px_rgba(56,189,248,0.25),0_0_28px_rgba(56,189,248,0.25)] hover:ring-0.5 hover:-translate-y-0.5' : '',
        'bg-cover bg-center',
      ]"
      :style="{ backgroundImage: `url(${item.image})` }"
    >
      <div
        class="text-center text-[13px] leading-snug rounded-t-lg font-semibold text-white/90 p-2 bg-gradient-to-b from-black/75 via-black/35 to-transparent">
        Day {{ item.day }} - {{ item.title }}
      </div>
      <div
        class="space-y-2 p-2 rounded-b-lg bg-gradient-to-t from-black/75 via-black/80 to-transparent">
        <p v-if="item.description"
           class="text-[13px] leading-snug font-normal text-white/80 line-clamp-3">
          {{ item.description }}
        </p>
        <UButton
          :label="isLocked ? 'Coming soon' : inProgress ? 'Start' : isCompleted ? 'Complete' : item.label"
          :color="isLocked || inProgress ? 'primary' : 'neutral'"
          :disabled="isLocked || isCompleted"
          size="xs"
          class="rounded-full uppercase text-[12px] text-white font-semibold tracking-wide"
          block
        />
      </div>
    </div>
    <UIcon
      v-if="isLocked"
      name="i-ph-lock-key-fill"
      class="w-1/3 absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 text-white/80"
    />
  </div>
</template>
