<template>
  <div>
    <userProfile class="ma-10" :imgurl="getImgUrl()" />
  </div>
</template>

<script>
import userProfile from "~/components/userProfile";
export default {
  layout: "manageLayout",
  components: {
    userProfile
  },
  methods: {
    getImgUrl() {
      return (
        process.env.BASE_URL + "/admin/icon?name=" + this.$store.state.name
      );
    }
  }
};
</script>

<style>
</style>