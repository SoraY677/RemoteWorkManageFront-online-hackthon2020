<template>
  <draggable :options="{ group: 'taskList' }" element="ul">
    <li class="ma-2" v-for="task in taskList" :key="task.id">
      <task :taskStatus="task" />
    </li>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
import task from "~/components/allocateTask";
export default {
  data() {
    return {
      taskList: [
        {
          name: "sample1",
          describe: "sample1",
          chargerList: ["山太郎", "重次郎"],
          period: "",
          flag: "急ぎ"
        },
        {
          name: "sample2",
          describe: "sample2",
          chargerList: ["重次郎"],
          period: "2020/11/12 19:00",
          flag: ""
        }
      ]
    };
  },
  components: {
    draggable,
    task
  }
};
</script>

<style>
</style>