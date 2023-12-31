// setTimeout(function, delay) 5 * 1000

function showMessage(){
    console.log("Hello, afeter 5 seconds !")
}

// showMessage()'
setTimeout( showMessage, 5*1000)

setTimeout (function(){
    console.log("helo again after 8 seconds!")
}, 8*1000)

// Problem: cerate a function that logs a countdown
// from 5 to 1 in the console.
// whith each number displayed after a 1 second delay
let countDown = 5
let id;

function countDownDelay(){

    console.log(countDown);
        countDown--;

    if (countDown >= 0){
      id = setTimeout(countDownDelay, 1000);
    }
    if (countDown === 2){
        clearTimeout(id);
    }    
    
} ;
// countDownDelay()

// setInterval
// setInterval(function, interval)

let index = 5

const interval = setInterval (showMessage, 1000)

function showMessage (){
    console.log(index)
    index--;
    if (index===0){
        clearInterval(interval)
    }
}

// Exercise: Move the square:



function myMove (){
    
    const redSquare = document.querySelector(".inner")
    const button = document.querySelector("button")
    let moveLengh = 0
    let move = setInterval (function(){
    
    if (moveLengh===350){
        clearInterval(move)
    }
    moveLengh ++
    redSquare.style.left = `${moveLengh}px`
    }, 5);
}



