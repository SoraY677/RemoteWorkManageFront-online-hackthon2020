<template>
  <main class="mx-10">
    <!-- =================== -->
    <v-card class="ma-10 pa-5">
      <v-card-text
        ><p class="text-center text--primary headline">
          全体の進捗ランキング
        </p></v-card-text
      >
      <v-divider></v-divider>
      <rankingBarchart :rank="rank" v-if="rank.length != 0" />

      <div v-if="rank.length === 0" class="pa-10 text-center">
        まだ今日のデータがないため表示できませんでした。
      </div>
    </v-card>
    <v-card class="ma-10 pa-5 text-center">
      <v-card-text
        ><p class="text-center text--primary headline">
          個人の達成度
        </p></v-card-text
      >
      <v-divider></v-divider>
      <v-row>
        <v-col>
          <v-card-text>
            <p class="text-center">
              午前
            </p>
          </v-card-text>
          <div>
            <achieveCircle :progress="progress.am" :animation="true" />
          </div>
        </v-col>
        <v-col>
          <v-card-text>
            <p class="text-center">
              午後
            </p>
          </v-card-text>
          <div>
            <achieveCircle :progress="progress.pm" :animation="true" />
          </div>
        </v-col>
        <v-col>
          <v-card-text>
            <p class="text-center">
              全日
            </p>
          </v-card-text>
          <div>
            <achieveCircle :progress="progress.whole" :animation="true" />
          </div>
        </v-col>
      </v-row>
    </v-card>
    <!--  -->
    <v-card class="ma-10 pa-5">
      <v-card-text
        ><p class="text-center text--primary headline">
          成績
        </p></v-card-text
      >
      <v-divider></v-divider>

      <rateGraph class="mt-3" :rate="200" />
    </v-card>
  </main>
</template>

<script>
import rankingBarchart from "~/components/rankingBarchart";
import achieveCircle from "~/components/achieveCircle";
import rateGraph from "~/components/rateGraph";
export default {
  layout: "memberLayout",
  date() {
    return {};
  },

  components: {
    rankingBarchart,
    achieveCircle,
    rateGraph
  },

  async asyncData({ app }) {
    const rankResponse = await app.$axios.$get(
      process.env.API_URL + "user/rank"
    );

    // const progressResponse = await app.$axios.$get(
    //   process.env.API_URL + "task/progress"
    // );
    const progressResponse = {
      am: 0.5,
      pm: 0.82,
      whole: 0.66
    };

    return {
      progress: progressResponse,
      rank: rankResponse
    };
  }
};
</script>

<style>
</style>
