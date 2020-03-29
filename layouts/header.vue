<template>
  <header class="nav-header">
    <ul>
      <li><font-awesome-icon icon="home" class="icon" /><span>ホーム</span></li>
      <li>
        <font-awesome-icon icon="tasks" class="icon" /><span>タスク管理</span>
      </li>
      <li>
        <font-awesome-icon icon="chart-pie" class="icon" />
        <span>進捗グラフ</span>
      </li>
    </ul>
    <ul class="pos-right">
      <li>
        <font-awesome-icon icon="bars" class="icon" /><span>その他 </span>
      </li>
    </ul>
  </header>
</template>

<script>
export default {};
</script>

<style>
header.nav-header {
  display: block;
  overflow: hidden;
  background-color: #f44336;
}

header.nav-header > ul {
  float: left;
  margin: 0;
  padding: 0 20px;
  /* justify-content: space-between; */
  list-style: none;
}

header.nav-header > ul.pos-right {
  float: right;
}

header.nav-header > ul.pos-left {
  float: left;
}

header.nav-header > ul > li {
  display: flex;
  float: left;
  min-width: 3em;
  min-height: 3em;
  margin: 0 0.2em;
  padding: 0.2em;
  color: #fff;
  text-align: center;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  transition-duration: 0.3s;
  cursor: pointer;
}

header.nav-header > ul > li:hover {
  background: #fff;
  color: #f44336;
}

header.nav-header > ul > li > .icon {
  font-size: 1.4em;
}

header.nav-header > ul > li > span {
  display: block;
  width: 100%;
  font-size: 0.6em;
}
</style>
