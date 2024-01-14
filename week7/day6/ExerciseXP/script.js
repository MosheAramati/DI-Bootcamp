// 🌟 Exercise 1 : Scope
// Instructions
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.

// // #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // a will be equal to 3 because the if statement is true so the value of a will be reasign.

// // #1.1 - run in the console:
// funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?

// a would be still 5 because you can not reasign value to a const

// //#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// //a will be equal to 0 then 5 because beafore the funcTwo a is 0 an then 5 beacuse reasign the value to a.


// // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
// // #2.2 What will happen if the variable is declared 
// // with const instead of let ?

// // a would be always kept 0 because you can not reasign value to a const.

// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// //in funcFive still 5 beacuse funcFour only change a property in the window not the value itself.

// // #3.1 - run in the console:
// funcFour()
// funcFive()

// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }

// // the value of a inside the function is test (is not reasign) a new "a" was created within the function.

// // #4.1 - run in the console:
// funcSix()
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?

// // nothing would change because the value is not reasign just a new "a" was created inside funcSix

// //#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// // inside the block is 5 and uutside 2 because this are two diferent variables with different values one is inside the block an the other is not

// // #5.1 - run the code in the console
// // #5.2 What will happen if the variable is declared 
// // with const instead of let ?

// // nothing would change because the value is not reasign just a new "a" was created 

// 🌟 Exercise 2 : Ternary Operator
// Instructions
// Using the code below:

// function winBattle(){
//     return true;
// }
//1. Transform the winBattle() function to an arrow function.
//2. Create a variable called experiencePoints.
//3. Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
//4. Console.log the experiencePoints variable.

const winBattle = () => true;

let experiencePoints = 0;

experiencePoints = winBattle() ? 10 : 1

console.log(experiencePoints)

// Exercise 3 : Is It A String ?
// Instructions
//1 Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// Check out the example below to see the expected output
// Example:

const isString = (arg) => (typeof(arg) === "string" ? true : false);

console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false

// 🌟 Exercise 4 : Colors
// Instructions
// Using this array :

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

//1. Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
//2. Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.

colors.forEach((item, indx, arr1)=>{
   let  answer = (`${indx + 1}# choice is ${item}`)
  console.log(answer)
})

// 🌟 Exercise 5 : Colors #2
// Instructions
// Using these arrays :

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
 const ordinal = ["th","st","nd","rd"];
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.

let answer = colors.forEach((item, indx, arr1)=>{
    let  answer = (`${indx + 1}${getOrdinal(indx + 1)} choice is ${item}`)
   console.log(answer)
 })

function getOrdinal(indx) {
    if ( indx === 1 || indx === 2 || indx ===3 ) return ordinal[indx];
    return ordinal[0]
}

// Exercise 6 : Bank Details
// Instructions
// In this exercise, you have to decide which type of variables you have to use (ie. let or const):

//1. Create a global variable called bankAmount which value is the amount of money currently in your account.
//2. Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
//3. Create an array with all your monthly expenses, both positive and negative (money made and money spent).
// Example : const details = ["+200", "-100", "+146", "+167", "-2900"]
//4. Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
//5. Display your current bankAccount standing at the end of the month.
 
let bankAmount = 10000;
const VAT = 0.17;

const details = [+200, -100, +146, +167, -2900];

details.forEach((item, indx, arr)=>{
    arr[indx] = arr[indx] * (1+ VAT);
    bankAmount +=  arr[indx];
});

console.log(bankAmount)


