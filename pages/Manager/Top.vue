<template>
  <main class="mx-10">
    <!--  -->
    <v-card class="ma-10 pa-5">
      <v-card-text
        ><p class="text-center text--primary headline">
          全体の進捗ランキング
        </p></v-card-text
      >
      <v-divider></v-divider>
      <rank :rank="rank" v-if="rank.length != 0" />
      <div v-if="rank.length === 0" class="pa-10 text-center">
        まだ今日のデータがないため表示できませんでした。
      </div>
    </v-card>
    <!--  -->
    <v-card class="ma-10 pa-5">
      <v-card-text>
        <p class="text-center text--primary headline">
          個人別進捗
        </p>
      </v-card-text>
      <v-divider></v-divider>
      <v-select
        v-model="achieveSelect"
        :items="['', 'user', 'admin']"
        class="text-center"
        @change="fetchProgress()"
      ></v-select>

      <v-row>
        <v-col>
          <v-card-text>
            <p class="text-center">
              午前
            </p>
          </v-card-text>
          <div>
            <achieveCircle
              :progress="progress.am"
              :animation="false"
              ref="am"
            />
          </div>
        </v-col>
        <v-col>
          <v-card-text>
            <p class="text-center">
              午後
            </p>
          </v-card-text>
          <div>
            <achieveCircle
              :progress="progress.pm"
              :animation="false"
              ref="pm"
            />
          </div>
        </v-col>
        <v-col>
          <v-card-text>
            <p class="text-center">
              全日
            </p>
          </v-card-text>
          <div>
            <achieveCircle
              :progress="progress.whole"
              :animation="false"
              ref="whole"
            />
          </div>
        </v-col>
      </v-row>
    </v-card>
  </main>
</template>

<script>
import rank from "~/components/rankingBarchart";
import achieveCircle from "~/components/achieveCircle";
export default {
  layout: "manageLayout",
  data() {
    return {
      achieveSelect: "",
      progress: {}
    };
  },
  components: {
    rank,
    achieveCircle
  },
  async asyncData({ app }) {
    const rankResponse = await app.$axios.$get(
      process.env.API_URL + "user/rank"
    );
    return {
      rank: rankResponse
    };
  },
  methods: {
    fetchProgress() {
      this.$axios.$get(process.env.API_URL + "task/progress").then(res => {
        this.progress = res;
        this.$refs.am.redraw(res.am);
        this.$refs.pm.redraw(res.pm);
        this.$refs.whole.redraw(res.whole);
      });
    }
  }
};
</script>

<style>
</style>