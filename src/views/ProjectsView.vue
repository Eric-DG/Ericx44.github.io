<script setup>
import DirectionAware from '@/components/ProjectsView/DirectionAware.vue'
import SwiperSlide from '@/components/ProjectsView/SwiperSlide.vue'
</script>
<template>
  <div class="h-auto w-full mx-auto">
    <div class="grid grid-cols-2 w-[1400px] mx-auto">
              <div class="col-span-2 border-b mt-24 py-5"><div class="text-7xl font-anton text-white">Recent Projects</div></div>
      <div class="col-span-2  py-5"><DirectionAware /></div>
<div class=" bg-primary py-5 px-3">
      <div class="text-3xl text-white font-anton ">Best Capstone Project</div>
    <div class="text-md indent-10 text-white text-justify leading-relaxed mt-2">During my college journey, I embarked on a transformative project called 'Get Dmit3D.' It was more than just an educational application; it was a vision brought to life. Using Augmented Reality and the Unity Game Engine, I single-handedly created a 3D showcase of the periodic table's elements, inspiring curiosity and learning in a whole new way. 'Get Dmit3D' not only won recognition as the best capstone project but also emerged as the overall champion in the research symposium's engineering and technology category.
    </div><div class="text-md indent-10 text-white text-justify leading-relaxed mt-2">
This achievement wasn't just about technology; it was a testament to the power of innovation, determination, exceptional time management skills, and the ability to lead oneself through challenges. 'Get Dmit3D' stands as a shining example of what can be accomplished when a singular vision, technical expertise, and soft skills come together in perfect harmony.</div>
</div>
      <div class=" py-5">
      <iframe class="mx-auto border-2 border-accent"
        src="https://drive.google.com/file/d/1akNDPO1fFfU5p9ZpVnOJ_WR818W3c0m6/preview"
        width="540"
        height="280"
        allow="autoplay"
      ></iframe>
      </div>
       <div class="col-span-2  py-5"><div class="text-5xl font-anton border-t border-b py-5 tracking-widest text-center text-white">MY TECHNOLOGY STACK</div></div>
       <div class="col-span-2  py-5 mb-14"><SwiperSlide/></div>
    </div>
   
  </div>
</template>
