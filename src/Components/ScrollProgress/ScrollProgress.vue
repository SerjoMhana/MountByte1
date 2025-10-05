<template>
  <div 
    class="scroll-progress"
    :style="{ transform: `scaleX(${scrollProgress})` }"
  ></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrollProgress = ref(0)

const updateScrollProgress = () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const scrolled = (winScroll / height)
  scrollProgress.value = scrolled
}

onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress)
})
</script>

<style scoped>
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #4CAF50, #2196F3, #9C27B0);
  transform-origin: left;
  z-index: 9999;
  transition: transform 0.1s ease;
}
</style>
