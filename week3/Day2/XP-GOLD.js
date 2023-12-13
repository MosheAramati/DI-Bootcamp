// Exercise 1 : Favorite Color
// Instructions

let sentence = ["my","favorite","color","is","blue"];

// 1. Write some simple Javascript code that will join all the items in the array above, and console.log the result.

sentence.join("");
console.log(sentence.join(""))

// Exercise 2 : Mixup
// Instructions

// 1.Create 2 variables. The values should be strings. For example:

let str1 = "moshe";
let str2 = "aramati";

// 2. Slice out and swap the first 2 characters of the two strings from part 1.

let swappesStr1 = str2.slice(0, 2) + str1.slice(2);
let swappesStr2 = str1.slice(0, 2) + str2.slice(2);

console.log(swappesStr1)
console.log(swappesStr2)

// 3. Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).

let str3 = str1 + " " + str2

// 4. Finally console.log the new concatenated string.

console.log(str3)

//Exercise 3 : Calculator
// Instructions
// Make a Calculator. Follow the instructions:

// 1.Prompt the user for the first number.

let firstNumber = prompt("first number:")

// 2.Store the first number in a variable called num1.
// Hint : console.log the type of the variable num1. What should you do to convert it to a number ?

let num1 = parseInt(firstNumber);

console.log(typeof num1) 

// 3.Prompt the user for the second number.

let secondNumber = prompt("second number:")

// 4.Store the second number in a variable called num2.

let num2 = parseInt(secondNumber);

// 5.Create an Alert where the value is the SUM of num1 and num2.

let answer = num1 + num2

alert(answer)



