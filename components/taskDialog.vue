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
            <v-select
              label="年"
              v-model="form.data.year"
              :items="createRowIntArray(2020, 2030)"
            ></v-select>
          </v-col>
          <v-col>
            <v-select
              label="月"
              v-model="form.data.month"
              :items="createRowIntArray(1, 12)"
            ></v-select>
          </v-col>
          <v-col>
            <v-select
              label="日"
              v-model="form.data.day"
              :items="createRowIntArray(1, 31)"
            ></v-select>
          </v-col>
          <v-col>
            <v-select
              label="時"
              v-model="form.data.hour"
              :items="createRowIntArray(0, 23)"
            ></v-select>
          </v-col>
          <v-col>
            <v-select
              label="分"
              v-model="form.data.minute"
              :items="createRowIntArray(0, 59)"
            ></v-select>
          </v-col>
        </v-row>
      </v-card>

      <v-card-text class="pa-0">メンバー</v-card-text>
      <v-text-field v-model="form.worker"></v-text-field>

      <v-row>
        <v-col>
          <v-btn
            color="green"
            text-color="white"
            width="100%"
            @click="
              isShow = false;
              postTaskAdd();
            "
          >
            add
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            color="red"
            text-color="white"
            @click="isShow = false"
            width="100%"
            >cancel</v-btn
          >
        </v-col>
      </v-row>
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
        worker: ""
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
    },
    async postTaskAdd() {
      await this.$axios.$post(process.env.API_URL + "task/add", {
        name: this.$store.state.name,
        worker: this.form.worker,
        do: this.form.name
      });
    }
  }
};
</script>

<style>
</style>