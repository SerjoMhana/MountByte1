<script setup>
import { useI18n } from 'vue-i18n';
import { watch, onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useScrollAnimations } from './composables/useScrollAnimations.js';
import ScrollProgress from './Components/ScrollProgress/ScrollProgress.vue';
import FloatingAction from './Components/FloatingAction/FloatingAction.vue';
import Footer from './Components/Footer/Footer.vue';

const { locale } = useI18n();
const { scrollY, isScrolled } = useScrollAnimations();
const route = useRoute();

const isHeaderWhite = computed(() => {
  const whiteHeaderRoutes = ['/about', '/works', '/contact'];
  return isScrolled.value || whiteHeaderRoutes.includes(route.path);
});

const navPadding = computed(() => {
  const initialPadding = 8; // Corresponds to py-2
  const maxPadding = 16; // Corresponds to py-4
  const scrollThreshold = 100;

  const extraPadding = (maxPadding - initialPadding) * (Math.min(scrollY.value, scrollThreshold) / scrollThreshold);

  return initialPadding + extraPadding;
});

function switchLanguage() {
  locale.value = locale.value === 'ar' ? 'en' : 'ar';
}

watch(locale, (newLocale) => {
  document.documentElement.lang = newLocale;
  document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr';
});

onMounted(() => {
  document.documentElement.lang = locale.value;
  document.documentElement.dir = locale.value === 'ar' ? 'rtl' : 'ltr';

  // Check for saved theme preference
  if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});
</script>

