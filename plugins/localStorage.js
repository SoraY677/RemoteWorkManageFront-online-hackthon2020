import createPersistedState from 'vuex-persistedstate'
 
export default ({ store }) => {
 
    window.onNuxtReady(() => {
        createPersistedState({
            key: 'RemoteWorkManage-key'
        })(store)
    })
}