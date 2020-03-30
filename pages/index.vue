<template>
  <div>
    <section class="ranking-barchart-area">
      <h1>全体の進捗ランキング</h1>
      <rankingBarchart :memberAchive="rankingJson" />
    </section>
    <section class="">
    </section>
  </div>
</template>

<script>
import rankingBarchart from "~/components/rankingBarchart";
export default {
  data() {
    return {
      rankingJson: [
        {
          name: "hoge",
          percentage: 20
        },
        {
          name: "fuga",
          percentage: 65
        }
      ]
    };
  },
  components: {
    rankingBarchart
  }
};
</script>

<style>
.ranking-barchart-area {
  padding: 0 10%;
}
</style>
