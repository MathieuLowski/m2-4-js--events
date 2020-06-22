// Exercise 1.2
// ------------

const body = document.querySelector('body');
const result = document.getElementById('result');
let clicked = false;
const time = Math.floor(Math.random()*5);           //Generating random countdown (from 0 to 5 secs)
document.getElementById('time').innerText=time;     //reasigning the time viriable



const winMessage = function(){
    clicked = true;
    result.innerText='You win!';
    body.removeEventListener("click",winMessage);

};

const loosing = function(){
    if (!clicked){
        result.innerText='Yous lose!';
        body.removeEventListener("click",loosing);
    }
    
}
setTimeout(loosing, time*1000);

body.addEventListener('click', winMessage);




