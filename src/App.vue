<script setup>
  import { vIntersectionObserver } from '@vueuse/components'
  import { ref } from 'vue'

  const test = ref(false)

  const onIntersectionObserver = ([
    { isIntersecting }
  ]) => {
    if (isIntersecting ) {
      test.value = true
    } else {
      test.value = false
    }
  }
</script>

<template>
  <h1>Hello VueUse!</h1>
  <a href="https://vueuse.org/" target="_blank">Documentation</a>
  <div v-intersection-observer="[
        onIntersectionObserver,
        { rootMargin: '25%' }
      ]">Test is {{ Boolean(test) }}</div>
</template>

<style></style>
