const mainDiv = document.getElementById("main");

const colorChange = function (event) {
  const btn = event.target.id;
  console.log(btn);
  document.getElementById(btn).classList.toggle("green");
};

for (i = 0; i <= 20; i++) {
  const button = document.createElement("button");
  button.innerText = i;
  button.id = `btn-${i}`;
  mainDiv.appendChild(button);
  button.addEventListener("click", colorChange);
}

const colorToggle = (id) => {};
