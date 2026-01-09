<script setup lang="ts">
const days = [
  {
    id: 1,
    day: '1',
    title: 'Awakening',
    description:
      'You awaken at the gates of a forgotten city. The first step defines your journey.',
    status: 'in_progress',
    image: '/images/quest/photo_1.jpeg',
  },
  {
    id: 2,
    day: '2',
    title: 'Slot Tower',
    description: 'A towering mechanism hums with power. A choice must be made and a price offered.',
    status: 'locked',
    image: '/images/quest/photo_2.jpeg',
  },
  {
    id: 3,
    day: '3',
    title: 'Marttjoyce',
    description: 'The path narrows. Whatever you carry now, you may not keep it for long.',
    status: 'locked',
    image: '/images/quest/photo_3.jpeg',
  },
  {
    id: 4,
    day: '4',
    title: 'Maze of Losses',
    description: 'Twisting corridors feed on hesitation. Every wrong turn takes something away.',
    status: 'locked',
    image: '/images/quest/photo_4.jpeg',
  },
  {
    id: 5,
    day: '5',
    title: 'Abyss Gate',
    description: 'A silent void opens before you. It whispers promises — and consequences.',
    status: 'locked',
    image: '/images/quest/photo_5.jpeg',
  },
  {
    id: 6,
    day: '6',
    title: 'Tree of Consequences',
    description: 'Its branches glow with outcomes yet unrealized. Your past choices bear fruit.',
    status: 'locked',
    image: '/images/quest/photo_6.jpeg',
  },
  {
    id: 7,
    day: '7',
    title: 'Endless Void',
    description: '',
    status: 'locked',
    image: '/images/quest/photo_7.jpeg',
  },
];
</script>

<template>
  <div
    class="grid min-h-[calc(100vh-var(--ui-header-height)-56px)] w-full grid-cols-3 grid-rows-3 gap-2 p-2"
  >
    <template v-for="(item, index) in days" :key="index">
      <QuestCard :item="item" />
    </template>
    <div class="relative col-span-2">
      <div
        class="flex h-full flex-col justify-between rounded-lg bg-[url('/images/quest/photo_8.png')] bg-cover bg-center"
      >
        <div
          class="rounded-t-lg bg-gradient-to-b from-black/75 via-black/35 to-transparent p-2 text-center text-[13px] leading-snug font-semibold text-white/90"
        >
          Now choose what you'll become...
        </div>
        <div
          class="flex space-x-2 rounded-b-lg bg-gradient-to-t from-black/75 via-black/80 to-transparent p-2"
        >
          <UButton
            label="Decide"
            size="xs"
            class="rounded-full font-semibold tracking-wide text-white uppercase"
            block
          />
          <UButton
            label="Turn back"
            size="xs"
            class="rounded-full font-semibold tracking-wide text-white uppercase"
            block
          />
        </div>
      </div>
    </div>
  </div>
</template>
