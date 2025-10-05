<template>
  <section class="relative bg-gradient-to-br from-gray-900 via-primary-900 to-accent-900 py-20 px-6 overflow-hidden">
    <!-- Background effects -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-black/30"></div>
      
      <!-- Animated grid pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="grid grid-cols-12 h-full">
          <div v-for="i in 12" :key="i" class="border-r border-white/20"></div>
        </div>
      </div>
      
      <!-- Floating geometric shapes -->
      <div class="absolute top-20 left-20 w-32 h-32 border-2 border-primary-400/30 rounded-full animate-float"></div>
      <div class="absolute bottom-20 right-20 w-24 h-24 border-2 border-accent-400/30 transform rotate-45 animate-float" style="animation-delay: 2s;"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-secondary-400/30 rounded-lg animate-float" style="animation-delay: 4s;"></div>
      
      <!-- Particle effects -->
      <div class="particles">
        <div class="particle" style="left: 10%; width: 3px; height: 3px; animation-delay: 0s; background: rgba(76, 175, 80, 0.3);"></div>
        <div class="particle" style="left: 30%; width: 4px; height: 4px; animation-delay: 5s; background: rgba(33, 150, 243, 0.3);"></div>
        <div class="particle" style="left: 50%; width: 2px; height: 2px; animation-delay: 10s; background: rgba(156, 39, 176, 0.3);"></div>
        <div class="particle" style="left: 70%; width: 5px; height: 5px; animation-delay: 15s; background: rgba(76, 175, 80, 0.2);"></div>
        <div class="particle" style="left: 90%; width: 3px; height: 3px; animation-delay: 20s; background: rgba(33, 150, 243, 0.3);"></div>
      </div>
    </div>
    
    <div class="relative max-w-4xl mx-auto text-center">
      <!-- Main content -->
      <div class="scroll-animate" data-animation="fade-in-up">
        <h2 class="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          {{ $t('callToAction.titlePart1') }}
          <span class="block gradient-text typewriter">{{ $t('callToAction.titlePart2') }}</span>
        </h2>
        
        <p class="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto">
          {{ $t('callToAction.description') }}
        </p>
      </div>
      
      <!-- Action buttons -->
      <div class="flex flex-col sm:flex-row gap-6 justify-center items-center scroll-animate" data-animation="scale-in" data-delay="400ms">
        <router-link to="/Form" class="group magnetic-btn bg-white text-primary-700 px-10 py-4 rounded-full font-bold text-lg shadow-elegant hover:shadow-elegant-hover transition-all duration-300 relative overflow-hidden">
          <span class="relative z-10 flex items-center">
            <span class="mr-3">{{ $t('callToAction.startProject') }}</span>
            <i class="fas fa-rocket group-hover:animate-bounce"></i>
          </span>
          <div class="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </router-link>
        
        <button class="group magnetic-btn border-2 border-white text-white hover:bg-white hover:text-primary-700 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 relative overflow-hidden">
          <span class="relative z-10 flex items-center">
            <span class="mr-3">{{ $t('callToAction.scheduleCall') }}</span>
            <i class="fas fa-phone group-hover:animate-pulse"></i>
          </span>
        </button>
      </div>
      
      <!-- Trust indicators -->
      <div class="mt-16 scroll-animate" data-animation="fade-in-up" data-delay="600ms">
        <div class="flex flex-col md:flex-row justify-center items-center gap-8 text-white/60">
          <div class="flex items-center gap-3 group hover:text-white/80 transition-colors duration-300">
            <i class="fas fa-shield-alt text-2xl group-hover:scale-110 transition-transform duration-300"></i>
            <span class="font-medium">{{ $t('callToAction.secure') }}</span>
          </div>
          <div class="hidden md:block w-px h-8 bg-white/20"></div>
          <div class="flex items-center gap-3 group hover:text-white/80 transition-colors duration-300">
            <i class="fas fa-clock text-2xl group-hover:scale-110 transition-transform duration-300"></i>
            <span class="font-medium">{{ $t('callToAction.support') }}</span>
          </div>
          <div class="hidden md:block w-px h-8 bg-white/20"></div>
          <div class="flex items-center gap-3 group hover:text-white/80 transition-colors duration-300">
            <i class="fas fa-medal text-2xl group-hover:scale-110 transition-transform duration-300"></i>
            <span class="font-medium">{{ $t('callToAction.awardWinning') }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Decorative arrows pointing to CTA -->
    <div class="absolute left-10 top-1/2 transform -translate-y-1/2 text-white/20 animate-pulse hidden lg:block">
      <i class="fas fa-arrow-right text-3xl"></i>
    </div>
    <div class="absolute right-10 top-1/2 transform -translate-y-1/2 rotate-180 text-white/20 animate-pulse hidden lg:block">
      <i class="fas fa-arrow-right text-3xl"></i>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useScrollAnimations } from '../../composables/useScrollAnimations.js'

const { observeElements } = useScrollAnimations()

onMounted(() => {
  setTimeout(() => {
    observeElements()
  }, 100)
})
</script>

<style scoped>
/* Custom animations for this component */
@keyframes gradientShine {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}

.gradient-text {
  background: linear-gradient(135deg, #4CAF50, #2196F3, #9C27B0, #4CAF50);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-shift 4s ease infinite;
}

/* Enhanced magnetic effect */
.magnetic-btn {
  position: relative;
  z-index: 1;
}

.magnetic-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  padding: 2px;
  background: linear-gradient(45deg, #4CAF50, #2196F3, #9C27B0, #4CAF50);
  background-size: 300% 300%;
  animation: gradientShine 3s ease infinite;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.magnetic-btn:hover::before {
  opacity: 0.5;
}
</style>
