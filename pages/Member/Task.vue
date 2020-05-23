<template>
  <div>
    <v-list class="mx-10">
      <v-list-item>
        <taskItem
          :taskStatus="{
            name: 'sample',
            describe: 'これはsampleの説明文です',
            isDone: false
          }"
          @click="isShow = true"
        />
      </v-list-item>
      <v-list-item>
        <taskItem
          :taskStatus="{
            name: 'sample2',
            describe: 'これはsample2の説明文です',
            isDone: true
          }"
        />
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import taskItem from "~/components/taskItem";
import taskAchive from "~/components/achieveDialog";

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
    taskItem,
    taskAchive
  },
  async asyncData({ app, store }) {
    const response = await app.$axios.$get(process.env.API_URL + "user/rank");
  }
};
</script>

<style>
</style>