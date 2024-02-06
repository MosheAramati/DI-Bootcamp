// Instructions
// 1rst Daily Challenge

//1. Create two functions. Each function should return a promise.
//2. The first function called makeAllCaps(), takes an array of words as an argument
//  -If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
//  -else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words uppercased as an argument
//  -If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
//  -else, reject the promise with a reason.

function makeAllCaps(words){
    return new Promise((resolve, reject) => {
        if (words.every(isString)){
            resolve (words.map((word) => word.toUpperCase()));
        } else {
            reject ("all values should be strings");
        }
    }) 
}

function isString(arg) {
    return typeof arg == 'string'     
}

function sortWords(wordUpperCase){
    return new Promise((resolve, reject) => {
        if (wordUpperCase.length > 4){
            resolve (wordUpperCase.sort())
        } else{
            reject ('Array too short')
        }
    })
}

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))


//2nd Daily Challenge:

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

  const empty = ``

//1. Create three functions. The two first functions should return a promise..

//2. The first function is named toJs():
//- this function converts the morse json string provided above to a morse javascript object.
//- if the morse javascript object is empty, throw an error (use reject)
//- else return the morse javascript object (use resolve)

//3. The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

//- This function asks the user for a word or a sentence.
//- if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
//- else return an array with the morse translation of the user’s word.


// if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
// if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object


//4. The third function called joinWords(morseTranslation), takes one argument: the morse translation array

//- this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

//5. Chain the three functions.

function toJs(jsonString){
    return new Promise((resolve, reject) => {
        if (jsonString == ''){
            reject ("this string is empty")
        } else {
            resolve ( JSON.parse(jsonString))
        }
    })
}


function toMorse(morseJS) {
    const word = prompt("Enter Word")
    const avaliabeCharacters = Object.keys(morseJS)
    return new Promise((resolve, reject) => {
        if (!checkWord(word, avaliabeCharacters)){
            reject("you enter an unavaliable character")
        } else {
            resolve(wordToMorse(word, morseJS))
        }
    })
}

function checkWord(word, avaliabeCharacters){
    const userLetterLower = word.toLowerCase()
    const userWordArr = userLetterLower.split("")
    return userWordArr.every((letter)=> avaliabeCharacters.includes(letter))
}

function wordToMorse(word, morseJS){
    const userLetterLower = word.toLowerCase()
    const letters = userLetterLower.split("")
    return letters.map((letter)=> morseJS[letter])
}

toJs(morse)
.then((obj)=> toMorse(obj))
.then((res)=> console.log(res))
.catch((err)=> console.log(err))
