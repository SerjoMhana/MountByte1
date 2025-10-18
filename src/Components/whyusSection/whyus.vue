<template>
  <section class="relative bg-gradient-to-br from-gray-50 via-white to-primary-50 text-gray-800 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900 dark:text-white py-20 px-6 overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0">
      <div class="absolute top-10 right-20 w-40 h-40 bg-primary-200/30 rounded-full animate-float filter blur-2xl"></div>
      <div class="absolute bottom-10 left-20 w-32 h-32 bg-accent-200/30 rounded-full animate-float filter blur-2xl" style="animation-delay: 3s;"></div>
    </div>
    
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center mb-16"
           v-motion
           :initial="{ y: 50, opacity: 0 }"
           :visibleOnce="{ y: 0, opacity: 1, transition: { duration: 800 } }">
        <span class="inline-block px-4 py-2 text-sm font-medium text-primary-700 bg-primary-100 rounded-full mb-6">
          <i class="fas fa-award mr-2"></i>
          {{ $t('whyus.title') }}
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          {{ $t('whyus.title') }}
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {{ $t('whyus.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <WhyUsCard 
          :title="$t('whyus.card1.title')" 
          :delay="0" 
          :imageUrl="image1"
        />
        <WhyUsCard 
          :title="$t('whyus.card2.title')" 
          :delay="200" 
          :imageUrl="image2"
        />
        <WhyUsCard 
          :title="$t('whyus.card3.title')" 
          :delay="400" 
          :imageUrl="image3"
        />
      </div>
      
    </div>
  </section>
</template>

<script setup>
import WhyUsCard from '../WhyUsCard/WhyUsCard.vue';
import image1 from '@/assets/tirza-van-dijk-o1SKqmgSDbg-unsplash.jpg'
import image2 from '@/assets/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg'
import image3 from '@/assets/john-FlPc9_VocJ4-unsplash.jpg'
</script>

<style scoped>
/* يمكنك إضافة أنماط خاصة بهذا القسم هنا إذا لم يتم تغطيتها بواسطة Tailwind */
/* مثال بسيط للأنيميشن (يتطلب تهيئة في tailwind.config.cjs) */

</style>