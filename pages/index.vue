<template>
  <div id="myKanban"></div>
</template>

<script>
export default {
  data() {
    return {
      defaultBoards: [
        {
          id: "sample-board-1",
          title: "タスク",
          class: "task",
          
          item: [{ title: "報告書の作成" }, { title: "14時から打ち合わせ" }]
        },

        {
          id: "sample-board-2",
          title: "進行中",
          class: "progress",
          item: [{ title: "○○案の企画書作成" }]
        },

        {
          id: "sample-board-3",
          title: "完了",
          class: "done",
          item: [{ title: "日報の提出" }]
        }
      ]
    };
  },
  mounted() {
    const kanban = new jKanban({
      element: "#myKanban", //タスク管理ボードを表示するHTML要素
      gutter: "15px", //ボード同士の間隔
      widthBoard: "250px", //ボードのサイズ
      boards: this.defaultBoards //初期状態のJSONデータ
    });
  }
};
</script>

<style></style>
