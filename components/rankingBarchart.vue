<template>
  <div class="ranking-barchart">
    <div v-for="user in rank" :key="user.id" class="ranking-bar-container">
      <div class="icon-container">
        <img :src="getImgUrl(user.name)" />
        <span>{{ user.name }}</span>
      </div>
      <div ref="barOuter" class="bar-outer">
        <p class="progress">{{ user.progress * 100 }} %</p>
        <div
          class="solid-bar"
          :style="{ width: formatBarLength(user.progress * 100) }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rank: Array
  },
  methods: {
    formatBarLength(percentage) {
      return percentage + 0.1 + "%";
    },
    getImgUrl(userName) {
      return process.env.BASE_URL + "/user/icon?name=" + userName;
    }
  }
};
</script>

<style>
.ranking-barchart {
  padding: 2px;
  width: 100%;
  background-color: #eee;
}

.ranking-bar-container {
  display: flex;
  margin: 20px 0;
}

.ranking-bar-container > .icon-container {
  display: inline-block;
  width: 10%;
  float: left;
  text-align: center;
}

.ranking-bar-container > .icon-container > img {
  width: 3em;
  height: 3em;
}

.ranking-bar-container > .icon-container > span {
  display: block;
  font-size: 0.8em;
}

.ranking-bar-container > .bar-outer {
  display: flex;
  width: 90%;
  float: left;
  align-items: center;
}

.ranking-bar-container > .bar-outer > .progress {
  position: absolute;
}

.ranking-bar-container > .bar-outer > .solid-bar {
  height: 50%;
  align-items: center;
  background-color: #f44336;
  border-radius: 10px;
}
</style>
