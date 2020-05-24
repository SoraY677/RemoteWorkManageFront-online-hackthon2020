<template>
  <div>
    <p class="text-center display-1">rate:{{ rate }}</p>
    <v-sparkline
      :line-width="2"
      :labels="labels"
      :value="[0, 2, 5, 9, 5, 10, 3, 5, -4, -10, 1]"
      :fill="true"
      :label-size="5"
    ></v-sparkline>
  </div>
</template>

<script>
export default {
  props: {
    rate: 0
  },
  data() {
    return {
      labels: [
        "10日前",
        "9日前",
        "8日前",
        "7日前",
        "6日前",
        "5日前",
        "4日前",
        "3日前",
        "一昨日",
        "昨日",
        "今日"
      ]
    };
  },
  beforeCreate() {}
};
</script>

<style>
</style>