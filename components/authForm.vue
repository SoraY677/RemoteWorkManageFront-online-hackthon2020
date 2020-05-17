<template>
  <v-card class="pa-10" max-width="480px" elevation="0" outlined>
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
    authentication() {
      this.$axios
        .$get("https://calm-coast-93883.herokuapp.com/user/auth", {
          params: {
            name: this.name,
            password: this.pass
          }
        })
        .then(res => {
          this.$store.commit("storeAuth", {
            name: this.name,
            id: res.id,
            state: res.status
          });
        });
    }
  }
};
</script>

<style>
</style>