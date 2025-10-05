<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-primary-900 to-accent-800 pt-32 pb-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-2xl mx-auto">
      <div class="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden">
        <div class="p-8 md:p-12">
          <div class="text-center mb-10">
            <h2 class="text-4xl md:text-5xl font-extrabold text-white leading-tight">{{ $t('formView.title') }}</h2>
            <p class="mt-4 text-lg text-white/70">{{ $t('formView.subtitle') }}</p>
          </div>

          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="relative">
              <i class="fas fa-user absolute top-1/2 -translate-y-1/2 left-4 text-white/50"></i>
              <input type="text" id="name" v-model="formData['الاسم']" required :placeholder="$t('formView.fullName')" class="form-input">
            </div>

            <div class="relative">
              <i class="fas fa-phone absolute top-1/2 -translate-y-1/2 left-4 text-white/50"></i>
              <input type="tel" id="phone" v-model="formData['رقم الهاتف']" required :placeholder="$t('formView.phoneNumber')" class="form-input">
            </div>

            <div class="relative">
              <i class="fas fa-globe absolute top-1/2 -translate-y-1/2 left-4 text-white/50"></i>
              <input type="text" id="site-name" v-model="formData['اسم الموقع']" required :placeholder="$t('formView.proposedSiteName')" class="form-input">
            </div>
            
            <div class="relative">
              <i class="fas fa-envelope absolute top-1/2 -translate-y-1/2 left-4 text-white/50"></i>
              <input type="email" id="email" v-model="formData['البريد الالكتروني']" required :placeholder="$t('formView.email')" class="form-input">
            </div>

            <div class="relative">
              <i class="fas fa-pen-alt absolute top-5 left-4 text-white/50"></i>
              <textarea id="notes" v-model="formData['ملاحظات عن الموقع']" rows="5" required :placeholder="$t('formView.notes')" class="form-input min-h-[120px]"></textarea>
            </div>
            
            <button type="submit" :disabled="isSubmitting || !isFormValid" class="w-full group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100">
              <span class="relative z-10 flex items-center justify-center">
                <span class="mr-3">{{ isSubmitting ? $t('formView.submittingButton') : $t('formView.submitButton') }}</span>
                <i class="fas fa-paper-plane transition-transform duration-300 group-hover:translate-x-1"></i>
              </span>
              <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>

            <div v-if="successMessage" class="p-4 bg-green-500/20 text-green-300 border border-green-500/30 rounded-lg text-center font-semibold">
              {{ successMessage }}
            </div>
            <div v-if="errorMessage" class="p-4 bg-red-500/20 text-red-300 border border-red-500/30 rounded-lg text-center font-semibold">
              {{ errorMessage }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzHEvxIKJrppf2q36asTPA0q9LmPJ1_51oaZybROHejjZkSXLsuGPnadZEvvX-AWJlC/exec'; 

const formData = ref({
  'الاسم': '',
  'رقم الهاتف': '',
  'اسم الموقع': '',
  'البريد الالكتروني': '',
  'ملاحظات عن الموقع': '' 
});

const isSubmitting = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

const isFormValid = computed(() => {
  return Object.values(formData.value).every(value => value && String(value).trim() !== '');
});

async function submitForm() {
  if (!isFormValid.value) {
    errorMessage.value = t('formView.validationError');
    return;
  }
  
  isSubmitting.value = true;
  successMessage.value = '';
  errorMessage.value = '';

  const data = new FormData();
  for (const key in formData.value) {
    data.append(key, formData.value[key]);
  }
  
  try {
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      body: data
    });

    const result = await response.json();

    if (result.result === 'success') {
      successMessage.value = t('formView.successMessage');
      Object.keys(formData.value).forEach(key => formData.value[key] = '');
    } else {
      errorMessage.value = t('formView.errorMessage');
    }

  } catch (error) {
    console.error('Network Error:', error);
    errorMessage.value = t('formView.connectionError');
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<style scoped>
.form-input {
  @apply w-full bg-white/5 border border-white/20 text-white rounded-lg px-12 py-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-all duration-300;
}

.form-input:-webkit-autofill,
.form-input:-webkit-autofill:hover, 
.form-input:-webkit-autofill:focus, 
.form-input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #1a202c inset !important; /* Use a dark color */
    -webkit-text-fill-color: #fff !important;
}
</style>
