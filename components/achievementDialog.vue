<template>
  <v-dialog v-model="isShow" color="white">
    <v-card class="pa-10">
      <v-form v-model="valid">
        <p class="text-center display-2">🎉Conguraturation🥳</p>
        <v-divider></v-divider>
        <p class="text-center ma-2">Nice Done! お疲れ様です。</p>
        <p class="text-center ma-2">みんなに褒めてもらいましょう！</p>
        <v-text-field
          label="コメントを追加"
          :rules="[rules.max]"
        ></v-text-field>
        <v-checkbox label="twitter投稿"></v-checkbox>
        <v-checkbox label="slackに投稿"></v-checkbox>
        <v-row>
          <v-col>
            <v-btn color="red" width="100%" @click="done()" :disabled="!valid"
              >完了</v-btn
            >
          </v-col>
          <v-col>
            <v-btn color="green" width="100%" @click="isShow = false"
              >キャンセル</v-btn
            >
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      valid: true,
      rules: {
        max: value => value.length <= 50 || "50文字以内で入力してください"
      }
    };
  },
  methods: {
    show() {
      this.isShow = true;
    },
    done() {
      this.$emit("done");
      this.isShow = false;
      console.log("hoge");
    }
  }
};
</script>

<style>
</style>