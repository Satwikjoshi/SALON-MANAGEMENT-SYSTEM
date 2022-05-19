var firebaseConfig = {
    apiKey: "AIzaSyAApf81Sf1Oa1BCxszXYeOz4QLir91M3Vo",
    authDomain: "salon-management-system-da0af.firebaseapp.com",
    databaseURL: "https://salon-management-system-da0af-default-rtdb.firebaseio.com",
    projectId: "salon-management-system-da0af",
    storageBucket: "salon-management-system-da0af.appspot.com",
    messagingSenderId: "234328146997",
    appId: "1:234328146997:web:b3313750bed1a336eb9d7c",
    measurementId: "G-XQJ6L1R78N"
};


firebase.initializeApp(firebaseConfig);
var database = firebase.database()

function save(){
    const firstname=document.getElementById('firstname')
    const lastname=document.getElementById('lastname')
    const email=document.getElementById('email')
    const phoneno=document.getElementById('phoneno')
    const bookingdate=document.getElementById('bookingdate')
    const message=document.getElementById('message')

    // addBtn.addEventListener('click',(e) => {
    //     e.preventDefault();
        ({
            firstname: firstname,
            lastname: lastname,
            email: email,
            phoneno: phoneno,
            bookingdate: bookingdate,
            message: message
        })
        alert('Saved')
    }
