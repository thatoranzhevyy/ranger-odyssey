<script setup lang="ts">
import {useBackButton} from 'vue-tg'
import {useRouter} from 'vue-router'

const backButton = useBackButton()
const router = useRouter()

if (backButton.isVersionAtLeast === true) {

  backButton.onClick(() => {
    router.push('/')
  })
}
onMounted(() => {
  if (backButton.version >= '9.0') {
    backButton.show()
  }
})
onBeforeUnmount(() => {
  if (backButton.version >= '9.0') {
    backButton.hide()
  }
})
</script>

<template>
  <slot/>
</template>
