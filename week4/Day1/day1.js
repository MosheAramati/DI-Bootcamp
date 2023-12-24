//Functions:

// function a() {
//     console.log('Hello world');
// }

// function b() {
//     for (let i = 0; i < 10; i++ ) {
//         a();
//     }
// }

// b();

// // you can call a function any time

// function greeting(name, email) {
//     console.log('hello, ' + name + ' welcome to the lesson your emails is ' + email);
// }

// greeting('john');

// const students = ['John', 'Moshe', 'Jacob'];
// const emails = ['John@gmail.com', 'Moshe@gmail.com', 'Jacob@gmail.com'];

// for(let i = 0; i < students.length; i++ ){
//     greeting(students[i], emails[i]);
// }

// //

// function sum (a, b){
//     console.log(a + b)
// }

// sum(10,14)

// // Default values:

function hello(a, b = "2") {
    console.log("hello " + a + " & hello " + b)
}

hello('john', 'anna') // it over writes the paramater, but if it is not used then it will use the defined parameter.

// Local variables the console show different results because in the function the variable is different 'localy'
// let age = 15;

// function myAge(){
//     let age = 16
//     console.log('myAge =>', age)
// }

// myAge()

// console.log('myAge =>', age)
// var can dafine outside the block and let only define it inside the block.


// Exercise 1
// 1. Create a structured HTML file linked to a JS file

// 2. Write a Javascript function that takes a parameter: myAge

// 3. In the function, console.log the age of my mum and my dad. My mum is twice my age, and my dad is 1.2 the age of my mum.

// 4. Call the function.

// function user(myAge){
//     let momAge = (myAge * 2);
//    // console.log ('my mom age is ' + momAge);
//     let dadAge = (momAge * 1.2);
//    // console.log ('my dad age is ' + dadAge);
//    return [momAge, dadAge]// I can ask for a return in the way I want (here i have an array.)
   
// }

// function sumMomDad(myAge){
//     let result = user(myAge);
//     return result[0] + result[1];

// }
// console.log(sumMomDad(20))

// user()

// let newAge = user(10) 
// console.log(newAge)

// Object method

// let obj = {
//     name: 'john',
//     myAge: function (){
//         console.log('my age is 22')
//     }
// }

// console.log(obj.myAge())

// this to call the object itsef inside

let obj = {
    name: 'john',
    myAge: function (){
        console.log(this.name);
    }
}
console.log(obj.myAge());

//??
