<template>
  <v-card class="pa-2">
    <v-card-title
      >{{ taskStatus.name }}
      <v-chip
        class="ml-2"
        v-if="taskStatus.flag != ''"
        color="red"
        text-color="white"
        >{{ taskStatus.flag }}</v-chip
      >
    </v-card-title>
    <v-card-subtitle>{{ taskStatus.describe }}</v-card-subtitle>
    <v-chip-group>
      <v-chip
        v-for="charger in taskStatus.chargerList"
        :key="charger.id"
        color="green"
        text-color="white"
      >
        <font-awesome-icon class="mr-1" :icon="['fas', 'user']" />
        {{ charger }}
      </v-chip>
    </v-chip-group>
    <v-chip v-if="taskStatus.period != ''" color="orange" text-color="white">
      <font-awesome-icon class="mr-1" :icon="['fas', 'bell']" />
      {{ taskStatus.period }}
    </v-chip>
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