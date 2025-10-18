<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { Motion } from '@motionone/vue';
import { useIntersectionObserver } from '@vueuse/core';

const { t, locale } = useI18n();

const storySection = ref(null);
const storySectionIsVisible = ref(false);

const missionSection = ref(null);
const missionSectionIsVisible = ref(false);

onMounted(() => {
  useIntersectionObserver(
    storySection,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        storySectionIsVisible.value = true;
      }
    },
    { threshold: 0.3 } // Trigger when 30% of the section is visible
  );

  useIntersectionObserver(
    missionSection,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        missionSectionIsVisible.value = true;
      }
    },
    { threshold: 0.3 }
  );
});
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
            {{ t('about.hero.title') }}
          </h1>
        </Motion>
        <Motion
          :initial="{ opacity: 0, y: 50 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: 0.4, duration: 0.8 }"
        >
          <p class="text-lg md:text-xl max-w-3xl mx-auto">
            {{ t('about.hero.subtitle') }}
          </p>
        </Motion>
      </div>
    </section>

    <!-- Our Story Section -->
    <section ref="storySection" class="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <Motion
          :initial="{ opacity: 0, x: -50 }"
          :animate="storySectionIsVisible ? { opacity: 1, x: 0 } : {}"
          :transition="{ delay: 0.2, duration: 0.8 }"
        >
          <div class="md:order-1">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-primary dark:text-green-400">
              {{ t('about.story.title') }}
            </h2>
            <p class="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
              {{ t('about.story.paragraph1') }}
            </p>
            <p class="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {{ t('about.story.paragraph2') }}
            </p>
          </div>
        </Motion>
        <Motion
          :initial="{ opacity: 0, x: 50 }"
          :animate="storySectionIsVisible ? { opacity: 1, x: 0 } : {}"
          :transition="{ delay: 0.4, duration: 0.8 }"
        >
          <div class="md:order-2">
            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" :alt="$t('about.story.imageAlt')" class="rounded-lg shadow-xl w-full h-auto object-cover" />
          </div>
        </Motion>
      </div>
    </section>

    <!-- Our Mission Section -->
    <section ref="missionSection" class="py-16 md:py-24 bg-gray-100 dark:bg-gray-900">
      <div class="container mx-auto px-6 text-center">
        <Motion
          :initial="{ opacity: 0, y: -50 }"
          :animate="missionSectionIsVisible ? { opacity: 1, y: 0 } : {}"
          :transition="{ delay: 0.2, duration: 0.8 }"
        >
          <h2 class="text-3xl md:text-4xl font-bold mb-8 text-primary dark:text-green-400">
            {{ t('about.mission.title') }}
          </h2>
        </Motion>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Motion
            :initial="{ opacity: 0, y: 50 }"
            :animate="missionSectionIsVisible ? { opacity: 1, y: 0 } : {}"
            :transition="{ delay: 0.4, duration: 0.8 }"
          >
            <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <i class="fas fa-lightbulb text-5xl text-green-600 mb-4"></i>
              <h3 class="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{{ t('about.mission.innovation.title') }}</h3>
              <p class="text-gray-600 dark:text-gray-300">{{ t('about.mission.innovation.description') }}</p>
            </div>
          </Motion>
          <Motion
            :initial="{ opacity: 0, y: 50 }"
            :animate="missionSectionIsVisible ? { opacity: 1, y: 0 } : {}"
            :transition="{ delay: 0.6, duration: 0.8 }"
          >
            <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <i class="fas fa-users text-5xl text-green-600 mb-4"></i>
              <h3 class="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{{ t('about.mission.community.title') }}</h3>
              <p class="text-gray-600 dark:text-gray-300">{{ t('about.mission.community.description') }}</p>
            </div>
          </Motion>
          <Motion
            :initial="{ opacity: 0, y: 50 }"
            :animate="missionSectionIsVisible ? { opacity: 1, y: 0 } : {}"
            :transition="{ delay: 0.8, duration: 0.8 }"
          >
            <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <i class="fas fa-handshake text-5xl text-green-600 mb-4"></i>
              <h3 class="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{{ t('about.mission.integrity.title') }}</h3>
              <p class="text-gray-600 dark:text-gray-300">{{ t('about.mission.integrity.description') }}</p>
            </div>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Team Section (Optional - can be added later) -->
    <!--
    <section class="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-primary dark:text-green-400">
          {{ t('about.team.title') }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <img src="https://via.placeholder.com/150" alt="Team Member" class="rounded-full w-32 h-32 mx-auto mb-4 object-cover" />
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white">John Doe</h3>
            <p class="text-primary dark:text-green-400">CEO</p>
          </div>
        </div>
      </div>
    </section>
    -->
  </div>
</template>

<style scoped>
.bg-pattern-dots-green {
  background-image: radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px);
  background-size: 20px 20px;
}
</style>
