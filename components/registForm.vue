<template>
  <v-card class="pa-10 ma-10">
    <h1 class="text-center">新規登録</h1>

    <v-divider class="mb-10"></v-divider>

    <v-form v-model="valid">
      <div class="mb-4">
        <p>登録者種別</p>
        <v-radio-group
          :column="true"
          v-model="form.category"
          :rules="[rules.choose]"
        >
          <v-radio label="メンバー">メンバー</v-radio>
          <v-radio label="管理人"></v-radio>
        </v-radio-group>
      </div>

      <div class="mb-4">
        <p>登録者名</p>
        <v-text-field :rules="[rules.required]"></v-text-field>
      </div>

      <div class="mb-4">
        <p>パスワード</p>
        <v-text-field
          label="1回目"
          type="password"
          :rules="[rules.required, rules.min]"
          v-model="form.pass"
        ></v-text-field>
        <v-text-field
          label="2回目"
          type="password"
          :rules="[rules.required, rules.samepass]"
        ></v-text-field>
      </div>

      <div class="mb-4">
        <p>画像</p>
        <v-file-input
          v-model="inputImage"
          accept="image/*"
          show-size
          label="画像ファイルをアップロードしてください"
          :rules="[rules.required]"
          @change="onImagePicked"
        ></v-file-input>
        <div class="text-center">
          <img v-if="uploadImageUrl" :src="uploadImageUrl" />
        </div>
      </div>

      <div class="text-center">
        <v-btn
          color="red"
          type="submit"
          :disabled="!permitResistBtPush"
          @click="registRequest()"
          >登録</v-btn
        >
      </div>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      form: {
        category: -1,
        name: "",
        pass: ""
      },
      inputImage: null,
      uploadImageUrl: "",
      rules: {
        required: value => !!value || "必須事項です",
        min: value => value.length >= 8 || "8文字以上入力してください",
        samepass: value =>
          value == this.form.pass || "最初のパスワードと合致しません",
        choose: value => value >= 0 || "どれか一つ選択してください"
      }
    };
  },
  methods: {
    onImagePicked(file) {
      if (file !== undefined && file !== null) {
        if (file.name.lastIndexOf(".") <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(file);
        fr.addEventListener("load", () => {
          this.uploadImageUrl = fr.result;
        });
      } else {
        this.uploadImageUrl = "";
      }
    },
    async registRequest() {
      let fileReader = new FileReader();

      let dataUrl = "";
      fileReader.onload = await function() {
        dataUrl = fileReader.result;
      };
      fileReader.readAsDataURL(this.inputImage);

      const endpoint = this.form.category == 0 ? "user/new" : "admin/new";

      let format = new FormData();
      format.append("value", this.inputImage);

      await this.$axios
        .$post(process.env.API_URL + endpoint, {
          params: {
            name: this.form.name,
            password: this.form.pass,
            file: dataUrl
          }
        })
        .then(async res => {
          location.assign("/");
        });
    }
  },
  computed: {
    permitResistBtPush() {
      if (this.valid) return true;
      return false;
    }
  }
};
</script>

<style>
</style>