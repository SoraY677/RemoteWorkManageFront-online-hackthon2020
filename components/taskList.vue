<template>
  <draggable :options="{ group: 'taskList' }" element="ul">
    <li class="ma-2" v-for="task in content" :key="task.id">
      <task :taskStatus="task" v-if="task.do != null" />
    </li>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
import task from "~/components/allocateTask";
export default {
  props: {
    content: null
  },
  components: {
    draggable,
    task
  }
};
</script>

<style>
</style>