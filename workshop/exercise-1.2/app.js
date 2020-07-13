// Exercise 1.2
// ------------

const body = document.querySelector("body");
const result = document.getElementById("result");
const time = Math.floor(Math.random() * 5); //creatin TIME(it generates x secs <= 5secs)
document.getElementById("time").innerText = time; //linking variable with html

let clicked = false; //dfault setup when page loads

const winMessage = function () {
  clicked = true;
  result.innerText = "You win!";
  body.removeEventListener("click", winMessage);
};

const looseMessage = function () {
  if (!clicked) {
    result.innerText = "Yous lose!";
    body.removeEventListener("click", looseMessage);
  }
};
setTimeout(looseMessage, time * 1000); //we declared time on top.

body.addEventListener("click", winMessage);
