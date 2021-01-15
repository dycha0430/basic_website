const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings"),
    btn = document.querySelector(".tmp");

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

function deleteName(){
    localStorage.removeItem(USER_LS);
    location.reload();
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);

    const div = document.createElement("div");
    const delBtn = document.createElement("button");
    delBtn.innerText = "Back💨";
    delBtn.classList.add("btn");
    delBtn.addEventListener("click", deleteName);
    div.appendChild(delBtn);
    btn.appendChild(div);

    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `안녕하세요 ${text}님`;
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