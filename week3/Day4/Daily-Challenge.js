// Instructions

// 1.Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
// For example, “The movie is not that bad, I like it”.

let sentence = "The series is not that bad, I like it";


// 2.Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).

let wordNot = sentence.search("not");

// 3.Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).

let wordBad = sentence.search("bad");

// 4.If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
// For example, the result here should be : “The movie is good, I like it”

if(wordNot === -1){
    console.log(sentence)
}   else if(wordNot < wordBad){
    console.log(wordBad)
    console.log(wordNot)
    let firstPart = sentence.slice(0, wordNot)
    let secondPart = sentence.slice(wordBad + 3)
    console.log(firstPart + "good" + secondPart) 
}else{
    console.log(sentence)
}

// 5.If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.