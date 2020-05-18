<template>
  <v-card class="ma-10" outlined>
    <v-card-text class="text-center"> 現在のタスク一覧</v-card-text>
    <v-divider></v-divider>
    <taskList class="ma-10" />
  </v-card>
</template>

<script>
import taskList from "~/components/taskList";

export default {
  layout: "manageLayout",
  components: {
    taskList
  }
};
</script>

<style>
</style>