<template>
  <main class="mx-10">
    <v-card class="ma-10 pa-5">
      <v-card-text
        ><p class="text-center text--primary headline">
          お知らせ一覧
        </p></v-card-text
      >
      <v-divider></v-divider>
      <ul v-if="notice.length > 0" class="pa-10 text-center">
        <li v-for="line in notice" :key="line.id">
          <v-card elevation="0">{{ line }}</v-card>
        </li>
      </ul>
      <div v-if="notice.length === 0" class="pa-10 text-center">
        お知らせはありません。
      </div>
    </v-card>
    <!-- =================== -->
    <v-card class="ma-10 pa-5">
      <v-card-text
        ><p class="text-center text--primary headline">
          全体の進捗ランキング
        </p></v-card-text
      >
      <v-divider></v-divider>
      <rankingBarchart :rank="rank" />
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
            <achieveCircle :progress="progress.am" />
          </div>
        </v-col>
        <v-col>
          <v-card-text>
            <p class="text-center">
              午後
            </p>
          </v-card-text>
          <div>
            <achieveCircle :progress="progress.pm" />
          </div>
        </v-col>
        <v-col>
          <v-card-text>
            <p class="text-center">
              全日
            </p>
          </v-card-text>
          <div>
            <achieveCircle :progress="progress.whole" />
          </div>
        </v-col>
      </v-row>
    </v-card>
  </main>
</template>

<script>
import rankingBarchart from "~/components/rankingBarchart";
import achieveCircle from "~/components/achieveCircle";
export default {
  layout: "memberLayout",

  components: {
    rankingBarchart,
    achieveCircle
  },

  async asyncData({ app }) {
    const rankResponse = await app.$axios.$get(
      "https://calm-coast-93883.herokuapp.com/user/rank"
    );

    const progressResponse = await app.$axios.$get(
      "https://calm-coast-93883.herokuapp.com/task/progress"
    );

    return {
      progress: progressResponse,
      rank: rankResponse,
      notice: []
    };
  }
};
</script>

<style>
</style>
