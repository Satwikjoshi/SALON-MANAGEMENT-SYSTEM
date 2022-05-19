document.getElementById('loginform').addEventListener("submit",(event)=>{
    // event.preventDefault()
  })
  firebase.auth().onAuthStateChanged((user)=>{
      if(user){
          location.replace("index.html")
      }
  })
  function login(){
      const username = document.getElementById("username").value
      const password = document.getElementById("password").value
      firebase.auth().signInWithEmailAndPassword(username,password);

  }