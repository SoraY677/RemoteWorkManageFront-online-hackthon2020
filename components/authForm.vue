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
    <v-btn color="red" @click="authentication($event)">Log in</v-btn>
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
    async authentication(e) {
      e.preventDefault();
      if (this.adminFlag) {
        await this.$axios
          .$get("https://calm-coast-93883.herokuapp.com/admin/auth", {
            params: {
              name: this.name,
              password: this.pass
            }
          })
          .then(async res => {
            await this.$store.commit("setAuth", {
              name: this.name,
              id: res.id,
              auth: res.status,
              adming: this.adminFlag
            });

            location.href = "./Manager/Top";
          });
      } else {
        await this.$axios
          .$get("https://calm-coast-93883.herokuapp.com/user/auth", {
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
              adming: this.adminFlag
            });
            location.href = "./Member/Top";
          });
      }
    }
  }
};
</script>

<style>
</style>