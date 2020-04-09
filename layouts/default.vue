<template>
  <main>
    <nuxt-child />
  </main>
</template>

<script>
import myheader from "@/layouts/header";
export default {
  components: {
    myheader,
  },
};
</script>

<style>
body {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  margin: 0;
}
</style>
