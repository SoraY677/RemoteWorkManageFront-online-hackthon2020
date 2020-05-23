<template>
  <v-app>
    <div class="ma-auto py-10">
      <authForm class="text-center" />
      <div class="d-flex justify-center my-2">
        <v-btn to="/signup" text color="blue">新規登録はこちら</v-btn>
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
