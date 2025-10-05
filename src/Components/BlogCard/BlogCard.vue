<template>
  <router-link
    :to="`/blog/${slug}`"
    class="group block rounded-2xl overflow-hidden shadow-elegant hover:shadow-elegant-hover relative bg-white dark:bg-gray-800 transition-all duration-500 card-hover"
    v-motion
    :initial="{ x: direction === 'right' ? 100 : -100, opacity: 0, scale: 0.9 }"
    :visibleOnce="{ x: 0, opacity: 1, scale: 1, transition: { duration: 700, delay: 200 } }"
  >
    <!-- Image container with overlay effects -->
    <div class="relative overflow-hidden">
      <img :src="image" :alt="title" class="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700" />
      
      <!-- Gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <!-- Category badge -->
      <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary-700 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
        <i class="fas fa-bookmark mr-1"></i>
        Tech Article
      </div>
      
      <!-- Read time indicator -->
      <div class="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
        <i class="fas fa-clock mr-1"></i>
        5 min read
      </div>
    </div>
    
    <div class="p-6 flex flex-col justify-between h-full">
      <!-- Content -->
      <div class="mb-4">
        <h2 class="text-xl font-bold mb-3 leading-tight group-hover:text-primary-600 text-gray-800 dark:text-white transition-colors duration-300 line-clamp-2">
          {{ title }}
        </h2>
        
        <p v-if="description" class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">
          {{ description }}
        </p>
        
        <!-- Author and date info -->
        <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              {{ author ? author.charAt(0).toUpperCase() : 'A' }}
            </div>
            <span class="font-medium group-hover:text-primary-600 transition-colors duration-300">{{ author || 'Admin' }}</span>
          </div>
          
          <div class="flex items-center gap-1">
            <i class="fas fa-calendar-alt text-xs"></i>
            <span>{{ date }}</span>
          </div>
        </div>
      </div>
      
      <!-- Read more indicator -->
      <div class="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
        <span class="text-primary-600 font-semibold text-sm group-hover:text-primary-700 transition-colors duration-300">
          Read More
        </span>
        <i class="fas fa-arrow-right text-primary-500 group-hover:translate-x-1 group-hover:text-primary-600 transition-all duration-300"></i>
      </div>
    </div>
    
    <!-- Hover border effect -->
    <div class="absolute inset-0 border-2 border-transparent group-hover:border-primary-200 rounded-2xl transition-colors duration-500"></div>
  </router-link>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  author: String,
  date: String,
  slug: String,
  image: String,
  direction: {
    type: String,
    default: 'left',
  },
})
</script>
