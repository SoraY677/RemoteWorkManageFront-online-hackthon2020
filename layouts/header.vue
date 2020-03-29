<template>
  <header class="nav-header">
    <ul>
      <li>ホーム</li>
      <li>タスク管理</li>
      <li>進捗グラフ</li>
    </ul>
  </header>
</template>

<script>
export default {

}
</script>

<style>
  header.nav-header{
    background-color: #f44336;
  }

  header.nav-header > ul{
    display: flex;
    margin:0;
    padding:20px;
    /* justify-content: space-between; */
    list-style: none;
  }

  header.nav-header > ul > li{
    padding:0 .5em;
    color:white;
  }
</style>