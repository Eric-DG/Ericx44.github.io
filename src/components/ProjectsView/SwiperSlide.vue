<template>
  <swiper :slides-per-view="4" :space-between="5" @swiper="onSwiper" @slideChange="onSlideChange">
    <swiper-slide
      ><img class="max-w-full mt-5 rounded-lg w-32 h-24" src="../../assets/html5.png" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img class="max-w-full mt-5 rounded-lg w-32 h-24" src="../../assets/css3.png" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img class="max-w-full mt-5 rounded-lg w-32 h-24" src="../../assets/javascript.png" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img class="max-w-full mt-5 rounded-lg w-32 h-24" src="../../assets/ts-logo.png" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img class="max-w-full mt-5 rounded-lg w-32 h-24" src="../../assets/PHP-logo.svg.png" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img class="max-w-full mt-5 rounded-lg w-32 h-24" src="../../assets/mysql.png" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img
        class="max-w-full mt-5 bg-white rounded-3xl w-32 h-24"
        src="../../assets/postgres.png"
        alt=""
    /></swiper-slide>
    <swiper-slide
      ><img class="max-w-full mt-5 rounded-lg w-32 h-24" src="../../assets/mongodb.png" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img class="max-w-full mt-5 rounded-lg w-32 h-24" src="../../assets/vuejs.png" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img class="max-w-full mt-5 rounded-lg w-32 h-24" src="../../assets/nuxt.png" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img class="max-w-full mt-5 rounded-lg w-32 h-24" src="../../assets/tailwindcss.png" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img class="max-w-full mt-5 rounded-lg w-32 h-24" src="../../assets/expressjs.png" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img class="max-w-full mt-5 rounded-lg w-32 h-24" src="../../assets/nodejs.png" alt=""
    /></swiper-slide>
    ...
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange
    }
  }
}
</script>
