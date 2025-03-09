<template>
  <div class="animated-bg">
    <div v-for="n in 10" :key="n" class="bubble"></div>
  </div>
</template>

<style scoped>
.animated-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(to bottom, #0f0f0f, #222);
  z-index: -1;
}

.bubble {
  position: absolute;
  bottom: -100px;
  width: 20px;
  height: 20px;
  background-color: rgba(0, 162, 255, 0.7);
  border-radius: 50%;
  animation: float 10s infinite ease-in-out;
  opacity: 0.5;
}

@keyframes float {
  0% {
    transform: translateY(100vh) scale(0.5);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) scale(1);
    opacity: 0;
  }
}

.bubble:nth-child(1) {
  left: 10%;
  animation-duration: 12s;
}
.bubble:nth-child(2) {
  left: 30%;
  animation-duration: 15s;
}
.bubble:nth-child(3) {
  left: 50%;
  animation-duration: 14s;
}
.bubble:nth-child(4) {
  left: 70%;
  animation-duration: 13s;
}
.bubble:nth-child(5) {
  left: 90%;
  animation-duration: 16s;
}
</style>
