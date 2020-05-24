<template>
  <v-card class="pa-2" :disabled="taskStatus.status">
    <v-card-title>
      <v-chip
        v-if="taskStatus.status"
        class="float-right mr-2"
        color="white"
        :label="false"
        text-color="green"
        :outline="false"
        >✔Done</v-chip
      >
      <span class="mr-2">{{ taskStatus.do }}</span>
      <v-chip color="red" text-color="white">
        <font-awesome-icon class="mr-1" :icon="['fas', 'user']" />
        {{ taskStatus.worker }}
      </v-chip>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    taskStatus: {}
  }
};
</script>

<style>
</style>