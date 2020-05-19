<template>
  <v-dialog :persistent="true" v-model="isShow" color="white">
    <v-card class="text-center pa-5">

      <v-card class="text-left" elevation="0">
        <v-card-text class="pa-0">タイトル</v-card-text>
        <v-text-field v-model="form.name"></v-text-field>

        <v-card-text class="pa-0">概要</v-card-text>
        <v-textarea v-model="form.describe"></v-textarea>

        <v-card-text class="pa-0">期日</v-card-text>
        <v-row>
          <v-col>
            <v-select label="年" v-model="form.data.year" :items="createRowIntArray(2020,2030)"></v-select>
          </v-col>
          <v-col>
            <v-select label="月" v-model="form.data.month" :items="createRowIntArray(1,12)"></v-select>
          </v-col>
          <v-col>
            <v-select label="日" v-model="form.data.day" :items="createRowIntArray(1,31)"></v-select>
          </v-col>
          <v-col>
            <v-select label="時" v-model="form.data.hour" :items="createRowIntArray(0,23)"></v-select>
          </v-col>
          <v-col>
            <v-select label="分" v-model="form.data.minute" :items="createRowIntArray(0,59)"></v-select>
          </v-col>
        </v-row>
        </v-card>

        <v-card-text class="pa-0">メンバー</v-card-text>
        

        
      </v-card>
      <v-btn-toggle>
      <v-btn color="green" text-color="white" @click="isShow=false">add</v-btn>
      <v-btn color="red" text-color="white" @click="isShow=false">cancel</v-btn>
      </v-btn-toggle>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      form: {
        name: "",
        describe: "",
        data: {
          year: Number,
          month: Number,
          day: Number,
          hour: Number,
          minite: Number
        },
        member: []
      }
    };
  },
  computed: {},
  methods: {
    show() {
      this.isShow = true;
    },
    createRowIntArray(start, end) {
      let rowInt = [];
      for (let i = start; i <= end; i++) {
        rowInt.push(i);
      }
      return rowInt;
    }
  }
};
</script>

<style>
</style>