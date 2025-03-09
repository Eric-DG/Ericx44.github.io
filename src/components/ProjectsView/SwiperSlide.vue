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
        <img
          class="tech-logo"
          :src="tech.src"
          :alt="tech.alt"
        />
      </div>
    </swiper-slide>
  </swiper>
</template>


<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/autoplay';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const techStack = [
      { src: '../../assets/akada-ss.png', alt: 'Amazon Web' },
      { src: './src/assets/salesforce.png', alt: 'Salesforce' },
      { src: './src/assets/cloudflare.png', alt: 'Cloudflare' },
      { src: './src/assets/react.png', alt: 'React' },
      { src: './src/assets/laravel.png', alt: 'Laravel' },
      { src: './src/assets/angular.png', alt: 'Angular' },
      { src: './src/assets/python.png', alt: 'Python' },
      { src: './src/assets/java.png', alt: 'Java' },
      { src: './src/assets/html5.png', alt: 'HTML5' },
      { src: './src/assets/css3.png', alt: 'CSS3' },
      { src: './src/assets/javascript.png', alt: 'JavaScript' },
      { src: './src/assets/ts-logo.png', alt: 'TypeScript' },
      { src: './src/assets/PHP-logo.svg.png', alt: 'PHP' },
      { src: './src/assets/mysql.png', alt: 'MySQL' },
      { src: './src/assets/postgres.png', alt: 'PostgreSQL' },
      { src: './src/assets/mongodb.png', alt: 'MongoDB' },
      { src: './src/assets/vuejs.png', alt: 'Vue.js' },
      { src: './src/assets/nuxt.png', alt: 'Nuxt.js' },
      { src: './src/assets/tailwindcss.png', alt: 'Tailwind CSS' },
      { src: './src/assets/expressjs.png', alt: 'Express.js' },
      { src: './src/assets/nodejs.png', alt: 'Node.js' },

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
