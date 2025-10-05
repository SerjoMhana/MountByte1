<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { Motion } from '@motionone/vue';
import { useIntersectionObserver } from '@vueuse/core';

// 🚨🚨🚨 الخطوة الأهم: ضع هنا رابط Google Apps Script Web App URL الخاص بك 🚨🚨🚨
// يجب أن يكون التطبيق منشورًا بـ "الوصول: أي شخص"
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyxiC66bXfxzOkwiKUpzZtWK7O-C7HZvrDZ_PkOxyG1z4MqtLqGccGomx8vJLoY-Xy8uw/exec';

const { t, locale } = useI18n();

const contactInfoSection = ref(null);
const contactInfoSectionIsVisible = ref(false);

const contactFormSection = ref(null);
const contactFormSectionIsVisible = ref(false);

const isSubmitting = ref(false);
const submitError = ref(''); // لعرض رسالة الخطأ

// حالة النموذج: المفاتيح (name, email, message) يجب أن تطابق رؤوس الأعمدة في Google Sheet
const form = ref({
  name: '',
  email: '',
  message: '',
});

const submitted = ref(false);

// --- Intersection Observer (لتحسين أداء الرسوم المتحركة) ---
onMounted(() => {
  useIntersectionObserver(
    contactInfoSection,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        contactInfoSectionIsVisible.value = true;
      }
    },
    { threshold: 0.3 }
  );

  useIntersectionObserver(
    contactFormSection,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        contactFormSectionIsVisible.value = true;
      }
    },
    { threshold: 0.3 }
  );
});

