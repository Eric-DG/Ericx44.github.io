<script setup>
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';
import AnimatedBackground from '@/components/AnimatedBackground.vue';
import MouseLight from '@/components/MouseLight.vue';

const certificates = [
  { title: "Salesforce Certified AI Associate", description: "Earned the Salesforce Certified AI Associate credential, demonstrating expertise in AI-driven solutions within the Salesforce ecosystem.", date: "Issued Dec 2024" },
  { title: "Best Capstone Project", description: "Awarded for 'Get Dmit3D: An Augmented Reality App' in the research symposium.", date: "2022" },
  { title: "DOST RA 7687 Scholarship Recipient", description: "Awarded the prestigious DOST RA 7687 Scholarship for academic excellence and innovation.", date: "2019 - 2024" },
  { title: "PH Dreamin' Event Attendee", description: "Engaged in learning Salesforce innovations and technologies at PH Dreamin’ events.", date: "2024" },
  { title: "Vue.js Beginner Certification", description: "Completed Vue.js Beginner Course with certification, covering Vue fundamentals and application building.", date: "2024" },
  { title: "JavaScript Certification", description: "Certified in JavaScript fundamentals, covering ES6, asynchronous programming, and modern JavaScript practices.", date: "2024" },
  { title: "Won Best Poster Presentation", description: "Recognized for delivering the best research presentation at the university symposium.", date: "2022" }
];

onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <div class="w-full px-6 md:px-20 py-16 md:py-20 mx-auto relative transition-all">
    <!-- Animated Background -->
    <AnimatedBackground />
    <MouseLight />

    <!-- Section Title -->
    <div class="text-center text-white dark:text-gray-900 py-12 md:py-20 transition-all">
      <h2 class="text-3xl md:text-4xl font-bold">Certificates & Awards</h2>
      <p class="text-gray-300 dark:text-gray-700 mt-2 md:mt-4 text-sm md:text-base">
        Recognitions and achievements throughout my journey.
      </p>
    </div>

    <!-- Certificates Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-6">
      <div v-for="(certificate, index) in certificates" :key="index" 
           class="bg-gray-800 dark:bg-gray-300 p-4 md:p-5 rounded-lg shadow-lg hover:scale-105 transition transform">
        <h3 class="text-white dark:text-gray-900 text-lg md:text-xl font-bold">{{ certificate.title }}</h3>
        <p class="text-gray-300 dark:text-gray-700 mt-1 md:mt-2 text-sm md:text-base">{{ certificate.description }}</p>
        <p class="text-blue-400 font-semibold mt-2 text-sm md:text-md">{{ certificate.date }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ensure hover effects work properly on all screen sizes */
@media (hover: hover) {
  .hover\:scale-105:hover {
    transform: scale(1.05);
  }
}
</style>
