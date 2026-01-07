<template>
  <div class="h-dvh">
    <div class="mx-auto w-full max-w-lg">
      <div class="min-h-[calc(100vh-var(--ui-header-height))] w-full">
        <slot />
      </div>
      <ApplicationBar />
    </div>
  </div>
</template>
