<script setup>
import DirectionAware from '@/components/ProjectsView/DirectionAware.vue'
import SwiperSlide from '@/components/ProjectsView/SwiperSlide.vue'
</script>
<template>
  <div class="w-[360px] md:w-[1400px] mx-auto">
    <div class="grid grid-cols-2 h-auto md:w-full mx-auto">
      <div class="col-span-2 border-b mt-20 md:mt-24 py-5 md:py-5">
        <div class="text-3xl text-center md:text-left md:text-7xl font-anton text-white">Recent Projects</div>
      </div>
      <div class="col-span-2 relative md:border-b mb-5"><DirectionAware />   <hr class="w-5/6 mx-auto my-10 md:hidden" /></div>
    
      <div class="col-span-2 md:col-span-1 bg-primary py-5 px-3">
        <div class="text-base md:text-3xl text-white font-anton">Best Capstone Project</div>
        <div class="text-xs md:text-base indent-10 text-white text-justify leading-relaxed mt-2">
          During my college journey, I embarked on a transformative project called 'Get Dmit3D.' It
          was more than just an educational application; it was a vision brought to life. Using
          Augmented Reality and the Unity Game Engine, I single-handedly created a 3D showcase of
          the periodic table's elements, inspiring curiosity and learning in a whole new way. 'Get
          Dmit3D' not only won recognition as the best capstone project but also emerged as the
          overall champion in the research symposium's engineering and technology category.
        </div>
        <div class="text-xs md:text-base indent-10 text-white text-justify leading-relaxed mt-2">
          This achievement wasn't just about technology; it was a testament to the power of
          innovation, determination, exceptional time management skills, and the ability to lead
          oneself through challenges. 'Get Dmit3D' stands as a shining example of what can be
          accomplished when a singular vision, technical expertise, and soft skills come together in
          perfect harmony.
        </div>
      </div>
      <div class="ml-0 mt-5 md:mt-0 md:ml-2 col-span-2 md:col-span-1">
        <iframe
          class="mx-auto w-full h-full border-2 border-accent"
          src="https://drive.google.com/file/d/1akNDPO1fFfU5p9ZpVnOJ_WR818W3c0m6/preview"
          
          allow="autoplay"
        ></iframe>
      </div>
      <div class="col-span-2 py-5">
        <div
          class="text-3xl md:text-5xl font-anton border-t border-b py-5 tracking-widest text-center text-white"
        >
          MY TECHNOLOGY STACK
        </div>
      </div>
      <div class="col-span-2 py-5 mb-14"><SwiperSlide /></div>
    </div>
  </div>
</template>
