const body = document.querySelector("body");

const numImg = 5;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `Images/${imgNumber}.jpg`;
    image.classList.add('bgImage');
    body.appendChild(image);
}

function genRandom(){
    return Math.floor(Math.random() * numImg) + 1;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();