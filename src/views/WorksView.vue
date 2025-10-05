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
    image: 'https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    name: 'works.projects.project2.name',
    description: 'works.projects.project2.description',
    category: 'designs',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    name: 'works.projects.project3.name',
    description: 'works.projects.project3.description',
    category: 'websites',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    name: 'works.projects.project4.name',
    description: 'works.projects.project4.description',
    category: 'designs',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    name: 'works.projects.project5.name',
    description: 'works.projects.project5.description',
    category: 'websites',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    name: 'works.projects.project6.name',
    description: 'works.projects.project6.description',
    category: 'designs',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    <section ref="projectsSection" class="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-6">
        <!-- Projects Grid -->
        <div class="space-y-12">
          <Motion
            v-for="(project, index) in projects"
            :key="project.id"
            :initial="{ opacity: 0, y: 50 }"
            :animate="projectsSectionIsVisible ? { opacity: 1, y: 0 } : {}"
            :transition="{ delay: 0.1 * index + 0.2, duration: 0.5 }"
          >
            <div :class="['bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6', 'flex flex-col md:flex-row gap-8 items-center']">
              <!-- Image Section -->
              <div :class="['md:w-1/2', locale === 'ar' ? 'md:order-2' : 'md:order-1']">
                <img :src="project.image" :alt="t(project.name)" class="w-full h-56 object-cover rounded-lg" />
              </div>
              <!-- Text Section -->
              <div :class="['md:w-1/2', locale === 'ar' ? 'md:order-1 text-right' : 'md:order-2 text-left']">
                <h3 class="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{{ t(project.name) }}</h3>
                <p class="text-gray-600 dark:text-gray-300">{{ t(project.description) }}</p>
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
