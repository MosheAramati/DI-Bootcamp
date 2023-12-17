// // For loops

// for(let i=0;i<10;i++){
//     console.log(i);
// }

// //looping for an Array
// let colors = ["red", "yellow", "black", "pink", "black"];

// for(let i=0;i<4;i++){
//     console.log(colors[i]);
// }
// //to make it more dinamic (i don't know the lenght of an array) i< color.legth

// for(let i=0;i<colors.length;i++){
//     console.log(colors[i]);
// }
// // Exercise 1

// for(let i=0;i<=15;i++){
//     if( i % 2 === 0){
//         console.log(i + " is even!")
//     }else{
//         console.log(i + " is odd!")
//     }
// }
// // For/In --> looping through OBJECTS
// let person = {
//     fname: "john",
//     lname: "doe",
//     age: 25
// }

// for (let key in person){
//     console.log("The value of the key " + key + " is " + person[key]);
// }
// // For/Of --> looping through an Array. you can also loop strings with this method.

// let color = ["yellow", "black", "pink"];

// for(let element of color) {
//     console.log(element)
// }


// // While Loops more open loop not only for numbers.

// let n = 0;
// while (n < 3){
//     n++;
//     console.log(n)
// }

// let userName = prompt("Please ente the correct username!")
// // while(userName != "admin"){
// //     userName = prompt("Please ente the correct username!")
// // } console.log("Welcome!")

// // Do While Loop

// do {
//     username = prompt("please enter the corrrect user nama")
// } while(username !== "admin"){
//     console.log("welcome!")
// };
// // Break statement

// for(let i=0; i<10; i++) {
//     console.log("before if statement");
//     console.log(i)
//     if (i===3) {
//         break;
//     } console.log("after if statement")
// };

// // Continue
// for (let i = 0; i < 10; i++) {
//     if(i === 3 || i === 7 || i === 9)
// } continue;

// Exercise


let names= ["john", "sarah", 23, "Rudolf",34]

for 