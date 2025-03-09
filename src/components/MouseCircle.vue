<script setup>
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove);
});

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove);
});

function handleMouseMove(event) {
  const circle = document.getElementById('mouse-circle');
  if (circle) {
    circle.style.left = `${event.clientX}px`;
    circle.style.top = `${event.clientY}px`;
  }
}
</script>

<template>
  <div id="mouse-circle"></div>
</template>

<style scoped>
#mouse-circle {
  position: absolute;
  width: 50px;
  height: 50px;
  border: 2px solid rgba(0, 162, 255, 0.7);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform 0.05s ease-out;
  z-index: 9999;
}
</style>
