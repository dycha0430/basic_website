const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings"),
    additionalImage = document.querySelector(".js-image");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    saveName(currentValue);
    paintGreeting(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    if (text == "최유빈") {
        greeting.innerText = `갈매기님 안녕하세요~ 음~ 굳~^^`;
        const image = new Image();
        image.src = `Images/youbin.jpg`;
        image.classList.add('additionalImage');
        additionalImage.appendChild(image);
    } else if (text == "심은서") {
        greeting.innerText = `얼음요요님 안녕하세요~ 패션이 너무 아름다우세요~ㅇ_<`;
        const image = new Image();
        image.src = `Images/eunsu.jpg`;
        image.classList.add('additionalImage');
        additionalImage.appendChild(image);
    } else if (text == "권혜진") {
        greeting.innerText = `국내산주스님 안녕하세요~ 토익 공부는 언제쯤..?^^;;`;
        const image = new Image();
        image.src = `Images/hyejin.jpg`;
        image.classList.add('additionalImage');
        additionalImage.appendChild(image);
    } else if (text == "김주형") {
        greeting.innerText = `전지구적차원(dnd)님 안녕하세요~ 오늘도 즐거운 디앤디하루~ +_+`;
        const image = new Image();
        image.src = `Images/joohyeong.gif`;
        image.classList.add('additionalImage');
        additionalImage.appendChild(image);
    } else {
        greeting.innerText = `${text}님은 앙팸의 회원이 아닙니다.`
    }
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser == null){
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();