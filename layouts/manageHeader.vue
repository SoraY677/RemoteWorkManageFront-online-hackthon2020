<template>
  <v-card>
    <v-toolbar>
      <v-toolbar-items>
        <v-btn to="/Manager/Top" text primary>TOP</v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn to="/Manager/Task" text primary>Task</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn class="px-10" icon fab to="/Manager/Profile">
          <v-avatar>
            <img :src="getImgUrl()" />
          </v-avatar>
        </v-btn>
        <v-btn @click="logout()" text primary>log out</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  components: {},
  methods: {
    getImgUrl() {
      return process.env.BASE_URL + "admin/icon?name=" + this.$store.state.name;
    },
    logout() {
      this.$store.commit("logout");
      location.href = "/";
    }
  }
};
</script>

<style>
</style>