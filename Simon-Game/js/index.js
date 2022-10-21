let level = 0;
let started = false;
const allColors = ["green", "red", "yellow", "blue"];
let userPattern = [];
let randomColors = [];
const btn = document.querySelectorAll(".btn");

btn.forEach((button) => {
    button.addEventListener("click", (event) => {
        if(started) {
            userPattern.push(button.id);
            makeAnimation(button.id);
            playSound(button.id);
            checkAnswer(userPattern.length-1);
        }
    });
});


document.addEventListener("keydown", (event)=>{
    if(event.key === "Enter")  {
        if(!started) {
            nextSequence();
            started = true;
        }
    }
})

function getRandom() {
    return Math.floor(Math.random() * 4);
}

function makeAnimation(button) {
    const pressedColor = document.querySelector("#" + button);
    pressedColor.classList.add("pressed");
    setTimeout(() => {
        pressedColor.classList.remove("pressed");
    }, 10);
}

function playSound(color) {
    let audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}

function nextSequence() {
    userPattern = [];
    level++;
    const heading = document.querySelector("h1");
    heading.innerText = "Level " + level;
    const getColor = allColors[getRandom()];
    makeAnimation(getColor);
    playSound(getColor);
    randomColors.push(getColor);
}

function checkAnswer(index) {
    if(userPattern[index] === randomColors[index]) {
        if(userPattern.length===randomColors.length) {
            setTimeout(()=>{
                nextSequence();
            },1000);
        }
    } else {
        alert("Game Over \nReload Page?");
        window.location.reload();
    }
}


