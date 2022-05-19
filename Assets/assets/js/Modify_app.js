
function getdata(){
    var user = document.getElementById("ModifyApp").value;

    firebase.database().ref('ModifyApp/'+user).once('value').then(function(snapshot){
        var Appid= snapshot.val().Appid;
        var firstname= snapshot.val().firstname;

        document.getElementById("Appid").innerHTML=Appid;
        document.getElementById("firstname").innerHTML=firstname;
    })
}