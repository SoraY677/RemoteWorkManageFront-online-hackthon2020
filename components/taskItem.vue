<template>
  <v-card class="mt-4 pa-5" width="100%" :disabled="taskStatus.status">
    <v-btn
      v-if="!isDone"
      @click="doneTask()"
      class="d-inline-block"
      color="green"
      text
    >
      ✔Done
    </v-btn>
    <v-btn v-if="isDone" class="d-inline-block" color="grey" text>
      ✔Done
    </v-btn>
    <div class="d-inline-block">
      <v-card-title>
        {{ taskStatus.name }}
      </v-card-title>
    </div>
    <achievementDialog
      ref="achievementDialog"
      @done="confirm"
      :taskStatus="taskStatus"
    />
  </v-card>
</template>

<script>
import achievementDialog from "~/components/achievementDialog";
export default {
  data() {
    return { isDone: false, isShow: false };
  },
  props: {
    taskStatus: {}
  },
  components: {
    achievementDialog
  },
  mounted() {
    this.isDone = this.taskStatus.isDone;
  },
  methods: {
    doneTask() {
      this.$refs.achievementDialog.show();
    },
    confirm() {
      this.isDone = true;
    }
  }
};
</script>

<style>
</style>