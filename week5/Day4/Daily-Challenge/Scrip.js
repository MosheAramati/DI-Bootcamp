// Instructions
// Daily Challenge : Show Only The Letters

//1. Create an input type text that takes/shows only letters. (ie. numbers and special characters won’t be accepted)

//2. Hint: use one of the following events to remove any character that is not a letter

//- keyup event
//- or keypress event
//- or keydown event
//- or input event

//3. Hint : Check out keycodes in Javascript or Regular Expressions

function checkLetters(e){
    const input = document.querySelector("input")
    const inputValue = e.target.value.split("")
    console.log (e.target.value);
    if(
        inputValue[inputValue.length - 1].toUpperCase() == 
        inputValue[inputValue.length - 1].toLowerCase()
    ){
    inputValue.pop()
    }
    e.target.value = inputValue.join("")
}