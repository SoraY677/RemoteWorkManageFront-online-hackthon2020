<template>
  <v-app>
    <myheader />
    <nuxt-child />
  </v-app>
</template>

<script>
import myheader from "~/layouts/memberHeader";
export default {
  components: {
    myheader
  }
};
</script>