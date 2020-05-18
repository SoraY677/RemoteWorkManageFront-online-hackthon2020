<template>
  <v-card>
    <v-toolbar>
      <v-toolbar-items>
        <v-btn to="/Manager/Top" text primary>TOP</v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn to="/Manager/Task" text primary>Task</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn class="px-10" icon fab to="/userPage">
          <v-avatar>
            <img
              :src="
                'https://calm-coast-93883.herokuapp.com/user/icon?name=' +
                  $store.state.name
              "
            />
          </v-avatar>
        </v-btn>
        <v-btn to="/" text primary>log out</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  components: {}
};
</script>

<style>
</style>