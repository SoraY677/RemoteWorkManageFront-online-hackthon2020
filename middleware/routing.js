export default async function({store,redirect,route }) {

  if(route.path != "/"){
    const auth = await store.getters
    if(auth.getAuth != "success"){
      return redirect("/");
    }
  }
}