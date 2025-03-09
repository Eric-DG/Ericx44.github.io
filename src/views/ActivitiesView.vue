<script setup>
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';
import AnimatedBackground from '@/components/AnimatedBackground.vue';
import MouseLight from '@/components/MouseLight.vue';

const activities = [
  {
    title: "Salesforce Developer Bootcamp Attendee",
    description: "Completed intensive training covering Salesforce development fundamentals."
  },
  {
    title: "Speaking Engagements (Universidad de Dagupan)",
    description: "Invited to speak to students about capstone projects and project management strategies."
  },
  {
    title: "PH Dreamin' 2025 Volunteer",
    description: "One of the volunteers for the PH Dreamin’ 2025 event. Developed the registration system with QR code  integration."
  },
  {
    title: "Salesforce PH Dreamin' Event Participant (2024)",
    description: "Attended Salesforce PH Dreamin’ event, engaging with the local Salesforce community."
  },
  {
    title: "What Now? Salesforce Event Attendee",
    description: "Attended the North Luzon Salesforce event, learning the fundamentals of Salesforce."
  },
  {
    title: "Agentforce 2025 Grand Hyatt Event Attendee",
    description: "Participated in Agentforce 2024 at Grand Hyatt, engaging in insightful discussions on Salesforce solutions."
  },
  {
    title: "Won Best Capstone Project & Best Poster",
    description: "Awarded for ‘Get Dmit3D’ - an Android AR app for learning the periodic table."
  },
  {
    title: "Co-Chairman of Programming (Universidad de Dagupan)",
    description: "Helped lead programming-related activities and events at my university."
  },
  {
    title: "DOST RA 7687 Scholarship Recipient",
    description: "Selected for a prestigious scholarship by the Department of Science and Technology."
  }
];

onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <div class="w-full  mx-auto relative">
    <!-- Animated Background -->
    <AnimatedBackground />
    <MouseLight />

    <!-- Section Title -->
    <div class="text-center text-white py-24">
      <h2 class="text-4xl font-bold">Activities & Engagements</h2>
      <p class="text-gray-300 mt-2">Speaking engagements, bootcamps, and volunteer work.</p>
    </div>

    <!-- Activities Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 p-6">
      <div v-for="(activity, index) in activities" :key="index" class="bg-gray-800 p-5 rounded-lg shadow-lg hover:scale-105 transition">
        <h3 class="text-white text-xl font-bold">{{ activity.title }}</h3>
        <p class="text-gray-300 mt-2">{{ activity.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Background Effect */
.w-full {
  position: relative;
  overflow: hidden;
}

/* Hover & Transition */
.bg-gray-800:hover {
  background-color: #1e293b;
  transition: 0.3s ease-in-out;
}
</style>
