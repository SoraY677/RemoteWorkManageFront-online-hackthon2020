<template>
  <v-card class="pa-10" max-width="480px">
    <h1 class="text-center">Log In</h1>
    <v-text-field v-model="name" label="Name"></v-text-field>
    <v-text-field v-model="pass" label="Password"></v-text-field>
    <v-btn color="red" @click="authentication()">Log in</v-btn>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      pass: ""
    };
  },
  methods: {
    async authentication() {
      await this.$axios
        .$get("https://calm-coast-93883.herokuapp.com/user/auth", {
          params: {
            name: this.name,
            password: this.pass
          }
        })
        .then(async res => {
          await this.$store.commit("setAuth", {
            name: this.name,
            id: res.id,
            auth: res.status
          });
          window.location.href = "./Member";
        });
    }
  }
};
</script>

<style>
</style>