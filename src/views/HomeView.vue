<template>
    <Hero />

    <whoweare />

    <WhyUs /> 

    <StatsCounter />

    <!-- <BlogSection /> -->

    <!-- <Testimonials /> -->

    <CallToAction />
    
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import Hero from '../Components/Hero/Hero.vue'
import whoweare from '../Components/whoweare/WhoWeAre.vue'
const WhyUs = defineAsyncComponent(() => import('../Components/whyusSection/whyus.vue'))
import StatsCounter from '../Components/StatsCounter/StatsCounter.vue'
import BlogSection from '../Components/blogsection/BlogSection.vue'
import Testimonials from '../Components/Testimonials/Testimonials.vue'
import CallToAction from '../Components/CallToAction/CallToAction.vue'
</script>

<style>


</style>
