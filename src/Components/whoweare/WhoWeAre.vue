<template>
  <section class="relative bg-gradient-to-b from-white via-gray-50 to-white dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900 py-20 px-6 overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-10 w-32 h-32 bg-primary-100 rounded-full opacity-30 animate-float"></div>
      <div class="absolute bottom-20 right-10 w-24 h-24 bg-accent-100 rounded-full opacity-40 animate-float" style="animation-delay: 2s;"></div>
    </div>
    
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center mb-16"
           v-motion
           :initial="{ y: 50, opacity: 0 }"
           :visibleOnce="{ y: 0, opacity: 1, transition: { duration: 800 } }">
        <span class="inline-block px-4 py-2 text-sm font-medium text-primary-700 bg-primary-100 rounded-full mb-6">
          <i class="fas fa-services mr-2"></i>
          {{ $t('whoWeAre.whatWeOffer') }}
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          <span class="block">{{ $t('services.title') }}</span>
          <span class="block text-2xl md:text-3xl font-normal text-gray-600 dark:text-gray-400 mt-2">{{ $t('whoWeAre.professionalSolutions') }}</span>
        </h2>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <SubscriptionCard
          icon="fas fa-laptop-code"
          :title="$t('services.card1.title')"
          :desc="$t('services.card1.desc')"
          :delay="0"
        />
        <SubscriptionCard
          icon="fas fa-lightbulb"
          :title="$t('services.card2.title')"
          :desc="$t('services.card2.desc')"
          :delay="200"
        />
        <SubscriptionCard
          icon="fas fa-tools"
          :title="$t('services.card3.title')"
          :desc="$t('services.card3.desc')"
          :delay="400"
        />
        <SubscriptionCard
          icon="fas fa-rocket"
          :title="$t('services.card4.title')"
          :desc="$t('services.card4.desc')"
          :delay="600"
        />
      </div>
      
      <!-- Call to action -->

    </div>
  </section>
</template>

<script setup >

import SubscriptionCard from '../SubscriptionCard/SubscriptionCard.vue'

</script>