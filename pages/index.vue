<template>
  <div class="login-container">
    <div class="login">
      <h1>ログイン</h1>
      <input type="text" />
      <input type="password" />
      <div class="login-bt-container">
        <button @click="auth()">Log In</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    auth() {
      this.$axios
        .$get(
          "https://calm-coast-93883.herokuapp.com/user/auth",
          JSON.stringify({
            name: "gopher",
            password: "go"
          })
        )
        .then((res) => {
          console.log(res)
        });
    }
  }
};
</script>

<style>
.login-container {
  display: flex;
  height: 100vh;
  padding-bottom: 10%;
  justify-content: center;
  align-items: center;
}

.login {
  width: 60%;
  margin: 0 auto;
}

div.login > h1 {
  width: 100%;
  text-align: center;
}

div.login > input {
  width: 60%;
  padding: 0.5em;
  margin: 20px 20%;
  border: 2px solid #aaa;
  border-radius: 20px;
  font-size: 1.4em;
}

div.login > .login-bt-container {
  padding-top: 20px;
  margin: 0 auto;
  text-align: center;
}

div.login > .login-bt-container > button {
  padding: 1rem;
  font-size: 1.2rem;
  color: #fff;
  background-color: #f44336;
  border: 1px solid #f44336;
  border-radius: 20px;
  transition-duration: 0.3s;
}

div.login > .login-bt-container > button:hover {
  color: #f44336;
  background-color: #fff;
}
</style>
