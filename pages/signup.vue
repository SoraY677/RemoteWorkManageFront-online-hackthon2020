<template>
  <v-app>
    <div class="ma-auto">
      <authForm class="text-center" />
      <div class="d-flex justify-center mt-2">
        <v-btn text color="blue" to="/signup">新規登録はこちら</v-btn>
      </div>
    </div>
  </v-app>
</template>

<script>
import authForm from "~/components/authForm";

export default {
  layout: "gateLayout",
  components: {
    authForm
  }
};
</script>

<style>
</style>