<template>
  <div class="font-cairo overflow-x-hidden bg-white dark:bg-secondary-900">
    <ScrollProgress />
    <nav :style="{ 'padding-top': navPadding + 'px', 'padding-bottom': navPadding + 'px' }"
         :class="[
           'fixed top-0 z-50 transition-all duration-500 w-full',
           isHeaderWhite 
             ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-elegant' 
             : 'bg-transparent'
         ]"
         v-motion
         :initial="{ y: -100, opacity: 0 }"
         :enter="{ y: 0, opacity: 1, transition: { duration: 800, delay: 200 } }">
      <div class="container mx-auto px-4">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse group transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg">
          <div class="relative">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-9 transition-all duration-300 group-hover:rotate-12" alt="MountByte Logo" />
            <div class="absolute inset-0 bg-primary-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
          <span :class="[
            'self-center text-xl sm:text-2xl font-bold whitespace-nowrap transition-all duration-300',
            isHeaderWhite 
              ? 'bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent'
              : 'text-white'
          ]">{{ $t('nav.brand') }}</span>
        </router-link>
        <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button @click="switchLanguage" type="button" :class="[
            'inline-flex items-center font-medium justify-center px-3 sm:px-4 py-2 text-sm rounded-full cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
            isHeaderWhite 
              ? 'text-gray-900 dark:text-white hover:bg-primary-50 dark:hover:bg-gray-700'
              : 'text-white bg-transparent hover:bg-white/10'
          ]">
            <i class="fa-solid fa-globe w-5 h-5 rounded-full me-2 sm:me-3"></i>
            <span class="hidden sm:inline">{{ $t('nav.language') }}</span>
          </button>
          <button data-collapse-toggle="navbar-language" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-primary-500 transition-all duration-300 hover:scale-110" aria-controls="navbar-language" aria-expanded="false">
            <span class="sr-only">{{ $t('nav.openMenu') }}</span>
            <svg class="w-5 h-5 transition-transform duration-300 hover:rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <router-link to="/" :class="[
                'block py-2 px-4 rounded-full md:p-2 transition-all duration-300 hover:scale-105 relative overflow-hidden group',
                isHeaderWhite 
                  ? 'text-gray-900 hover:bg-primary-50 md:hover:bg-transparent md:hover:text-primary-600 dark:text-white md:dark:hover:text-primary-400'
                  : 'text-white dark:text-white hover:bg-white/10 md:hover:bg-transparent md:hover:text-primary-400'
              ]" active-class="md:text-primary-600 md:dark:text-primary-400">
                <span class="relative z-10">{{ $t('nav.home') }}</span>
                <div class="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full"></div>
              </router-link>
            </li>
            <li>
              <router-link to="/about" :class="[
                'block py-2 px-4 rounded-full md:p-2 transition-all duration-300 hover:scale-105 relative overflow-hidden group',
                isHeaderWhite 
                  ? 'text-gray-900 hover:bg-primary-50 md:hover:bg-transparent md:hover:text-primary-600 dark:text-white md:dark:hover:text-primary-400'
                  : 'text-white dark:text-white hover:bg-white/10 md:hover:bg-transparent md:hover:text-primary-400'
              ]" active-class="md:text-primary-600 md:dark:text-primary-400">
                <span class="relative z-10">{{ $t('nav.about') }}</span>
                <div class="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full"></div>
              </router-link>
            </li>
            <li>
              <router-link to="/works" :class="[
                'block py-2 px-4 rounded-full md:p-2 transition-all duration-300 hover:scale-105 relative overflow-hidden group',
                isHeaderWhite 
                  ? 'text-gray-900 hover:bg-primary-50 md:hover:bg-transparent md:hover:text-primary-600 dark:text-white md:dark:hover:text-primary-400'
                  : 'text-white dark:text-white hover:bg-white/10 md:hover:bg-transparent md:hover:text-primary-400'
              ]" active-class="md:text-primary-600 md:dark:text-primary-400">
                <span class="relative z-10">{{ $t('nav.works') }}</span>
                <div class="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full"></div>
              </router-link>
            </li>
            <!-- <li>
              <router-link to="/articles" :class="[
                'block py-2 px-4 rounded-full md:p-2 transition-all duration-300 hover:scale-105 relative overflow-hidden group',
                isScrolled 
                  ? 'text-gray-900 hover:bg-primary-50 md:hover:bg-transparent md:hover:text-primary-600 dark:text-white md:dark:hover:text-primary-400'
                  : 'text-white dark:text-white hover:bg-white/10 md:hover:bg-transparent md:hover:text-primary-400'
              ]" active-class="md:text-primary-600 md:dark:text-primary-400">
                <span class="relative z-10">{{ $t('nav.articles') }}</span>
                <div class="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full"></div>
              </router-link>
            </li> -->
            <li>
              <router-link to="/contact" :class="[
                'block py-2 px-4 rounded-full md:p-2 transition-all duration-300 hover:scale-105 relative overflow-hidden group',
                isHeaderWhite 
                  ? 'text-gray-900 hover:bg-primary-50 md:hover:bg-transparent md:hover:text-primary-600 dark:text-white md:dark:hover:text-primary-400'
                  : 'text-white dark:text-white hover:bg-white/10 md:hover:bg-transparent md:hover:text-primary-400'
              ]" active-class="md:text-primary-600 md:dark:text-primary-400">
                <span class="relative z-10">{{ $t('nav.contact') }}</span>
                <div class="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full"></div>
              </router-link>
            </li>
            <li>
              <router-link to="/Form" :class="[
                'block py-2 px-4 rounded-full md:p-2 transition-all duration-300 hover:scale-105 relative overflow-hidden group',
                isHeaderWhite 
                  ? 'text-gray-900 hover:bg-primary-50 md:hover:bg-transparent md:hover:text-primary-600 dark:text-white md:dark:hover:text-primary-400'
                  : 'text-white dark:text-white hover:bg-white/10 md:hover:bg-transparent md:hover:text-primary-400'
              ]" active-class="md:text-primary-600 md:dark:text-primary-400">
                <span class="relative z-10">{{ $t('nav.form') }}</span>
                <div class="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full"></div>
              </router-link>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </nav>
    <main>
      <router-view />
    </main>
    <Footer />

    <FloatingAction />
  </div>
</template>
