<script setup>
import HeroBanner from '@/components/HeroBanner.vue';
import HeadlineBanner from '@/components/HeadlineBanner.vue';
import HelpBox from '@/components/HelpBox.vue';
import AboutUs from '@/components/AboutUs.vue';
</script>

<template>
  <main class = "main-content">
    <HeroBanner />
    <HeadlineBanner />
    <HelpBox />
  </main>
    <AboutUs />
  
</template>

<style scoped>
.main-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
