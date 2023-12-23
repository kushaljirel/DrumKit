


// checking the button press in website
allButton = document.querySelectorAll('button')

allButton.forEach(item => {
    item.addEventListener('click', function(){
        let buttonAudio = this.innerHTML
        checkMatch(buttonAudio)
        btnAnimation(buttonAudio)
    })
})

//checking the keyboard keys pressed 
document.addEventListener("keydown", function(event) {
    checkMatch(event.key)
    btnAnimation(event.key)
})


// function that matches keys or button pressed with the switch cases (letters)
function checkMatch(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play()
            break;
    
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play()
            break;
    
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play()
            break;
    
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play()
            break;
    
        case "j":
            let crash = new Audio("sounds/crash.mp3")
            crash.play()
            break;
    
        case "k":
            let kick = new Audio("sounds/kick-bass.mp3")
            kick.play()
            break;
    
        case "l":
            let snare = new Audio("sounds/snare.mp3")
            snare.play()
            break;
    
        default:console.log("audio failed!")
            break;
    }
}


function btnAnimation(currentKey) {
    let currentBtn = document.querySelector("."+currentKey)
    currentBtn.classList.add("pressed")
    setTimeout(() => {
        currentBtn.classList.remove("pressed")
    }, 100);
}