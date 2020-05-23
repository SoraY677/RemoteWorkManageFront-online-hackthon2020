<template>
  <v-dialog v-model="isShow" color="white">
    <v-card class="pa-10">
      <p class="text-center display-2">🎉Conguraturation🥳</p>
      <v-divider></v-divider>
      <p class="text-center ma-2">Nice Done! お疲れ様です。</p>
      <p class="text-center ma-2">みんなに褒めてもらいましょう！</p>
      <v-textarea label="コメントを追加"></v-textarea>
      <v-checkbox label="twitter投稿"></v-checkbox>
      <v-checkbox label="slackに投稿"></v-checkbox>
      <v-row>
        <v-col>
          <v-btn color="red" width="100%">完了</v-btn>
        </v-col>
        <v-col>
          <v-btn color="green" width="100%">キャンセル</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    show() {
      this.isShow = true;
    }
  }
};
</script>

<style>
</style>