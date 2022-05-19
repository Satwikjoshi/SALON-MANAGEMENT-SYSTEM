function getdata() {
    var user=document.getElementById("user").value;
    //firebase data retrieval function
    //path of your data
    //.once will get all your data in one time
    firebase.database().ref('Appointment/'+user).once('value').then(function (snapshot) {
        //here we will get data
        //enter your field name
        var name=snapshot.val().firstname;
        var lastname=snapshot.val().lastname;
        var email=snapshot.val().email;
        var phoneno=snapshot.val().phoneno;
        var appointmentid=snapshot.val().appointmentid;
    

        //now we have data in variables
        //now show them in our html

        document.getElementById("name").innerHTML=name;
        document.getElementById("lastname").innerHTML=lastname;
        document.getElementById("email").innerHTML=email;
        document.getElementById("phoneno").innerHTML=phoneno;
        document.getElementById("appointmentid").innerHTML=appointmentid;
    })
   
    }
    function deletedata(){
        user2=document.getElementById('user2').value;
        firebase.database().ref('Appointment/'+user2).once('value').then(function (snapshot) {
        var name=snapshot.val().firstname;
    
        firebase.database().ref('Appointment/'+name).remove();
        alert("Deleted")
        });
    }
      
      
//       var ref = firebase.database().ref('Appointment/name');
//       ref.once("value")
//         .then(function(snapshot) {
//           var name1 = snapshot.child("name").val();
//           if(snapshot.child("name").exists()){
    
      
//           }
   
//    })
   
    
    

