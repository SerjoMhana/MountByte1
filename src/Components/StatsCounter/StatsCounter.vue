<template>
  <section class="relative bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 py-20 px-6 overflow-hidden">
    <!-- Background effects -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="particles">
        <div class="particle" style="left: 15%; width: 3px; height: 3px; animation-delay: 0s; background: rgba(255,255,255,0.3);"></div>
        <div class="particle" style="left: 25%; width: 4px; height: 4px; animation-delay: 3s; background: rgba(255,255,255,0.2);"></div>
        <div class="particle" style="left: 35%; width: 2px; height: 2px; animation-delay: 6s; background: rgba(255,255,255,0.4);"></div>
        <div class="particle" style="left: 45%; width: 5px; height: 5px; animation-delay: 9s; background: rgba(255,255,255,0.1);"></div>
        <div class="particle" style="left: 55%; width: 3px; height: 3px; animation-delay: 12s; background: rgba(255,255,255,0.3);"></div>
        <div class="particle" style="left: 65%; width: 4px; height: 4px; animation-delay: 15s; background: rgba(255,255,255,0.2);"></div>
        <div class="particle" style="left: 75%; width: 2px; height: 2px; animation-delay: 18s; background: rgba(255,255,255,0.4);"></div>
        <div class="particle" style="left: 85%; width: 5px; height: 5px; animation-delay: 21s; background: rgba(255,255,255,0.1);"></div>
      </div>
    </div>
    
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center mb-12 scroll-animate" data-animation="fade-in-down">
        <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-4">
          {{ $t('statsCounter.title') }}
        </h2>
        <p class="text-xl text-white/80 max-w-2xl mx-auto">
          {{ $t('statsCounter.subtitle') }}
        </p>
      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 scroll-animate" data-animation="scale-in" data-stagger=".stat-item">
        <!-- Happy Clients -->
        <div class="stat-item text-center glass-card p-8 rounded-2xl hover-lift group">
          <div class="mb-4">
            <i class="fas fa-smile-beam text-4xl text-yellow-400 group-hover:animate-bounce"></i>
          </div>
          <div class="counter text-4xl md:text-5xl font-bold text-white mb-2" data-target="500">0</div>
          <div class="text-white/80 font-medium">{{ $t('statsCounter.happyClients') }}</div>
          <div class="w-full h-1 bg-white/20 rounded-full mt-4 overflow-hidden">
            <div class="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
          </div>
        </div>
        
        <!-- Projects Completed -->
        <div class="stat-item text-center glass-card p-8 rounded-2xl hover-lift group">
          <div class="mb-4">
            <i class="fas fa-project-diagram text-4xl text-green-400 group-hover:animate-bounce"></i>
          </div>
          <div class="counter text-4xl md:text-5xl font-bold text-white mb-2" data-target="750">0</div>
          <div class="text-white/80 font-medium">{{ $t('statsCounter.projectsDone') }}</div>
          <div class="w-full h-1 bg-white/20 rounded-full mt-4 overflow-hidden">
            <div class="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 delay-200"></div>
          </div>
        </div>
        
        <!-- Years Experience -->
        <div class="stat-item text-center glass-card p-8 rounded-2xl hover-lift group">
          <div class="mb-4">
            <i class="fas fa-calendar-check text-4xl text-blue-400 group-hover:animate-bounce"></i>
          </div>
          <div class="counter text-4xl md:text-5xl font-bold text-white mb-2" data-target="8">0</div>
          <div class="text-white/80 font-medium">{{ $t('statsCounter.yearsExperience') }}</div>
          <div class="w-full h-1 bg-white/20 rounded-full mt-4 overflow-hidden">
            <div class="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 delay-400"></div>
          </div>
        </div>
        
        <!-- Team Members -->
        <div class="stat-item text-center glass-card p-8 rounded-2xl hover-lift group">
          <div class="mb-4">
            <i class="fas fa-users text-4xl text-purple-400 group-hover:animate-bounce"></i>
          </div>
          <div class="counter text-4xl md:text-5xl font-bold text-white mb-2" data-target="25">0</div>
          <div class="text-white/80 font-medium">{{ $t('statsCounter.teamMembers') }}</div>
          <div class="w-full h-1 bg-white/20 rounded-full mt-4 overflow-hidden">
            <div class="h-full bg-gradient-to-r from-purple-400 to-purple-500 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 delay-600"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useScrollAnimations } from '../../composables/useScrollAnimations.js'

const { observeElements, animateCounters } = useScrollAnimations()

onMounted(() => {
  // Initialize scroll animations
  setTimeout(() => {
    observeElements()
  }, 100)
  
  // Initialize counter animations when section becomes visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters()
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.5
  })
  
  const statsSection = document.querySelector('.stat-item')
  if (statsSection) {
    observer.observe(statsSection.parentElement)
  }
})
</script>

<style scoped>
.stat-item {
  position: relative;
  overflow: hidden;
}

.stat-item::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.stat-item:hover::before {
  opacity: 1;
}
</style>
