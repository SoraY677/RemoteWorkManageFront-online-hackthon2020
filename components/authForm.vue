<template>
  <v-card class="pa-10" max-width="480px">
    <h1 class="text-center">Log In</h1>
    <v-switch
      v-model="adminFlag"
      class="mx-2"
      label="管理者ログイン"
    ></v-switch>
    <v-text-field v-model="name" label="Name"></v-text-field>
    <v-text-field
      v-model="pass"
      label="Password"
      type="password"
    ></v-text-field>
    <v-btn color="red" @click="authentication()">Log in</v-btn>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      pass: "",
      adminFlag: false
    };
  },
  methods: {
    async authentication() {
      const endpoint = this.adminFlag
        ? "https://calm-coast-93883.herokuapp.com/admin/auth"
        : "https://calm-coast-93883.herokuapp.com/user/auth";
      const nexturl = this.adminFlag ? "/Manager/Top" : "/Member/Top";

      await this.$axios
        .$get(endpoint, {
          params: {
            name: this.name,
            password: this.pass
          }
        })
        .then(async res => {
          this.$store.commit("setAuth", {
            name: this.name,
            id: res.id,
            auth: res.status,
            admin: this.adminFlag
          });
          setTimeout(() => {
            location.href = nexturl;
          }, 0);
        });
    }
  }
};
</script>

<style>
</style>