<template>
  <v-app>
    <nuxt-child />
  </v-app>
</template>

<script>
import myheader from "~/layouts/header";
export default {
  components: {
    myheader
  }
};
</script>
