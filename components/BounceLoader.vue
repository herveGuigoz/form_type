<template>
  <div class="h-screen w-full flex justify-center items-center">
    <div class="sk-bounce">
    <div class="sk-bounce-dot"></div>
    <div class="sk-bounce-dot"></div>
  </div>
  </div>
</template>
<style scoped>
.sk-bounce {
  width: 60px;
  height: 60px;
  position: relative;
}

.sk-bounce-dot {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #ffffff;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: sk-bounce 2s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955); 
}

.sk-bounce-dot:nth-child(2) { animation-delay: -1.0s; }

@keyframes sk-bounce {
  0%, 100% {
    transform: scale(0);
  } 45%, 55% {
    transform: scale(1); 
  } 
}
</style>