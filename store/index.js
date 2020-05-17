export const state = () =>({
  auth:''
})

export const mutations = {
  storeAuth(state,response){
    state.auth = response
  }
}