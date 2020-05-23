<template>
  <v-card>
    <v-toolbar color="grey lighten-2">
      <v-toolbar-items>
        <v-btn to="/Member/Top" text primary>TOP</v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn to="/Member/Task" text primary>TASK</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn class="px-10" icon fab to="/Member/Profile">
          <v-avatar>
            <img :src="getIconurl()" />
          </v-avatar>
        </v-btn>
        <v-btn to="/" text primary>log out</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  methods: {
    getIconurl() {
      return process.env.API_URL + "user/icon?name=" + this.$store.state.name;
    }
  }
};
</script>

<style>
</style>