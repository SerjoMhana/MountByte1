<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold mb-4">{{ article.title }}</h1>
    <p class="text-gray-600 mb-8">{{ article.author }} - {{ article.date }}</p>
    <img :src="article.image" :alt="article.title" class="w-full h-96 object-cover rounded-lg mb-8">
    <div class="prose max-w-none" v-html="article.fullContent"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { articles } from '@/articles.js'

const route = useRoute()
const article = ref({})

onMounted(() => {
  article.value = articles.find(a => a.slug === route.params.slug)
})
</script>
