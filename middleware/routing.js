export default async function({store,redirect,route }) {
  
  // すでにログインしている場合は各ページに遷移させる
  // if(store.getters.getAuth == "success"){

  // }

  //ログインしていない状態でアクセスしようとしているやつには潜影蛇手
  if(String(route.path).match(/[/].+[/]/) != null ){
    const auth = await store.getters
    if(auth.getAuth != "success"){
      return redirect("/");
    }
  }

}