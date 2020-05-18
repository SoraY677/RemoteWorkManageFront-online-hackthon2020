<template>
  <v-card class="mt-4 pa-5" width="100%">
    <v-checkbox v-model="isDone" class="d-inline-block"></v-checkbox>
    <div class="d-inline-block">
      <v-card-title>
        {{ taskStatus.name }}
      </v-card-title>
      <v-card-subtitle>
        {{ taskStatus.describe }}
      </v-card-subtitle>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return { isDone: false };
  },
  props: {
    taskStatus: {}
  },
  mounted() {
    this.isDone = this.taskStatus.isDone;
  }
};
</script>

<style>
</style>