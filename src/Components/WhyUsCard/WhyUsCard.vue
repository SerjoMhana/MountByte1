<template>
  <div
    class="relative bg-white p-8 rounded-2xl shadow-elegant flex flex-col items-center text-center h-full overflow-hidden"
    v-motion
    :initial="{ y: 100, opacity: 0, scale: 0.9 }"
    :visibleOnce="{ y: 0, opacity: 1, scale: 1, transition: { duration: 700, delay: delay } }"
  >
    <!-- Background gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-accent-50/50 opacity-0"></div>
    
    <!-- Floating decoration -->
    <div class="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full opacity-0"></div>
    
    <div class="relative z-10 w-full">
      <div class="w-full h-56 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center overflow-hidden mb-6 border border-gray-200 relative">
        <!-- Professional placeholder icons based on card titles -->
        <div v-if="!imageUrl" class="text-center">
          <!-- Dynamic icon based on title -->
          <div v-if="title.toLowerCase().includes('design')" class="text-6xl text-primary-500 mb-2">
            <i class="fas fa-palette"></i>
          </div>
          <div v-else-if="title.toLowerCase().includes('performance')" class="text-6xl text-accent-500 mb-2">
            <i class="fas fa-rocket"></i>
          </div>
          <div v-else-if="title.toLowerCase().includes('support')" class="text-6xl text-secondary-500 mb-2">
            <i class="fas fa-headset"></i>
          </div>
          <div v-else class="text-6xl text-primary-500 mb-2">
            <i class="fas fa-star"></i>
          </div>
          
          <!-- Decorative elements -->
          <div class="absolute top-4 left-4 w-3 h-3 bg-primary-400 rounded-full opacity-50"></div>
          <div class="absolute bottom-4 right-4 w-2 h-2 bg-accent-400 rounded-full opacity-50" style="animation-delay: 0.3s;"></div>
        </div>
        
        <img v-else :src="imageUrl" :alt="title" class="w-full h-full object-cover" loading="lazy" />
        
        <!-- Overlay on hover -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0"></div>
      </div>
      
      <div>
        <h3 class="text-2xl font-bold text-gray-800 mb-2">
          {{ title }}
        </h3>
        
        <!-- Add description if provided -->
        <p v-if="description" class="text-gray-600 text-sm leading-relaxed">
          {{ description }}
        </p>
        <p v-else class="text-gray-600 text-sm leading-relaxed">
          {{ getDefaultDescription(title) }}
        </p>
      </div>
    </div>
    
    <!-- Hover indicator -->
    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-t-full"></div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  delay: {
    type: Number,
    default: 0,
  },
});

// Function to provide default descriptions based on title
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

function getDefaultDescription(title) {
  const titleLower = title.toLowerCase()
  
  if (titleLower.includes('design') || titleLower.includes('تصميم')) {
    return t('whyus.card1.description');
  } else if (titleLower.includes('performance') || titleLower.includes('أداء')) {
    return t('whyus.card2.description');
  } else if (titleLower.includes('support') || titleLower.includes('دعم')) {
    return t('whyus.card3.description');
  } else {
    return t('whyus.subtitle');
  }
}
</script>

<style scoped>
/* No additional styles needed if you're purely using Tailwind. */
</style>
