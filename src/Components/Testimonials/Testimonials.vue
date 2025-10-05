<template>
  <section class="relative bg-gradient-to-br from-gray-50 via-white to-primary-50/30 py-20 px-6 overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-0 w-96 h-96 bg-primary-200/20 rounded-full morphing-shape filter blur-3xl"></div>
      <div class="absolute bottom-20 right-0 w-80 h-80 bg-accent-200/20 rounded-full morphing-shape filter blur-3xl" style="animation-delay: 4s;"></div>
      
      <!-- Particle effects -->
      <div class="particles">
        <div class="particle" style="left: 10%; width: 4px; height: 4px; animation-delay: 0s;"></div>
        <div class="particle" style="left: 20%; width: 6px; height: 6px; animation-delay: 2s;"></div>
        <div class="particle" style="left: 30%; width: 3px; height: 3px; animation-delay: 4s;"></div>
        <div class="particle" style="left: 40%; width: 5px; height: 5px; animation-delay: 6s;"></div>
        <div class="particle" style="left: 50%; width: 4px; height: 4px; animation-delay: 8s;"></div>
        <div class="particle" style="left: 60%; width: 6px; height: 6px; animation-delay: 10s;"></div>
        <div class="particle" style="left: 70%; width: 3px; height: 3px; animation-delay: 12s;"></div>
        <div class="particle" style="left: 80%; width: 5px; height: 5px; animation-delay: 14s;"></div>
        <div class="particle" style="left: 90%; width: 4px; height: 4px; animation-delay: 16s;"></div>
      </div>
    </div>
    
    <div class="relative max-w-7xl mx-auto">
      <!-- Section header -->
      <div class="text-center mb-16 scroll-animate" data-animation="fade-in-up">
        <span class="inline-block px-4 py-2 text-sm font-medium text-primary-700 bg-primary-100 rounded-full mb-6">
          <i class="fas fa-quote-left mr-2"></i>
          {{ $t('testimonials.whatClientsSay') }}
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          {{ $t('testimonials.successStories') }}
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {{ $t('testimonials.subtitle') }}
        </p>
      </div>
      
      <!-- Testimonials grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-animate" data-animation="scale-in" data-stagger=".testimonial-card">
        <!-- Testimonial 1 -->
        <div class="testimonial-card glass-card p-8 rounded-2xl hover-lift group">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 group-hover:scale-110 transition-transform duration-300">
              S
            </div>
            <div>
              <h4 class="font-semibold text-gray-800 group-hover:text-primary-700 transition-colors duration-300">{{ $t('testimonials.sarahJohnson') }}</h4>
              <p class="text-sm text-gray-600">{{ $t('testimonials.sarahTitle') }}</p>
            </div>
          </div>
          <div class="flex items-center mb-4">
            <div class="flex text-yellow-400">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>
          <p class="text-gray-700 leading-relaxed italic group-hover:text-gray-800 transition-colors duration-300">
            "{{ $t('testimonials.sarahQuote') }}"
          </p>
          <div class="absolute top-4 right-4 text-primary-200 text-4xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
            <i class="fas fa-quote-right"></i>
          </div>
        </div>
        
        <!-- Testimonial 2 -->
        <div class="testimonial-card glass-card p-8 rounded-2xl hover-lift group">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-gradient-to-r from-accent-400 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 group-hover:scale-110 transition-transform duration-300">
              M
            </div>
            <div>
              <h4 class="font-semibold text-gray-800 group-hover:text-accent-700 transition-colors duration-300">{{ $t('testimonials.mikeChen') }}</h4>
              <p class="text-sm text-gray-600">{{ $t('testimonials.mikeTitle') }}</p>
            </div>
          </div>
          <div class="flex items-center mb-4">
            <div class="flex text-yellow-400">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>
          <p class="text-gray-700 leading-relaxed italic group-hover:text-gray-800 transition-colors duration-300">
            "{{ $t('testimonials.mikeQuote') }}"
          </p>
          <div class="absolute top-4 right-4 text-accent-200 text-4xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
            <i class="fas fa-quote-right"></i>
          </div>
        </div>
        
        <!-- Testimonial 3 -->
        <div class="testimonial-card glass-card p-8 rounded-2xl hover-lift group">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-gradient-to-r from-secondary-400 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 group-hover:scale-110 transition-transform duration-300">
              L
            </div>
            <div>
              <h4 class="font-semibold text-gray-800 group-hover:text-secondary-700 transition-colors duration-300">{{ $t('testimonials.lisaRodriguez') }}</h4>
              <p class="text-sm text-gray-600">{{ $t('testimonials.lisaTitle') }}</p>
            </div>
          </div>
          <div class="flex items-center mb-4">
            <div class="flex text-yellow-400">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>
          <p class="text-gray-700 leading-relaxed italic group-hover:text-gray-800 transition-colors duration-300">
            "{{ $t('testimonials.lisaQuote') }}"
          </p>
          <div class="absolute top-4 right-4 text-secondary-200 text-4xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
            <i class="fas fa-quote-right"></i>
          </div>
        </div>
      </div>
      
      <!-- Trust indicators -->
      <div class="mt-16 text-center scroll-animate" data-animation="fade-in-up" data-delay="600ms">
        <p class="text-sm text-gray-500 mb-8 uppercase tracking-wider font-semibold">{{ $t('testimonials.trustedBy') }}</p>
        <div class="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div class="text-2xl font-bold text-gray-400 hover:text-primary-500 transition-colors duration-300">TechCorp</div>
          <div class="text-2xl font-bold text-gray-400 hover:text-accent-500 transition-colors duration-300">InnovateLab</div>
          <div class="text-2xl font-bold text-gray-400 hover:text-secondary-500 transition-colors duration-300">DigitalFlow</div>
          <div class="text-2xl font-bold text-gray-400 hover:text-primary-500 transition-colors duration-300">NextGen</div>
          <div class="text-2xl font-bold text-gray-400 hover:text-accent-500 transition-colors duration-300">FutureWeb</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useScrollAnimations } from '../../composables/useScrollAnimations.js'

const { observeElements } = useScrollAnimations()

onMounted(() => {
  setTimeout(() => {
    observeElements()
  }, 100)
})
</script>

<style scoped>
.testimonial-card {
  position: relative;
  overflow: hidden;
}

.testimonial-card::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #4CAF50, #2196F3, #9C27B0, #4CAF50);
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.testimonial-card:hover::before {
  opacity: 0.1;
}
</style>
