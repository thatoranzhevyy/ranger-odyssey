<script setup lang="ts">
const rewards = [
  {
    id: 1,
    title: 'Chests',
    image: '/images/reward/chest.png',
  },
  {
    id: 2,
    title: 'Keys',
    image: '/images/reward/lore.png',
  },
  {
    id: 3,
    title: 'Chest Info',
    image: '/images/reward/quest.png',
  },
  {
    id: 4,
    title: 'Lore',
    image: '/images/reward/home.png',
  },
];
</script>

<template>
  <div class="grid grid-cols-2 gap-2">
    <template v-for="(item, index) in rewards" :key="index">
      <RewardCard :item="item" />
    </template>
  </div>
</template>
