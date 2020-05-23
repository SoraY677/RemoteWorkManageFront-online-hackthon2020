<template>
  <div>
    <v-list class="mx-10">
      <v-list-item class="flex-wrap">
        <taskItem
          v-for="item in task"
          :key="item.id"
          :taskStatus="{
            name: item.do,
            describe: 'これはsampleの説明文です',
            isDone: item.status
          }"
          @click="isShow = true"
        />
      </v-list-item>
    </v-list>
  </div>
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