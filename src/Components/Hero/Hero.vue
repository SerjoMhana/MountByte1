<template>
  <section class="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-primary-50 overflow-hidden" :dir="isRTL ? 'rtl' : 'ltr'">
    <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-700 opacity-90"></div>
    <div class="absolute inset-0 z-0">
      <div class="absolute top-1/4 left-1/4 w-48 h-48 bg-primary-500/10 rounded-full filter blur-3xl animate-float" style="animation-delay: 0s;"></div>
      <div class="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent-500/10 rounded-full filter blur-3xl animate-float" style="animation-delay: 2s;"></div>
      <div class="absolute top-1/2 left-1/2 w-56 h-56 bg-secondary-500/10 rounded-full filter blur-3xl animate-float" style="animation-delay: 4s;"></div>
    </div>

    <div class="relative z-20 max-w-7xl mx-auto min-h-screen flex items-center pt-28">
      <div class="flex flex-col lg:flex-row gap-16 items-center w-full px-6 justify-between">
        
        <div :class="isRTL ? 'lg:order-2' : 'lg:order-2'" class="lg:w-1/2">
          <div class="relative"
            v-motion
            :initial="{ opacity: 0, x: -100, rotateY: 30 }"
            :enter="{ opacity: 1, x: 0, rotateY: 0, transition: { duration: 1200, delay: 600 } }">
            
            <div class="relative group perspective-1000">
              <!-- Large stunning hero image -->
              <div class="relative bg-gradient-to-br from-primary-500/20 via-accent-500/20 to-secondary-500/20 rounded-3xl p-8 backdrop-blur-sm">
                <img :src="heroImage" :alt="$t('hero.imageAlt')" 
                  class="w-full h-auto max-w-2xl mx-auto drop-shadow-2xl transform group-hover:scale-110 transition-all duration-700 ease-out filter brightness-110 contrast-110" 
                  style="filter: drop-shadow(0 25px 50px rgba(59, 130, 246, 0.5));" />
              </div>
              
              <!-- Animated decorative elements -->
              <div class="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full shadow-2xl animate-float opacity-80 group-hover:animate-bounce blur-xl"></div>
              <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-r from-accent-400 to-secondary-400 rounded-full shadow-2xl animate-float opacity-70 blur-xl" style="animation-delay: 2s;"></div>
              <div class="absolute top-1/2 -right-8 w-24 h-24 bg-gradient-to-r from-secondary-400 to-primary-400 rounded-full shadow-xl animate-float opacity-60 blur-lg" style="animation-delay: 4s;"></div>
            </div>
          </div>
        </div>
        
        <div :class="[isRTL ? 'text-right' : 'text-left', isRTL ? 'lg:order-1' : 'lg:order-1']">
          <div class="mb-8"
            v-motion
            :initial="{ opacity: 0, x: 80 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 1000, delay: 400 } }">
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight">
              {{ $t('hero.title1') }}
            </h1>
            <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400 animate-gradient-shift">
              {{ $t('hero.title2') }}
            </h2>
          </div>
          
          <div class="mb-10"
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: 800 } }">
            <p class="text-lg md:text-xl text-white/90 leading-relaxed max-w-lg">
              {{ $t('hero.description') }}
            </p>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-4 mb-12"
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: 1000 } }">
            <router-link to="/contact" class="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <span class="relative z-10 flex items-center justify-center gap-2">
                <span class="mr-3">{{ $t('hero.contactUs') }}</span>
                <i class="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
              </span>
              <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </router-link>
            
            <router-link to="/works" class="group relative px-8 py-4 border-2 border-white/50 text-white hover:bg-white hover:text-gray-900 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              <span class="flex items-center justify-center">
                <i class="fas fa-play mr-3 group-hover:animate-bounce"></i>
                <span>{{ $t('hero.viewWorks') }}</span>
              </span>
            </router-link>
          </div>
          
          <div class="flex gap-8"
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: 1200 } }">
            <div class="text-center">
              <div class="text-2xl font-bold text-primary-400">40+</div>
              <div class="text-sm text-white/70">{{ $t('hero.projects') }}</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-accent-400">99%</div>
              <div class="text-sm text-white/70">{{ $t('hero.satisfaction') }}</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-secondary-400">5+</div>
              <div class="text-sm text-white/70">{{ $t('hero.years') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/4 left-1/4 text-primary-300/30 text-3xl animate-float" style="animation-delay: 1s;">
        <i class="fab fa-react"></i>
      </div>
      <div class="absolute top-1/3 right-1/4 text-accent-300/30 text-3xl animate-float" style="animation-delay: 3s;">
        <i class="fab fa-vue"></i>
      </div>
      <div class="absolute bottom-1/4 left-1/3 text-secondary-300/30 text-3xl animate-float" style="animation-delay: 5s;">
        <i class="fab fa-node-js"></i>
      </div>
      <div class="absolute bottom-1/3 right-1/3 text-primary-300/30 text-3xl animate-float" style="animation-delay: 7s;">
        <i class="fab fa-js-square"></i>
      </div>
    </div>
    
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
      <div class="flex flex-col items-center animate-bounce">
        <span class="text-white/70 text-sm mb-2 font-medium">{{ $t('hero.scrollToExplore') }}</span>
        <div class="w-6 h-10 border-2 border-primary-400/70 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import heroImage from '@/assets/hero2-removebg-preview.png'

const { locale } = useI18n()
const isRTL = computed(() => ['ar', 'he', 'fa'].includes(locale.value))
const router = useRouter()
</script>

<style scoped>
/* 3D perspective for browser mockup */
.perspective-1000 {
  perspective: 1000px;
}

/* Custom 3D transforms */
.group:hover .transform {
  transform-style: preserve-3d;
}

/* Gradient text animation */
.gradient-text {
  background: linear-gradient(135deg, #4CAF50, #2196F3, #9C27B0, #4CAF50);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-shift 4s ease infinite;
}
</style>
