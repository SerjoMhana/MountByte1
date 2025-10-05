<script setup>
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { Motion } from '@motionone/vue';
import BlogCard from '@/Components/BlogCard/BlogCard.vue';
import { useIntersectionObserver } from '@vueuse/core';
import { articles } from '@/articles.js'; // Import the articles array directly

const { t, locale } = useI18n();

const articlesSection = ref(null);
const articlesSectionIsVisible = ref(false);

onMounted(() => {
  useIntersectionObserver(
    articlesSection,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        articlesSectionIsVisible.value = true;
      }
    },
    { threshold: 0.3 }
  );
});

const activeFilter = ref('all'); // 'all', 'programming', 'design', 'technical-support'

const filteredArticles = computed(() => {
  if (activeFilter.value === 'all') {
    return articles; // Use the imported articles array directly
  }
  return articles.filter(article => article.category === activeFilter.value);
});

function setFilter(filter) {
  activeFilter.value = filter;
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
    <!-- Hero Section -->
    <section class="relative bg-green-500 py-20 md:py-32 text-white overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-black opacity-20"></div>
        <div class="absolute inset-0 bg-pattern-dots-green opacity-20"></div>
      </div>
      <div :class="['container', 'mx-auto', 'px-6', 'relative', 'z-10', locale === 'ar' ? 'text-right' : 'text-center']">
        <Motion
          :initial="{ opacity: 0, y: -50 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: 0.2, duration: 0.8 }"
        >
          <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            {{ t('articles.hero.title') }}
          </h1>
        </Motion>
        <Motion
          :initial="{ opacity: 0, y: 50 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: 0.4, duration: 0.8 }"
        >
          <p class="text-lg md:text-xl max-w-3xl mx-auto">
            {{ t('articles.hero.subtitle') }}
          </p>
        </Motion>
      </div>
    </section>

    <!-- Filter and Articles Section -->
    <section ref="articlesSection" class="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-6">
        <!-- Filter Buttons -->
        <Motion
          :initial="{ opacity: 0, y: -20 }"
          :animate="articlesSectionIsVisible ? { opacity: 1, y: 0 } : {}"
          :transition="{ delay: 0.2, duration: 0.6 }"
        >
          <div class="flex justify-center space-x-4 mb-12">
            <button
              @click="setFilter('all')"
              :class="{'bg-primary text-white': activeFilter === 'all', 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600': activeFilter !== 'all'}"
              class="px-6 py-3 rounded-full font-semibold transition-colors duration-300 shadow-md"
            >
              {{ t('articles.filters.all') }}
            </button>
            <button
              @click="setFilter('programming')"
              :class="{'bg-primary text-white': activeFilter === 'programming', 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600': activeFilter !== 'programming'}"
              class="px-6 py-3 rounded-full font-semibold transition-colors duration-300 shadow-md"
            >
              {{ t('articles.filters.programming') }}
            </button>
            <button
              @click="setFilter('design')"
              :class="{'bg-primary text-white': activeFilter === 'design', 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600': activeFilter !== 'design'}"
              class="px-6 py-3 rounded-full font-semibold transition-colors duration-300 shadow-md"
            >
              {{ t('articles.filters.design') }}
            </button>
            <button
              @click="setFilter('technical-support')"
              :class="{'bg-primary text-white': activeFilter === 'technical-support', 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600': activeFilter !== 'technical-support'}"
              class="px-6 py-3 rounded-full font-semibold transition-colors duration-300 shadow-md"
            >
              {{ t('articles.filters.technical-support') }}
            </button>
          </div>
        </Motion>

        <!-- Articles Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Motion
            v-for="(article, index) in filteredArticles"
            :key="article.id"
            :initial="{ opacity: 0, y: 50 }"
            :animate="articlesSectionIsVisible ? { opacity: 1, y: 0 } : {}"
            :transition="{ delay: 0.1 * index + 0.4, duration: 0.6 }"
          >
            <BlogCard
              :title="article.title"
              :date="article.date"
              :slug="article.slug"
              :image="article.image"
            />
          </Motion>
        </div>
        <Motion
          v-if="filteredArticles.length === 0"
          :initial="{ opacity: 0 }"
          :animate="articlesSectionIsVisible ? { opacity: 1 } : {}"
          :transition="{ delay: 0.5, duration: 0.5 }"
        >
          <p class="text-center text-gray-600 dark:text-gray-300 text-lg mt-12">
            {{ t('articles.no_articles') }}
          </p>
        </Motion>
      </div>
    </section>
  </div>
</template>

<style scoped>
.bg-pattern-dots-green {
  background-image: radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px);
  background-size: 20px 20px;
}
</style>
