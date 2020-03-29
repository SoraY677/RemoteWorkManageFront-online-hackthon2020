<template>
  <div>
    <myheader />
    <nuxt-child />
  </div>
</template>

<script>
import myheader from "@/layouts/header"
export default {
  components:{
    myheader
  }
}
</script>

<style>
body{
  position: absolute;
  top:0;
  left:0;
  width:100vw;
  margin:0;
}

</style>