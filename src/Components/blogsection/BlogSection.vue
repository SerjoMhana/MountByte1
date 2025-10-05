<template>
  <section class="relative bg-gradient-to-b from-white via-primary-50/30 to-white py-20 px-6 overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0">
      <div class="absolute top-40 left-0 w-96 h-96 bg-accent-200/20 rounded-full animate-float filter blur-3xl"></div>
      <div class="absolute bottom-40 right-0 w-80 h-80 bg-primary-200/20 rounded-full animate-float filter blur-3xl" style="animation-delay: 4s;"></div>
    </div>
    
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center mb-16"
           v-motion
           :initial="{ y: 50, opacity: 0 }"
           :visibleOnce="{ y: 0, opacity: 1, transition: { duration: 800 } }">
        <span class="inline-block px-4 py-2 text-sm font-medium text-primary-700 bg-primary-100 rounded-full mb-6">
          <i class="fas fa-blog mr-2"></i>
          {{ $t('blogSection.latestInsights') }}
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          {{ $t('blog.title') }}
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {{ $t('blogSection.subtitle') }}
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-10">
        <BlogCard
          image="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          :title="$t('blog.card1.title')"
          :description="$t('blog.card1.description')"
          :author="$t('blog.card1.author')"
          :date="$t('blog.card1.date')"
          slug="web-development-trends-2024"
          direction="left"
        />

        <BlogCard
          image="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          :title="$t('blog.card2.title')"
          :description="$t('blog.card2.description')"
          :author="$t('blog.card2.author')"
          :date="$t('blog.card2.date')"
          slug="beginners-guide-to-ai"
          direction="right"
        />
      </div>
      
      <!-- View all articles button -->

    </div>
  </section>
</template>

<script setup>
import BlogCard from '../BlogCard/BlogCard.vue'
</script>
