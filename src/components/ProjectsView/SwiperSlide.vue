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
  { src: '/images/amazon.png', alt: 'Amazon Web' },
  { src: '/images/salesforce.png', alt: 'Salesforce' },
  { src: '/images/cloudflare.png', alt: 'Cloudflare' },
  { src: '/images/react.png', alt: 'React' },
  { src: '/images/laravel.png', alt: 'Laravel' },
  { src: '/images/angular.png', alt: 'Angular' },
  { src: '/images/python.png', alt: 'Python' },
  { src: '/images/java.png', alt: 'Java' },
  { src: '/images/html5.png', alt: 'HTML5' },
  { src: '/images/css3.png', alt: 'CSS3' },
  { src: '/images/javascript.png', alt: 'JavaScript' },
  { src: '/images/ts-logo.png', alt: 'TypeScript' },
  { src: '/images/PHP-logo.svg.png', alt: 'PHP' },
  { src: '/images/mysql.png', alt: 'MySQL' },
  { src: '/images/postgres.png', alt: 'PostgreSQL' },
  { src: '/images/mongodb.png', alt: 'MongoDB' },
  { src: '/images/vuejs.png', alt: 'Vue.js' },
  { src: '/images/nuxt.png', alt: 'Nuxt.js' },
  { src: '/images/tailwindcss.png', alt: 'Tailwind CSS' },
  { src: '/images/expressjs.png', alt: 'Express.js' },
  { src: '/images/nodejs.png', alt: 'Node.js' },
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
