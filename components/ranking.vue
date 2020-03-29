<template>
  <div class="ranking-box">
    <ul>
      <li>
        <span>1位</span>{{grade1}}
      </li>
      <li>
        <span>2位</span>{{grade2}}
      </li>
      <li>
        <span>3位</span>{{grade3}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    grade1:"",
    grade2:"",
    grade3:""
  }
};
</script>

<style>
  .ranking-box{
    background-color:#eee;
    border-radius: 20px;
  }

  .ranking-box li:nth-child(1){
    font-size:1.5rem;
  }
  .ranking-box li:nth-child(2){
    font-size:1.4rem;
  }
  .ranking-box li:nth-child(3){
    font-size:1.2rem;
  }
</style>
