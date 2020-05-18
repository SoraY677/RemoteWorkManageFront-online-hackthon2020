export const state = () =>({
  name:"",
  id:"",
  auth:"",
})

export const getters = {
  getAuth(state){
    return state.auth
  },
  getName(state){
    return state.name
  },
  getId(state){
    return state.id
  }
}

export const mutations = {
  setAuth:function(state,{name,id,auth}){
    state.name = name
    state.id = id
    state.auth = auth
  },
}

export const actions = {
  nuxtClientInit ({ commit, state, dispatch }, { req }) {
    const storeObj = JSON.parse(localStorage["RemoteWorkManage-key"]);
    let res = new Object()
    res.name = storeObj.name
    res.id = storeObj.id
    res.auth = storeObj.auth
    commit('setAuth', res)
  },
  async login({commit},{username, password}){
    const response = await this.$axios
    .$get("https://calm-coast-93883.herokuapp.com/user/auth", {
      params: {
        name: username,
        password: password
      }
    })
    await commit("setAuth",{
      name:username,
      id:response.id,
      auth : response.status
    })

  }
}