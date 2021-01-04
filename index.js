const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";


function handleResize(){
    title.innerHTML = "Changing with JS";
}

function handleClick(){
    const currentClass = title.classList;
    
    if (currentClass.contains(CLICKED_CLASS)){
        title.classList.remove(CLICKED_CLASS);
    } else{
        title.classList.add(CLICKED_CLASS);
    }

    // Same as
    //title.classList.toggle(CLICKED_CLASS);
}

function init(){
    window.addEventListener("resize", handleResize);
    title.addEventListener("click", handleClick);
}

init();
