<template>
  <main class="inner-frame">
    <section class="ranking-barchart-area">
      <h1>全体の進捗ランキング</h1>
      <!-- <rankingBarchart :memberAchive="rankingJson" /> -->
    </section>
    <section class="achive-circle-area">
      <h1>個人の達成度</h1>
      <ul class="achieve-circles">
        <li>
          <h2>午前</h2>
          <div>
            <achieveCircle />
          </div>
        </li>
        <li>
          <h2>午後</h2>
          <div>
            <achieveCircle />
          </div>
        </li>
        <li>
          <h2>全体</h2>
          <div>
            <achieveCircle />
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
import rankingBarchart from "~/components/rankingBarchart";
import achieveCircle from "~/components/achieveCircle";
export default {
  layout: "ManageLayout",
  data() {},
  components: {
    rankingBarchart,
    achieveCircle
  }
};
</script>

<style>
</style>
