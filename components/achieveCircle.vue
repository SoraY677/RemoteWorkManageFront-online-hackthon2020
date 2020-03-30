<template>
  <div class="achive-circle-wrapper">
    <svg viewBox="0 0 64 64">
      <circle class="circle-inner" cx="32" cy="32" r="32" />
      <circle class="solid-circle" cx="32" cy="32" r="16" />
      <circle class="circle-title" cx="32" cy="32" r="24" />
    </svg>
    <span class="achieve-percent">d%</span>
  </div>
</template>

<script>
export default {
  props: {
    percentage: 0
  }
};
</script>

<style>
.achive-circle-wrapper {
  position: relative;
  display: block;
  height: 0;
  font-size: 1vw;
  width: 100%;
  padding-bottom: 100%;
}
.achive-circle-wrapper > svg {
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  overflow: visible;
  transform: rotate(-90deg);
}

.circle-title {
  fill: white;
}
.circle-inner {
  fill: #eee;
}
.solid-circle {
  fill: transparent;
  stroke: #f44336;
  stroke-width: 32;
  animation: circle 5s ease-out;
}

@keyframes circle {
  0% {
    stroke-dasharray: 0 201;
  }
  100% {
    stroke-dasharray: 201 201;
  }
}

.achieve-percent {
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
