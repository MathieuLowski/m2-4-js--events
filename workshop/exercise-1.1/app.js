// Exercise 1.1
// ------------

// Create variable 
const body = document.querySelector('body');
const result = document.getElementById('result');

let clicked = false;


const winMess= function(){
    clicked = true;
    result.innerText='You are the winner !!!';
    body.removeEventListener('click',winMess);
}

const loseMess = function(){
    if (!clicked){
        result.innerText='You Lose!!';
    body.removeEventListener('click',loseMess);
    }
    
}

setTimeout(loseMess, 1000);

body.addEventListener('click', winMess);







