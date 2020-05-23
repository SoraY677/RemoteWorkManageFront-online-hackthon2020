<template>
  <div>
    <userProfile class="ma-10" :imgurl="getImgUrl()" />
  </div>
</template>

<script>
import userProfile from "~/components/userProfile";
export default {
  layout: "memberLayout",
  components: {
    userProfile
  },
  methods: {
    getImgUrl() {
      return process.env.BASE_URL + "/user/icon?name=" + this.$store.state.name;
    }
  }
};
</script>

<style>
</style>