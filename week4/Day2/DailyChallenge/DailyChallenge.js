// Instructions
//1. Prompt the user for several words (separated by commas).
//2. Put the words into an array.
//3. Console.log the words one per line, in a rectangular frame as seen below.
//4. Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:

const words = prompt("write some words separted by comas.").split(",")

function lengthOfLongestWord(){
    let lenght = 0
    for (const word of words){
    const wordLenght = word.trim().length;
    if (wordLenght > lenght){
        lenght = wordLenght
    }
}
    return lenght
}

const longestWord = lengthOfLongestWord()

//console.log(lengthOfLongestWord( ))

function topButtom(){
   const numberOfStarsOnRow = longestWord + 4;
   let row = "";
   for (let  i = 0; i < numberOfStarsOnRow; i++ ){
    row = row + "*"
   }
   return row;
}

const margins = topButtom()
//console.log(topButtom())

function displayRows(){
    console.log(margins)
    for (const word of words){
        const finalSpace = " ".repeat(longestWord - word.length)
        console.log("* " + word + finalSpace + " *")
       
    }
    console.log(margins)

}  

displayRows()