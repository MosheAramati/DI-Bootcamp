function playTheGame()  {
    const result = confirm("Do you want to proceed?");
    
    if (result) {
        const userNumbers = parseInt(prompt (" enter a number between 0 and 10"));
        
        if (isNaN(userNumbers)) {
        alert("Sorry Not a number, Goodbye");
        } else if( userNumbers > 10) {
        alert("Sorry it’s not a good number, Goodbye");
        } else {
        const computerNumbers = Math.floor(Math.random() * 10) + 1;
        compareNumbers( userNumbers, computerNumbers)
        }
        
    } else {
        alert("No problem, Goodbye");
    }
}

function compareNumbers(userNumber, computerNumber) {
    let attempts = 0;

    while (attempts < 2) {
        attempts++;

        if (userNumber === computerNumber) {
            alert("WINNER");
            return;
        } else if (userNumber > computerNumber) {
            userNumber = parseInt( prompt("Your number is bigger than the computer's, guess again"));
        } else if (userNumber < computerNumber) {
            userNumber = parseInt( prompt("Your number is smaller than the computer's, guess again"));
        }
    }

    alert("Out of chances");
}

