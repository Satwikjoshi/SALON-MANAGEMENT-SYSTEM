submit.addEventListener('click',(e) => {
    var fullname=document.getElementById('fullname').value
  var username=document.getElementById('username').value
  var email=document.getElementById('email').value
  var phoneno=document.getElementById('phoneno').value
  var password=document.getElementById('password').value
  var confirmpassword=document.getElementById('confirmpassword').value
  // var male=document.getElementById('dot-1').value
  // var female=document.getElementById('dot-2').value
  // var notsay=document.getElementById('dot-3').value
  
  
  set(ref(database , 'Registration/' + username), {
  fullname: fullname,
    username: username,
    email: email,
    phoneno: phoneno,
    password: password,
    confirmpassword: confirmpassword,
    // male:dot-1,
    // female:dot-2,
    // notsay:dot-3
  });
  alert('Saved');
  });