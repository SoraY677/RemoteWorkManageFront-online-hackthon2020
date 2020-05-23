<template>
  <v-card class="mt-4 pa-5" width="100%" :disabled="isDone">
    <v-btn v-model="isDone" class="d-inline-block" color="green" text>
      ✔Done
    </v-btn>
    <div class="d-inline-block">
      <v-card-title>
        {{ taskStatus.name }}
      </v-card-title>
      <v-card-subtitle>
        {{ taskStatus.describe }}
      </v-card-subtitle>
    </div>
    <taskAchive :about="taskStatus" ref="taskAchive" />
  </v-card>
</template>

<script>
import taskAchive from "~/components/achieveDialog";
export default {
  data() {
    return { isDone: false };
  },
  props: {
    taskStatus: {}
  },
  components: {
    taskAchive
  },
  mounted() {
    this.isDone = this.taskStatus.isDone;
  },
  methods: {
    showAchive() {
      this.$refs.taskAchive.show(this.isDone);
    }
  },
  computed() {
    if (this.isDone) {
      showAchive();
    }
  }
};
</script>

<style>
</style>