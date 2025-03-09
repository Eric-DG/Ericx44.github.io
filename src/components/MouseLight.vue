<script setup>
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('scroll', handleScroll);
});

function handleMouseMove(event) {
  const light = document.getElementById('mouse-light');
  if (light) {
    light.style.left = `${event.clientX + window.scrollX}px`;
    light.style.top = `${event.clientY + window.scrollY}px`;
  }
}

function handleScroll() {
  const light = document.getElementById('mouse-light');
  if (light) {
    light.style.transform = `translate(-50%, -50%)`;
  }
}
</script>

<template>
  <div id="mouse-light"></div>
</template>

<style scoped>
#mouse-light {
  position: absolute; /* Fix the element to the screen */
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(0, 162, 255, 0.6), rgba(0, 162, 255, 0.1));
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease-out;
  z-index: 9999; /* Ensure it's above everything */
}
</style>
