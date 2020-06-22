const mainDiv = document.getElementById('main');

const turnGreen = function(action){
    const btnId = action.target.id;
    document.getElementById(btnId).classList.add('green'); //not sure to understand
}

for (let i=0; i<=20; i++){
    const button = document.createElement('button');
    button.innerText = i;
    button.id = `btn ${i}`;
    mainDiv.appendChild(button);
    mainDiv.addEventListener('click', turnGreen);
} 



