<script setup>
import { ref, onMounted } from 'vue';

const isDark = ref(localStorage.getItem('theme') === 'dark');
const isMenuOpen = ref(false); // For mobile menu toggle

function toggleDarkMode() {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle('dark', isDark.value);
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

onMounted(() => {
  if (isDark.value) {
    document.documentElement.classList.add('dark');
  }
});
</script>

<template>
  <nav class="fixed top-2 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[95%] h-[3.5rem] md:h-[4rem] 
    backdrop-blur-md bg-white/10 border border-gray-500 dark:bg-gray-900 dark:border-gray-800 
    rounded-full z-50 flex justify-between items-center px-4 md:px-6 shadow-lg transition-all">
    
    <!-- Logo -->
    <a href="/" class="text-white dark:text-gray-900 font-bold text-lg md:text-xl">
      <img src="../assets/E.png" alt="logo" class="w-10 md:w-14">
    </a>

    <!-- Desktop Navigation -->
    <ul class="hidden md:flex space-x-4 md:space-x-6 text-white dark:text-gray-900 text-sm md:text-md">
      <li><RouterLink to="/" class="hover:text-blue-400 transition">Home</RouterLink></li>
      <li><RouterLink to="/projects" class="hover:text-blue-400 transition">Projects</RouterLink></li>
      <li><RouterLink to="/activities" class="hover:text-blue-400 transition">Activities</RouterLink></li>
      <li><RouterLink to="/certificates" class="hover:text-blue-400 transition">Certificates</RouterLink></li>
    </ul>

    <!-- Mobile Menu Button -->
    <button @click="toggleMenu" class="md:hidden text-white dark:text-gray-900 focus:outline-none">
      <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>

    <!-- Mobile Dropdown Menu -->
    <div v-if="isMenuOpen" class="absolute top-[4rem] left-0 w-full bg-gray-900 dark:bg-gray-100 shadow-lg transition-transform transform animate-slideDown">
      <ul class="flex flex-col text-white dark:text-gray-900 text-md text-center py-4 space-y-3">
        <li><RouterLink to="/" class="hover:text-blue-400 transition" @click="toggleMenu">Home</RouterLink></li>
        <li><RouterLink to="/projects" class="hover:text-blue-400 transition" @click="toggleMenu">Projects</RouterLink></li>
        <li><RouterLink to="/activities" class="hover:text-blue-400 transition" @click="toggleMenu">Activities</RouterLink></li>
        <li><RouterLink to="/certificates" class="hover:text-blue-400 transition" @click="toggleMenu">Certificates</RouterLink></li>
      </ul>
    </div>

    <!-- Dark Mode Toggle -->
    <button @click="toggleDarkMode" class="bg-gray-700 dark:bg-gray-200 dark:text-black text-white 
      p-2 md:p-3 rounded-full hover:bg-gray-600 dark:hover:bg-gray-400 transition">
      {{ isDark ? '🌞' : '🌙' }}
    </button>
  </nav>
</template>

<style scoped>
/* Animation for the mobile dropdown */
@keyframes slideDown {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slideDown {
  animation: slideDown 0.3s ease-in-out;
}
</style>
