<template>
  <v-card class="ma-10 pa-5">
    <v-card-text>
      <p class="text-center text--primary headline">
        タスク一覧
      </p>
    </v-card-text>
    <v-divider></v-divider>
    <v-list class="mx-10" v-if="task.length != 0">
      <v-list-item class="flex-wrap">
        <taskItem
          v-for="item in task"
          :key="item.id"
          :taskStatus="{
            id: item.id,
            name: item.do,
            describe: 'これはsampleの説明文です',
            isDone: item.status
          }"
          @click="isShow = true"
        />
      </v-list-item>
    </v-list>
    <div class="pa-10 text-center" v-if="task.length === 0">
      タスクがありません！管理人に問い合わせて、タスクをもらいましょう！
    </div>
  </v-card>
</template>

<script>
import taskItem from "~/components/taskItem";

export default {
  layout: "memberLayout",
  data() {
    return {
      achive: {
        name: ""
      }
    };
  },
  components: {
    taskItem
  },
  async asyncData({ app, store }) {
    const response = await app.$axios.$get(process.env.API_URL + "task/yet", {
      params: {
        worker: store.state.name
      }
    });
    return {
      task: response
    };
  }
};
</script>

<style>
</style>