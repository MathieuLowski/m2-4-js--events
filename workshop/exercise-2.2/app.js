const mainDiv = document.getElementById('main');

const colorChange= function(action){
    const btn = action.target.id;
    document.getElementById(btn).classList.add('green');
} 

for (i=0; i<=20; i++){
    const button = document.createElement ('button');
    button.innerText= i;
    button.id = `btn-${i}`;
    mainDiv.appendChild(button);
    mainDiv.addEventListener('click', colorChange);
}



