<template>
  <v-app>
    <div class="ma-auto">
      <authForm class="text-center" />
    </div>
  </v-app>
</template>

<script>
import authForm from "~/components/authForm";

export default {
  layout: "homeLayout",
  components: {
    authForm
  }
};
</script>

<style>
</style>
