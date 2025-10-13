<template>
  <!-- Scroll to top button (right side) -->
  <div class="fixed bottom-8 right-8 z-50">
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 scale-0 rotate-180"
      enter-to-class="opacity-100 scale-100 rotate-0"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 scale-100 rotate-0"
      leave-to-class="opacity-0 scale-0 rotate-180"
    >
      <button
        v-show="isScrolled"
        @click="scrollToTop"
        class="w-14 h-14 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:scale-110 group relative overflow-hidden"
        title="Scroll to top"
      >
        <i class="fas fa-chevron-up group-hover:animate-bounce"></i>
        <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
      </button>
    </Transition>
  </div>
  
  <!-- WhatsApp and Theme buttons (left side) -->
  <div class="fixed bottom-8 left-8 z-50 flex flex-col gap-4">
    <!-- Theme toggle -->
    <button
      @click="toggleTheme"
      class="w-14 h-14 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-full shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:scale-110 group relative overflow-hidden"
      title="Toggle theme"
    >
      <i class="fas fa-moon group-hover:animate-spin"></i>
      <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const updateScrollState = () => {
  isScrolled.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const toggleTheme = () => {
  // Toggle dark mode class on html element
  document.documentElement.classList.toggle('dark')
  
  // Store theme preference in localStorage
  const isDark = document.documentElement.classList.contains('dark')
  localStorage.setItem('theme', isDark ? 'dark' : 'light')
}

onMounted(() => {
  window.addEventListener('scroll', updateScrollState, { passive: true })
  updateScrollState()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollState)
})
</script>

<style scoped>
/* Additional animations for floating buttons */
@keyframes fadeInScale {
  0% {
    opacity: 0;
    transform: scale(0) rotate(180deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

@keyframes fadeOutScale {
  0% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform: scale(0) rotate(180deg);
  }
}
</style>
