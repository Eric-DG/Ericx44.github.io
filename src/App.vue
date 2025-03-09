<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <div class="flex-grow">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
/* Ensure Full-Screen Layout */
.flex-grow {
  flex: 1;
}
</style>
