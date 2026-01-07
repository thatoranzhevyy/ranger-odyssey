<script setup lang="ts"></script>
<template>
  <div class="min-h-[calc(100vh-var(--ui-header-height))] p-2">
    <div class="grid grid-cols-2 gap-2">
      <div class="bg-elevated flex flex-col items-center rounded-lg px-4 py-2">
        <img src="/images/reward/chest.png" class="w-1/2" />
        <div class="text-primary-400 text-xl font-bold">Chests</div>
      </div>

      <div class="bg-elevated flex flex-col items-center rounded-lg px-4 py-2">
        <img src="/images/reward/lore.png" class="w-1/2" />
        <div class="text-primary-400 text-xl font-bold">Keys</div>
      </div>

      <div class="bg-elevated flex flex-col items-center rounded-lg px-4 py-2">
        <img src="/images/reward/quest.png" class="w-1/2" />
        <div class="text-primary-400 text-xl font-bold">Chest Info</div>
      </div>

      <div class="bg-elevated flex flex-col items-center rounded-lg px-4 py-2">
        <img src="/images/reward/home.png" class="w-1/2" />
        <div class="text-primary-400 text-xl font-bold">Lore</div>
      </div>

      <div
        class="bg-elevated/30 ring-primary-400/50 hover:ring-0.5 flex items-center justify-center rounded-lg py-6 shadow-[0_0_0_1px_rgba(56,189,248,0.25),0_0_28px_rgba(56,189,248,0.25)] ring-2 hover:-translate-y-0.5"
      >
        <div class="flex flex-col items-center">
          <div class="mb-2 text-4xl drop-shadow">🧰</div>
          <div class="text-primary-400 text-xl font-bold">Chests</div>
          <div class="text-sm text-gray-300">0</div>
        </div>
      </div>
      <div
        class="bg-elevated/30 flex flex-col items-center justify-center rounded-lg py-6 ring-2 ring-neutral-400/50 hover:-translate-y-0.5"
      >
        <div class="flex flex-col items-center">
          <div class="mb-2 text-4xl drop-shadow">🗝</div>
          <div class="text-primary-400 text-xl font-bold">Keys</div>
          <div class="text-sm text-gray-300">0</div>
        </div>
      </div>

      <div
        class="bg-elevated/30 flex flex-col items-center justify-center rounded-lg py-6 ring-2 ring-neutral-400/50 hover:-translate-y-0.5"
      >
        <div class="flex flex-col items-center">
          <div class="mb-2 text-4xl drop-shadow">📜</div>
          <div class="text-primary-400 text-xl font-bold">Chest Info</div>
          <div class="text-sm text-gray-300">0</div>
        </div>
      </div>

      <div
        class="bg-elevated/30 flex flex-col items-center justify-center rounded-lg py-6 ring-2 ring-neutral-400/50 hover:-translate-y-0.5"
      >
        <div class="flex flex-col items-center">
          <div class="mb-2 text-4xl drop-shadow">📜</div>
          <div class="text-primary-400 text-xl font-bold">Lore</div>
          <div class="text-sm text-gray-300">0</div>
        </div>
      </div>
    </div>
  </div>
</template>
