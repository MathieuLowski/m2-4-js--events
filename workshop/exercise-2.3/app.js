const mainDiv = document.getElementById("main");

const changeColor = function (action) {
  const btn = action.target.id;
  document.getElementById(btn).classList.toggle("green");
};

for (i = 1; i <= 20; i++) {
  const button = document.createElement("button");
  button.innerText = i;
  button.id = `btn-${i}`;
  button.style.top = `${Math.random() * 80}vh`;
  button.style.left = `${Math.random() * 80}vh`;
  mainDiv.appendChild(button);
  button.addEventListener("click", changeColor);
}
