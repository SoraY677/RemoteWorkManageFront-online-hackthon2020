<template>
<div class="achive-circle-wrapper">
  <svg class="c-circle__view" viewBox="0 0 63.6619772368 63.6619772368">
    <circle
      class="c-circle__1"
      cx="31.8309886184"
      cy="31.8309886184"
      r="31.8309886184"
    />
  </svg>
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

.achive-circle-wrapper{
  position: relative;
  display: block;
  height: 0;
  font-size:1vw;
  width: 100%;
  padding-bottom: 100%;
}
.c-circle__view {
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  overflow: visible;
}

/* circle {
    fill:rgba(0,0,0,0);
  stroke-width:31.8309886184;
  stroke-dasharray: 0,0,0,100;
  stroke-dashoffset: 25;
  -webkit-animation: pie1 3s infinite ease both;
  animation: pie1 6s infinite ease both;
} */
</style>