// --- دالة الإرسال لـ Apps Script ---
async function submitForm() {
  isSubmitting.value = true;
  submitError.value = ''; // مسح الأخطاء السابقة
  
  // 1. تجهيز البيانات كـ FormData (الضرورية لـ Apps Script)
  const formDataToSend = new FormData();
  formDataToSend.append('name', form.value.name);
  formDataToSend.append('email', form.value.email);
  formDataToSend.append('message', form.value.message);

  try {
    // 2. إرسال طلب POST
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      body: formDataToSend
    });

    // إذا فشل الاتصال تمامًا (مثل رابط خطأ 404 أو مشكلة CORS) سيتم الإمساك به في catch
    if (!response.ok) {
        // إذا كان هناك رمز حالة خطأ HTTP (مثل 500)
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    if (result.result === 'success') {
      submitted.value = true; // عرض رسالة النجاح
      
      // مسح النموذج بعد 3 ثوانٍ وعرضه مجددًا
      setTimeout(() => {
        submitted.value = false;
        form.value = { name: '', email: '', message: '' };
      }, 3000);

    } else {
      // التعامل مع أخطاء Apps Script التي تأتي في جسم الاستجابة
      submitError.value = t('contact.form.error_script') + ': ' + (result.error || t('contact.form.error_unknown'));
      submitted.value = false;
    }

  } catch (error) {
    // التعامل مع أخطاء الشبكة أو الأخطاء التي أطلقناها أعلاه
    console.error('Submission Error:', error);
    submitError.value = t('contact.form.error_network') + ' (' + error.message + ')';
    submitted.value = false;
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
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
            {{ t('contact.hero.title') }}
          </h1>
        </Motion>
        <Motion
          :initial="{ opacity: 0, y: 50 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: 0.4, duration: 0.8 }"
        >
          <p class="text-lg md:text-xl max-w-3xl mx-auto">
            {{ t('contact.hero.subtitle') }}
          </p>
        </Motion>
      </div>
    </section>
<section class="py-16 md:py-24">
      <div class="container mx-auto px-6">
        <div ref="contactInfoSection" class="bg-white dark:bg-gray-700 py-12 px-6 sm:px-12 md:px-20 lg:px-32 rounded-lg shadow-xl mb-12">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <Motion :initial="{ opacity: 0, y: 20 }" :animate="contactInfoSectionIsVisible ? { opacity: 1, y: 0 } : {}" :transition="{ delay: 0.2, duration: 0.6 }">
              <div>
                <div class="flex justify-center mb-4">
                  <i class="fas fa-map-marker-alt text-green-500 text-4xl"></i>
                </div>
                <h3 class="font-semibold text-lg mb-1 text-gray-800 dark:text-white">{{ t('contact.info.address.title') }}</h3>
                <p class="text-gray-600 dark:text-gray-300">{{ t('contact.info.address.value') }}</p>
              </div>
            </Motion>

            <Motion :initial="{ opacity: 0, y: 20 }" :animate="contactInfoSectionIsVisible ? { opacity: 1, y: 0 } : {}" :transition="{ delay: 0.4, duration: 0.6 }">
              <div class="border-l border-r border-gray-200 dark:border-gray-600 px-4">
                <div class="flex justify-center mb-4">
                  <i class="fas fa-phone-alt text-green-500 text-4xl"></i>
                </div>
                <h3 class="font-semibold text-lg mb-1 text-gray-800 dark:text-white">{{ t('contact.info.phone.title') }}</h3>
                <p class="text-green-500 dark:text-green-400 hover:underline cursor-pointer">{{ t('contact.info.phone.value') }}</p>
              </div>
            </Motion>

            <Motion :initial="{ opacity: 0, y: 20 }" :animate="contactInfoSectionIsVisible ? { opacity: 1, y: 0 } : {}" :transition="{ delay: 0.6, duration: 0.6 }">
              <div>
                <div class="flex justify-center mb-4">
                  <i class="fas fa-envelope text-green-500 text-4xl"></i>
                </div>
                <h3 class="font-semibold text-lg mb-1 text-gray-800 dark:text-white">{{ t('contact.info.email.title') }}</h3>
                <p class="text-gray-600 dark:text-gray-300">{{ t('contact.info.email.value') }}</p>
              </div>
            </Motion>
          </div>
        </div>
<div ref="contactFormSection" class="max-w-8xl mx-auto">
            <Motion
                :initial="{ opacity: 0, y: 50 }"
                :animate="contactFormSectionIsVisible ? { opacity: 1, y: 0 } : {}"
                :transition="{ delay: 0.2, duration: 0.8 }"
            >
                <div class="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-xl">
                <h2 class="text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center">{{ t('contact.form.title') }}</h2>
                
                <p v-if="submitError" class="text-red-500 text-center mb-4 font-semibold">{{ submitError }}</p>

                <form @submit.prevent="submitForm" v-if="!submitted">
                    <div class="mb-4">
                    <label for="name" class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{{ t('contact.form.name') }}</label>
                    <input type="text" id="name" v-model="form.name" class="w-full px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-600 border-transparent focus:border-green-500 focus:ring-green-500" required>
                    </div>
                    
                    <div class="mb-4">
                    <label for="email" class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{{ t('contact.form.email') }}</label>
                    <input type="email" id="email" v-model="form.email" class="w-full px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-600 border-transparent focus:border-green-500 focus:ring-green-500" required>
                    </div>
                    
                    <div class="mb-4">
                    <label for="message" class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">{{ t('contact.form.message') }}</label>
                    <textarea id="message" v-model="form.message" rows="5" class="w-full px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-600 border-transparent focus:border-green-500 focus:ring-green-500" required></textarea>
                    </div>
                    
                    <button 
                        type="submit" 
                        class="w-full bg-green-500 text-white py-3 rounded-md font-semibold hover:bg-green-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        :disabled="isSubmitting"
                    >
                        {{ isSubmitting ? t('contact.form.sending') : t('contact.form.submit') }}
                    </button>
                </form>
                
                <div v-else class="text-center py-10">
                    <i class="fas fa-check-circle text-green-500 text-5xl mb-4"></i>
                    <p class="text-lg font-semibold text-gray-800 dark:text-white">{{ t('contact.form.success') }}</p>
                </div>
                
                </div>
            </Motion>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* إضافة تنسيق النقاط في الخلفية */
.bg-pattern-dots-green {
  background-image: radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px);
  background-size: 20px 20px;
}
/* التأكد من أن الأيقونات والتركيز تستخدم اللون الأخضر */
.text-primary {
    color: #10b981; /* Default Tailwind Green (adjust as needed) */
}
.focus\\:border-primary {
    border-color: #10b981;
}
.focus\\:ring-primary {
    --tw-ring-color: #10b981;
}
</style>