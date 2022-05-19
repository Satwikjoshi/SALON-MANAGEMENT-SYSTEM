  
  payment.addEventListener('click',(e) => {
    var cardholdername=document.getElementById('cardholdername').value
var cardno=document.getElementById('cardno').value
var mmyy=document.getElementById('mmyy').value
var cvv=document.getElementById('cvv').value


set(ref(database , 'Payment/' + cardholdername), {
    cardholdername:cardholdername,
    cardno:cardno,
    mmyy:mmyy,
    cvv:cvv,
});
alert('Saved');
});