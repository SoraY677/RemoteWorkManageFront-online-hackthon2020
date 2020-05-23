<template>
  <v-dialog v-if="show">
    <v-card>
      <v-card-title>{{ about.name }}</v-card-title>
      <v-card-text
        >おめでとうございます！この調子で頑張りましょう！！！
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    };
  },
  pros: {
    about: {}
  },
  computed: {
    show() {
      return this.isShow;
    }
  }
};
</script>

<style>
</style>