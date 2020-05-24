export default async function({store,redirect,route }) {
  
  // すでにログインしている場合は各ページに遷移させる
  if(store.getters.getAuth === "success"){
    //ログインページに行こうとしている際には砂漠葬送
    if(String(route.path).match(/\/(\b)*/) === null){
      if(store.getters.isAdmin){
        redirect("/Manager/Top")
      }
      else{
        redirect("/Member/Top")
      }
    }
    //admin => user
    //user  => admin
    //もそれぞれ砂漠葬送
    else if(String(route.path).match(/\/(\b)./) != null){
      if(store.getters.isAdmin){ 
        if(String(route.path).match(/\/Member\/(\b)./) != null){
          redirect("/Manager/Top")
        }
      }
      else{
        if(String(route.path).match(/\/Manager\/(\b)./) != null){
          redirect("/Member/Top")
        }     
      }
    }
  }


  //ログインしていない状態でアクセスしようとしているやつには潜影蛇手
  else if(String(route.path).match(/[/].+[/]/) != null ){
    const auth = await store.getters
    if(auth.getAuth != "success"){
      return redirect("/");
    }
  }

}