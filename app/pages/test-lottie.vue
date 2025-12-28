<template>
  <div class="flex min-h-[calc(100vh-var(--ui-header-height))] items-center justify-center">
    <!--https://lottiefiles.com/free-animation/magic-chest-bxIwJoCWYR-->
    <div ref="container" class="cursor-pointer" @click="onClick"/>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'
import lottie from 'lottie-web'
import animationData from '~/assets/lottie/MagicChest.json'

type ChestStatus = 'idle' | 'opening' | 'opened'

const container = ref<HTMLElement | null>(null)
const anim = ref<any>(null)
const status = ref<ChestStatus>('idle')

// сегменты в кадрах
const segments: Record<ChestStatus, [number, number]> = {
  idle: [0, 38],
  opening: [38, 173],
  opened: [173, 239]
}

// стартуем Idle
onMounted(() => {
  if (!container.value) return

  anim.value = lottie.loadAnimation({
    container: container.value,
    renderer: 'svg',
    loop: true,
    autoplay: false,
    animationData
  })

  playSegment('idle')
})

// функция проигрывания сегмента
function playSegment(name: ChestStatus, loop = true) {
  if (!anim.value) return
  anim.value.loop = loop
  anim.value.playSegments(segments[name], true)
}

// клик по сундуку
function onClick() {
  if (status.value !== 'idle') return
  status.value = 'opening'
  playSegment('opening', false)
  anim.value.addEventListener('complete', onComplete)
}

// завершение Opening
function onComplete() {
  if (status.value === 'opening') {
    status.value = 'opened'
    playSegment('opened', true)
    anim.value.removeEventListener('complete', onComplete)
  }
}
</script>
