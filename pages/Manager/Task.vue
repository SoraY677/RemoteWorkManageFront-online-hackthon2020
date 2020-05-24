<template>
  <v-card class="ma-10" outlined>
    <v-card-text class="text-center"> 現在のタスク一覧</v-card-text>
    <v-btn
      @click="showTaskDialog"
      class="pa-2 float-top"
      color="pink"
      dark
      right
      fixed
    >
      <font-awesome-icon class="mr-1" :icon="['fas', 'plus']" />
      taskを追加する
    </v-btn>
    <v-divider></v-divider>
    <taskList
      class="ma-10"
      :content="JSON.parse(JSON.stringify(taskContents))"
    />

    <taskDialog ref="taskDialog" />
  </v-card>
</template>

<script>
import taskList from "~/components/taskList";
import taskDialog from "~/components/taskDialog";

export default {
  layout: "manageLayout",
  components: {
    taskList,
    taskDialog
  },
  async asyncData({ app }) {
    const taskData = await app.$axios.$get(process.env.API_URL + "task", {});
    return {
      taskContents: taskData
    };
  },
  methods: {
    showTaskDialog() {
      this.$refs.taskDialog.show();
    }
  }
};
</script>

<style>
.float-top {
  z-index: 10;
}
</style>