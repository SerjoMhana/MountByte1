<template>
  <div
    class="relative flex flex-col items-center text-center space-y-6 p-8 bg-white rounded-2xl shadow-elegant hover:shadow-elegant-hover transition-all duration-500 group cursor-pointer card-hover overflow-hidden"
    v-motion
    :initial="{ y: 100, opacity: 0, scale: 0.8 }"
    :visibleOnce="{ y: 0, opacity: 1, scale: 1, transition: { duration: 600, delay: delay } }"
  >
    <!-- Background gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary-50 via-transparent to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <!-- Floating particles -->
    <div class="absolute top-4 right-4 w-2 h-2 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping" style="animation-delay: 0.2s;"></div>
    <div class="absolute bottom-6 left-6 w-1 h-1 bg-accent-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping" style="animation-delay: 0.5s;"></div>
    
    <div class="relative z-10 group-hover:transform group-hover:-translate-y-2 transition-transform duration-500">
      <div class="bg-gradient-to-br from-primary-500 to-primary-600 text-white text-4xl rounded-2xl w-20 h-20 flex items-center justify-center shadow-elegant group-hover:shadow-glow group-hover:scale-110 transition-all duration-500 mb-4 relative overflow-hidden">
        <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
        <i :class="icon" class="relative z-10 group-hover:animate-bounce"></i>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-800 group-hover:text-primary-700 transition-colors duration-300 mb-3">
        {{ title }}
      </h3>
      
      <p class="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 max-w-xs">
        {{ desc }}
      </p>
    </div>
    
    <!-- Hover border effect -->
    <div class="absolute inset-0 border-2 border-transparent group-hover:border-primary-200 rounded-2xl transition-colors duration-500"></div>
    
    <!-- Corner accent -->
    <div class="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-2xl"></div>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  desc: String,
  description: String,
  delay: {
    type: Number,
    default: 0,
  },
})
</script>