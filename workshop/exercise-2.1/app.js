const mainDiv = document.getElementById("main");
const allButtons = document.createElement("div");

const turnGreen = function (action) {
  const btnId = action.target.id;
  document.getElementById(btnId).classList.add("green");
};

for (let i = 0; i <= 20; i++) {
  const button = document.createElement("button");
  button.innerText = i;
  button.id = `btn ${i}`;
  mainDiv.appendChild(button);
  button.addEventListener("click", turnGreen);
}
