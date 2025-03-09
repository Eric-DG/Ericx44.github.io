<script setup>
import { onMounted, ref } from 'vue';
import { initFlowbite } from 'flowbite';
import AnimatedBackground from '@/components/AnimatedBackground.vue';
import MouseLight from '@/components/MouseLight.vue';
import DirectionAware from '@/components/ProjectsView/DirectionAware.vue';
import phdreamin from '@/assets/phdreamin.jpeg';
import codeCascadia from '@/assets/code-cascadia.jpeg';
import buudl from '@/assets/buudl.png';
import shofinet from '@/assets/shofinet.jpeg';
import getdmit3d from '@/assets/getdmit3d.jpg';



// ✅ Fixed Image Paths
const projects = ref([
  {
    title: "PH Dreamin' 2025 Registration System",
    description: "Developed a registration system for the PH Dreamin' 2025 Salesforce event.",
    date: "2025",
    position: "left",
    image: phdreamin,
  },
  {
    title: "Code Cascadia Game App",
    description: "Developed full-stack solutions integrating VueJs, Render, Docker, and Laravel.",
    date: "2025",
    position: "right",
    image: codeCascadia,
  },
  {
    title: "Buudl Web and App",
    description: "Lead Developer integrating Chakra UI, NextJS, and AWS. Role: Software Engineer, Team Lead.",
    date: "2024",
    position: "left",
    image: buudl,
  },
  {
    title: "Shofinet",
    description: "Designed a scalable e-commerce platform with seamless product management.",
    date: "2024",
    position: "right",
    image: shofinet,
  },
  {
    title: "Get Dmit3D (Best Capstone Project)",
    description: "Created an AR-based Android app for learning the periodic table.",
    date: "2022",
    position: "left",
    image: getdmit3d,
  }
]);

// ✅ Animation when scrolling
onMounted(() => {
  initFlowbite();
  const elements = document.querySelectorAll('.timeline-item');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.4 });

  elements.forEach(el => observer.observe(el));
});
</script>

<template>
  <div class="w-full mx-auto relative overflow-hidden">
    <!-- Animated Background -->
    <AnimatedBackground />
    <MouseLight />

    <h2 class="text-4xl mt-24 md:text-5xl font-anton border-t border-b py-5 tracking-widest text-center text-white">
      MY PROJECT TIMELINE
    </h2>

    <div class="timeline relative mt-20">
      <!-- Timeline Line -->
      <div class="timeline-line absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-blue-500"></div>

      <!-- Timeline Items -->
      <div v-for="(project, index) in projects" :key="index"
        class="timeline-item opacity-0 transition-all duration-1000 ease-in-out flex items-center"
        :class="project.position === 'left' ? 'left' : 'right'">

        <!-- Image Section -->
        <div v-if="project.image" class="timeline-image">
          <img :src="project.image" :alt="project.title"
            class="rounded-lg shadow-lg w-40 md:w-56 transition-all duration-500 hover:scale-105">
        </div>

        <!-- Content Section -->
        <div class="content bg-gray-800 text-white p-5 rounded-lg shadow-lg w-[80%] md:w-[50%] ml-4 md:ml-8">
          <h3 class="text-xl md:text-2xl font-bold">{{ project.title }}</h3>
          <p class="text-sm md:text-base mt-2">{{ project.description }}</p>
          <span class="date absolute top-0 -mt-5 text-blue-400 font-bold text-lg">{{ project.date }}</span>
        </div>
      </div>
    </div>

    <!-- Other Projects -->
    <div class="mt-24">
      <h2 class="text-4xl md:text-5xl font-anton border-t border-b py-5 tracking-widest text-center text-white">
        OTHER PROJECTS
      </h2>
      <div class="flex flex-row gap-10 mt-10 px-5">
        <DirectionAware />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Timeline Layout */
.timeline {
  position: relative;
  padding: 80px 0;
}

.timeline-item {
  position: relative;
  width: 100%;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  opacity: 0;
  transform: translateY(50px);
}

.timeline-item.right {
  flex-direction: row-reverse;
}

/* Animation - Pop Up Effect */
.timeline-item.visible {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

/* Timeline Line */
.timeline-line {
  position: absolute;
  top: 0;
  left: 50%;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, #1e40af, #2563eb);
}

/* Date Position */
.date {
  position: absolute;
  font-size: 1.2rem;
  font-weight: bold;
  color: #3b82f6;
  top: -10px;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  .timeline-item {
    flex-direction: column !important;
    align-items: center;
    text-align: center;
  }

  .timeline-image {
    margin-bottom: 15px;
  }

  .timeline-line {
    left: 5%;
  }
}
</style>
