const btn = document.querySelectorAll('.drum');

const sound = {
    0: ["crash.mp3", 'w'],
    1: ["kick-bass.mp3", 'a'],
    2: ["snare.mp3", 's'],
    3: ["tom-1.mp3", 'd'],
    4: ["tom-2.mp3", 'j'],
    5: ["tom-3.mp3", 'k'],
    6: ["tom-4.mp3", 'l']
};


for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
        let audio = new Audio(`sounds/${sound[i][0]}`);
        audio.play();
        buttonAnimation(sound[i][1]);

    });
}

document.addEventListener("keydown", (key) => {
    makeSound(key.key);

});



function makeSound(key) {
    let getIndex = getKeyByValues(sound, key);
    getIndex = parseInt(getIndex);
    if (getIndex >= 0 && getIndex < 7) {
        let audio = new Audio(`sounds/${sound[getIndex][0]}`);
        audio.play();
        buttonAnimation(sound[getIndex][1]);
    }

}

function getKeyByValues(object, value) {
    return Object.keys(object).find(key => object[key][1] === value);
}


console.log(getKeyByValues(sound, 'd'));

/*
class Programmer {
    constructor(name, age, gender, languages) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.languages = languages;
        this.getSalary = ()=> {
            alert("Your salary has been credited.");
        }
    }

    
}

const vaibhav = new Programmer("Vaibhav", 21, "male", ["java", "javaScript"]);

vaibhav.getSalary(); 
*/




function buttonAnimation(curKey) {
    let activeButton = document.querySelectorAll("." + curKey);
    if (!activeButton[0].classList.contains("pressed")) {
        activeButton[0].classList.add("pressed");
    }
    setTimeout(()=>
    activeButton[0].classList.remove("pressed"), 150
    );
    

}





