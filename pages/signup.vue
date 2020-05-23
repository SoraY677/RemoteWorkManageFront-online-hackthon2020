<template>
  <v-app>
    <div>
      <registForm />
      <div class="ma-auto">
        <div class="d-flex justify-center my-4">
          <v-btn text color="blue" to="/">ログインはこちら</v-btn>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import registForm from "~/components/registForm";

export default {
  layout: "gateLayout",
  components: {
    registForm
  }
};
</script>

<style>
</style>
