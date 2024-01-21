//Spread operator:
// let a = 10;
// let b = 20;
// let rest1 = [30, 40, 50];

// let c = [a, b, ...rest1];

// console.log(c);

// //Rest operator:
// let arr = [10, 20, 30, 40, 50];
// const [x, y, z,...rest]  = arr;

// let obj ={
//     name:"aaa",
//     email: "bbb"
// };
// const {name, email}= obj;

//Objects
let keyName = 'aaa'

let obj ={
    [keyName]: "value",// Dinamic key
    key: 'value',
    name: 'john',
    age: 16,
    single: true,
    favorites: ['banana', 'kiwi'],
    address: {
        city: 'tel aviv',
        country: 'israel'
    },
    sayHello: function(){
        return "hello"
    },
};

// const{
//     age,
//     name,
//     favorites:[a, b],
//     address:{city, country},
//     sayHello
// } = obj;


// console.log(age, name, a, b, city, country, sayHello());
console.log(obj[keyName])

function getInfo({age,name, favorites:[a, b], address:{city, country}, sayHello}){
    console.log(age, name, a, b, city, country, sayHello());
};
getInfo(obj);

// Spread Operator
let obj1 = {a: 1, b:2};
let obj2 = {...obj, c:3, d:4};

// Exercise
// Use the methods above to :

// Count how many keys and values are in the object below
// Display : "The x# key is : --- The x# value is : ---".

let myObj = {
    name : "John",
    lastName : "Doe",
    age : 25,
    friends : ["Mark", "Lucie", "Ana"]
}

let keys = Object.keys(myObj)
let numKeys = keys.length
console.log(numKeys)

let values = Object.values(myObj)
let allValues = [].concat(...values)
console.log(allValues)

let numValues = allValues.length

 console.log(`The x# key is: ${numKeys} The x# value is: ${numValues}`)


 // filter for all users older than 30
 // and store their data in an array
 // use Array.filter Array.map Object.keys
 
 const users = {
   user1: { age: 44, name: "picard" },
   user2: { age: 12, name: "sisko" },
   user3: { age: 109, name: "janeway" },
 };

let arrUsers = Object.entries(users);
console.log(arrUsers)

let filteredUsers = arrUsers.filter((key) => users[key].age > 30);
console.log(filteredUsers);

const filteredUsersData = filteredUsers.map((id) => ({id, ...users[id]}))
console.log(filteredUsersData)

 /** 
 Results:
 */
//  [
//    {id:'user1',age:44, name: 'picard'},
//    {id:'user3',age:109, name: 'janeway'}
//  ]
 