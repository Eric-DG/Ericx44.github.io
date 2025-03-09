<script setup>
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';
import SwiperSlide from '@/components/ProjectsView/SwiperSlide.vue';
import AnimatedBackground from '@/components/AnimatedBackground.vue';
import MouseLight from '@/components/MouseLight.vue';

onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <!-- Full Page Wrapper (No Scroll) -->
  <div class="h-screen w-full overflow-hidden flex flex-col">
    <!-- Hero Section (50% Height) -->
     <AnimatedBackground />
    <div class="relative h-1/2 w-full flex items-center justify-center px-8">
      <!-- Animated Background & Mouse Effects -->
      
      <MouseLight />

      <!-- Hero Content -->
      <div class="absolute inset-0 flex flex-col md:flex-row items-center justify-between text-left px-10 z-10 w-full max-w-6xl mx-auto">
        <!-- Text Section -->
        <div class="w-full mt-20 md:w-1/2 text-center md:text-left">
          <h1 class="text-white dark:text-gray-900 font-bold text-4xl md:text-5xl leading-tight transition-all">
            Hello! I am <br />
            Eric Brian Mejia De Guzman
          </h1>
          <p class="text-gray-300 mb-5 dark:text-gray-700 text-md md:text-lg mt-2 transition-all">
            Full-Stack Developer | Software Engineer | Aspiring Salesforce Professional
          </p>
          <a
            href="mailto:eric.deguzman0012@gmail.com"
            class="mt-12 mb-12 bg-blue-600 dark:bg-blue-400 px-5 py-2 text-md font-bold text-white dark:text-gray-900 rounded-lg hover:bg-opacity-80 transition"
          >
            Contact Me
          </a>
        </div>

         <!-- Profile Image Section with Un-Photo Hover Effect -->
        <div class="hidden md:flex md:w-1/3 justify-center">
          <div class="un-photo" style="--row-total: 5">
            <img 
              src="@/assets/my-pic.png" 
              alt="Eric Brian Mejia De Guzman"
              class="un-photo-img hover-zoom w-48 md:w-56 h-auto rounded-lg shadow-lg"
            />
            <div class="un-photo__popup">
              <img src="@/assets/my-pic.png" alt="pic" class="hover-zoom"/>
              <div class="un-photo__row" style="--row-index: 0; --random: 0.23">
                <div class="un-photo__row-inner">
                  <div class="text-xs p-1 md:text-lg font-bold text-white md:p-2 bg-[#181a1b] w-3/4">
                    Web Developer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- My Technology Stack Section (50% Height) -->
    <div class="h-1/2 w-[90%] mx-auto flex flex-col justify-center items-center border-white border-t-2  dark:bg-gray-100 transition-all px-8">
      <div class="text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-white dark:text-gray-900">My Technology Stack</h2>
        <p class="text-gray-400 dark:text-gray-700 mt-1 text-sm md:text-base">Technologies I work with</p>
      </div>

      <!-- SwiperSlide Adjusted for Visibility -->
      <div class="mt-4 max-w-4xl w-full">
        <SwiperSlide />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Prevent Horizontal Scrolling */
.overflow-hidden {
  overflow-x: hidden;
}

.h-screen {
  height: 100vh;
}
/* Hover Zoom Effect */
.hover-zoom {
  transition: transform 0.3s ease-in-out;
}

.hover-zoom:hover {
  margin-top: 70%;
  transform: scale(3.0);
}

/* Un-Photo Effect */
.un-photo {
  position: relative;
  max-width: 100%;
  cursor: pointer;
}

.un-photo-img {
  transition: opacity 0.3s linear, transform 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.un-photo:hover .un-photo-img {
  opacity: 1;
  transform: scale(1.1);
}

.un-photo__popup {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 80%;
  max-height: 100%;
  transform: translate(-50%, -50%);
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.4s linear;
}

.un-photo:hover .un-photo__popup {
  visibility: visible;
  opacity: 1;
}

.un-photo__row {
  position: absolute;
  width: 100%;
  left: 0;
  top: calc(var(--row-size) * var(--row-index));
  height: var(--row-size);
  background: inherit;
  overflow: hidden;
}

.un-photo__row-inner {
  position: absolute;
  width: 100%;
  height: calc(100% * var(--row-total));
  background: inherit;
  transform: translateY(calc(-1 * (100% / var(--row-total)) * var(--row-index)));
}

@media screen and (max-width: 768px) {
  .flex-col-reverse {
    flex-direction: column-reverse;
  }
}
</style>
