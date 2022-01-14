const lightB = document.querySelector("#light");
const bodyB = document.querySelector('body');
const figure = document.querySelector('#wave');

bodyB.addEventListener('click', () => {
    bodyB.classList.toggle("light");
    if(figure.classList.contains("wave")){
        figure.classList.replace("wave", "waveGrey");
    }
    else{
        figure.classList.replace("waveGrey", "wave");
    }
})