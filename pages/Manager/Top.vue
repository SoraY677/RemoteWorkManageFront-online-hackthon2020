<template>
  <main class="mx-10">
    <v-card class="ma-10 pa-5">
      <v-card-text
        ><p class="text-center text--primary headline">
          全体の進捗ランキング
        </p></v-card-text
      >
      <v-divider></v-divider>
      <rank :rank="rank" />
      <div v-if="rank.length === 0" class="pa-10 text-center">
        まだ今日のデータがないため表示できませんでした。
      </div>
    </v-card>
  </main>
</template>

<script>
import rank from "~/components/rankingBarchart";
export default {
  layout: "manageLayout",
  components: {
    rank
  },
  async asyncData({ app }) {
    const rankResponse = await app.$axios.$get(
      process.env.API_URL + "user/rank"
    );
    return {
      rank: rankResponse
    };
  }
};
</script>

<style>
</style>