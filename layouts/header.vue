<template>
  <header class="nav-header">
    <ul>
      <li>
        <nuxt-link :to="'/'">
          <font-awesome-icon icon="home" class="icon" /><span>ホーム</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="'/taskManage'">
          <font-awesome-icon icon="tasks" class="icon" /><span>タスク管理</span>
        </nuxt-link>
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
  background-color: #708090;
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

header.nav-header > ul >  li {
  display: flex;
  float: left;
  min-width: 3em;
  min-height: 3em;
  margin: 0.3em 0;
  padding: 0.5em;
  color: #fff;
  border-left:1px solid #2e2e2e;
  text-align: center;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  transition-duration: 0.3s;
  cursor: pointer;
}

header.nav-header > ul >  li:last-child{
  border-right:1px solid #2e2e2e;
}

header.nav-header > ul > li:hover {
  background: #fff;
  color: #708090;
}



header.nav-header > ul > li  .icon {
  font-size: 1.4em;
}

header.nav-header > ul >  li  span {
  display: block;
  width: 100%;
  font-size: 0.6em;
}
</style>
