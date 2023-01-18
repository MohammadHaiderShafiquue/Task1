//pop-box close button functionality

let button=document.getElementById('close');
button.addEventListener('click',function(){
let button2=document.getElementById('close-all');
button2.style.display="none";


});
//notification-box close button functionality

let button3=document.getElementById('cross');
button3.addEventListener('click',function(){
    let button4=document.getElementById('notification');
    button4.style.display="none";
});
//notification-box do-not-allow functionality
let button5=document.getElementById('do-not-allow');
button5.addEventListener('click',function(){
let button6=document.getElementById('notification');
button6.style.display="none";

});





