<template> </template>

<script>
export default {
  async asyncData({ app, store }) {
    const response = await app.$axios.$get(
      "https://calm-coast-93883.herokuapp.com/user/rank"
    );
  }
};
</script>

<style>
</style>