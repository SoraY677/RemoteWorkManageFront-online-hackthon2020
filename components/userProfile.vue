<template>
  <v-card class="text-center pa-10">
    <v-avatar size="60%" min-width="100" max-width="480" outline color="grey">
      <img :src="getImgUrl()" />
    </v-avatar>
    <v-divider></v-divider>
    <v-card-text class="pt-10">
      <h1>{{ $store.state.name }}</h1>
      <p>管理者：hogehoge</p>
      <p></p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  methods: {
    getImgUrl() {
      return process.env.API_URL + "/user/icon?name=" + this.$store.state.name;
    }
  }
};
</script>

<style>
</style>