<script setup>
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { Motion } from '@motionone/vue';
import { useIntersectionObserver } from '@vueuse/core';

const { t, locale } = useI18n();

const projectsSection = ref(null);
const projectsSectionIsVisible = ref(false);

onMounted(() => {
  useIntersectionObserver(
    projectsSection,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        projectsSectionIsVisible.value = true;
      }
    },
    { threshold: 0.1 }
  );
});

const projects = ref([
  {
    id: 1,
    name: 'works.projects.project1.name',
    description: 'works.projects.project1.description',
    category: 'websites',
    image: new URL('@/assets/entesarwbsite.jpg', import.meta.url).href,
    link: 'https://opstore.ly/',
  },
  {
    id: 2,
    name: 'works.projects.project2.name',
    description: 'works.projects.project2.description',
    category: 'websites',
    image: new URL('@/assets/ahsiblywebsite.jpg', import.meta.url).href,
    link: 'https://ahsibly.ly/',
  },
  {
    id: 3,
    name: 'works.projects.project3.name',
    description: 'works.projects.project3.description',
    category: 'websites',
    image: new URL('@/assets/alfawzwebsite.jpg', import.meta.url).href,
    link: 'https://alfawz.ly/',
  },
  {
    id: 4,
    name: 'works.projects.project4.name',
    description: 'works.projects.project4.description',
    category: 'websites',
    image: new URL('@/assets/Visionwebsite.jpg', import.meta.url).href,
    comingSoon: true,
  },
]);
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
    <!-- Hero Section -->
    <section class="relative bg-green-500 py-20 md:py-32 text-white overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-black opacity-20"></div>
        <div class="absolute inset-0 bg-pattern-dots-green opacity-20"></div>
      </div>
      <div :class="['container', 'mx-auto', 'px-6', 'relative', 'z-10', locale === 'ar' ? 'text-center' : 'text-center']">
        <Motion
          :initial="{ opacity: 0, y: -50 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: 0.2, duration: 0.8 }"
        >
          <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            {{ t('works.hero.title') }}
          </h1>
        </Motion>
        <Motion
          :initial="{ opacity: 0, y: 50 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: 0.4, duration: 0.8 }"
        >
          <p class="text-lg md:text-xl max-w-3xl mx-auto">
            {{ t('works.hero.subtitle') }}
          </p>
        </Motion>
      </div>
    </section>

    <!-- Filter and Projects Section -->
    <section ref="projectsSection" class="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div class="container mx-auto px-6">
        <!-- Section Title -->
        <Motion
          :initial="{ opacity: 0, y: -30 }"
          :animate="projectsSectionIsVisible ? { opacity: 1, y: 0 } : {}"
          :transition="{ duration: 0.6 }"
        >

        </Motion>

        <!-- Projects Grid -->
        <div class="space-y-16">
          <Motion
            v-for="(project, index) in projects"
            :key="project.id"
            :initial="{ opacity: 0, y: 50 }"
            :animate="projectsSectionIsVisible ? { opacity: 1, y: 0 } : {}"
            :transition="{ delay: 0.15 * index + 0.3, duration: 0.6 }"
          >
            <div class="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <!-- Decorative gradient background -->
              <div class="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-blue-50/50 dark:from-green-900/20 dark:via-transparent dark:to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <!-- Decorative corner accent -->
              <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-transparent rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500"></div>
              
              <div :class="['relative flex flex-col md:flex-row gap-0 items-stretch']">
                <!-- Image Section -->
                <div :class="['md:w-1/2 relative overflow-hidden', locale === 'ar' ? 'md:order-2' : 'md:order-1']">
                  <div class="relative h-full min-h-[350px] md:min-h-[400px]">
                    <img 
                      :src="project.image" 
                      :alt="t(project.name)" 
                      class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" 
                    />
                    <!-- Image overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                    
                    <!-- Project number badge -->
                    <div class="absolute top-6 left-6 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {{ String(index + 1).padStart(2, '0') }}
                    </div>
                    
                    <!-- Category badge -->
                    <div class="absolute bottom-6 left-6 px-4 py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800 dark:text-white shadow-lg">
                      <i class="fas fa-globe mr-2 text-green-500"></i>
                      {{ locale === 'ar' ? 'موقع ويب' : 'Website' }}
                    </div>
                  </div>
                </div>
                
                <!-- Text Section -->
                <div :class="['md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-10', locale === 'ar' ? 'md:order-1 text-right' : 'md:order-2 text-left']">
                  <!-- Title with decorative line -->
                  <div class="mb-6">
                    <h3 class="text-3xl md:text-4xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                      {{ t(project.name) }}
                    </h3>
                    <div :class="['w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-500 group-hover:w-24', locale === 'ar' ? 'mr-auto' : 'ml-0']"></div>
                  </div>
                  
                  <!-- Description -->
                  <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {{ t(project.description) }}
                  </p>
                  
                  <!-- Action buttons -->
                  <div class="flex gap-4 items-center">
                    <a 
                      v-if="project.link" 
                      :href="project.link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl group/button"
                    >
                      <span>{{ locale === 'ar' ? 'زيارة الموقع' : 'View Website' }}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform group-hover/button:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </a>
                    
                    <div 
                      v-if="project.comingSoon" 
                      class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-xl shadow-lg animate-pulse"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                      </svg>
                      <span>{{ locale === 'ar' ? 'قريباً' : 'Coming Soon' }}</span>
                    </div>
                  </div>
                  
                  <!-- Decorative dots -->
                  <div :class="['mt-8 flex gap-2', locale === 'ar' ? 'justify-end' : 'justify-start']">
                    <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style="animation-delay: 0.2s;"></div>
                    <div class="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style="animation-delay: 0.4s;"></div>
                  </div>
                </div>
              </div>
            </div>
          </Motion>
        </div>
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
