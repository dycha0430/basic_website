const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

const CLICKED_CLASS = "clicked";

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

}

function handleClick(){
    const currentClass = clockTitle.classList;
    
    if (currentClass.contains(CLICKED_CLASS)){
        clockTitle.classList.remove(CLICKED_CLASS);
    } else{
        clockTitle.classList.add(CLICKED_CLASS);
    }

    // Same as
    //title.classList.toggle(CLICKED_CLASS);
}

function init(){
    getTime();
    setInterval(getTime, 1000);
    clockContainer.addEventListener("click", handleClick);
}

init();