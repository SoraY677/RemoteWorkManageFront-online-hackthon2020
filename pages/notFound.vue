<template>
  <v-sheet class="ma-10 pa-10 text-center" :tile="true">
    <h1>404 not Found</h1>
    <v-divider></v-divider>
    <p class="mt-10">以下の原因が考えられます。</p>
    <ul class="d-flex-wrap">
      <li>・無効なページ遷移</li>
      <li>・不正なURLへのアクセス</li>
      <li>・認証失敗</li>
      <v-btn to="/">ログインページはこちら</v-btn>
    </ul>
    <p></p>
  </v-sheet>
</template>

<script>
export default {};
</script>

<style>
</style>