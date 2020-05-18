<template>
  <v-list class="mx-10">
    <v-list-item>
      <taskItem
        :taskStatus="{
          name: 'sample',
          describe: 'これはsampleの説明文です',
          isDone: false
        }"
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
</template>

<script>
import taskItem from "~/components/taskItem";

export default {
  layout: "memberLayout",
  components: {
    taskItem
  },
  async asyncData({ app, store }) {
    const response = await app.$axios.$get(
      "https://calm-coast-93883.herokuapp.com/user/rank"
    );
  }
};
</script>

<style>
</style>