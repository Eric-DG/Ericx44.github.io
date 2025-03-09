<template>
  <swiper
    :slides-per-view="getSlidesPerView"
    :space-between="20"
    :loop="true"
    :autoplay="{
      delay: 2000,
      disableOnInteraction: false,
    }"
    :breakpoints="{
      320: { slidesPerView: 2, spaceBetween: 10 },
      640: { slidesPerView: 3, spaceBetween: 15 },
      1024: { slidesPerView: 4, spaceBetween: 20 },
      1440: { slidesPerView: 5, spaceBetween: 25 },
    }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(tech, index) in techStack" :key="index">
      <div class="tech-container">
        <img class="tech-logo" :src="tech.src" :alt="tech.alt" />
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/autoplay';

// ✅ Import images explicitly
import amazon from '@/assets/amazon.png';
import salesforce from '@/assets/salesforce.png';
import cloudflare from '@/assets/cloudflare.png';
import react from '@/assets/react.png';
import laravel from '@/assets/laravel.png';
import angular from '@/assets/angular.png';
import python from '@/assets/python.png';
import java from '@/assets/java.png';
import html5 from '@/assets/html5.png';
import css3 from '@/assets/css3.png';
import javascript from '@/assets/javascript.png';
import tsLogo from '@/assets/ts-logo.png';
import phpLogo from '@/assets/PHP-logo.svg.png';
import mysql from '@/assets/mysql.png';
import postgres from '@/assets/postgres.png';
import mongodb from '@/assets/mongodb.png';
import vuejs from '@/assets/vuejs.png';
import nuxt from '@/assets/nuxt.png';
import tailwindcss from '@/assets/tailwindcss.png';
import expressjs from '@/assets/expressjs.png';
import nodejs from '@/assets/nodejs.png';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const techStack = [
      { src: amazon, alt: 'Amazon Web' },
      { src: salesforce, alt: 'Salesforce' },
      { src: cloudflare, alt: 'Cloudflare' },
      { src: react, alt: 'React' },
      { src: laravel, alt: 'Laravel' },
      { src: angular, alt: 'Angular' },
      { src: python, alt: 'Python' },
      { src: java, alt: 'Java' },
      { src: html5, alt: 'HTML5' },
      { src: css3, alt: 'CSS3' },
      { src: javascript, alt: 'JavaScript' },
      { src: tsLogo, alt: 'TypeScript' },
      { src: phpLogo, alt: 'PHP' },
      { src: mysql, alt: 'MySQL' },
      { src: postgres, alt: 'PostgreSQL' },
      { src: mongodb, alt: 'MongoDB' },
      { src: vuejs, alt: 'Vue.js' },
      { src: nuxt, alt: 'Nuxt.js' },
      { src: tailwindcss, alt: 'Tailwind CSS' },
      { src: expressjs, alt: 'Express.js' },
      { src: nodejs, alt: 'Node.js' },
    ];

    const onSwiper = (swiper) => console.log('Swiper initialized:', swiper);
    const onSlideChange = () => console.log('Slide changed');

    return {
      techStack,
      onSwiper,
      onSlideChange,
    };
  },
};
</script>

<style scoped>
/* Ensure Swiper container is centered and responsive */
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
.tech-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px; /* Set uniform width */
  height: 120px; /* Set uniform height */
}

.tech-logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* Ensures images fit within the container without stretching */
}
</style>
