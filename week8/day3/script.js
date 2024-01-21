/** Exercise
* Create a function that get an array of Numbers as input
* and return a new array with all numbers multiply by 2
* For example:
* Give this array [1,2,3,4]
* result [2,4,6,8]
*/

let arr = [1,2,3,4]

arr.forEach((item, indx, arr)=> {
    arr[indx] = item * 2; 
});
console.log(arr);

// map
let arr1 =[1, 2, 3, 8];
let newArr = arr.map((item, index)=>{
    if (item >= 1) return item*index
})
console.log(newArr);

let users = ['eli', 'adam', 'anne'];

let emailUsers = users.map((item, index)=>{
    return item + "@gmail.com"
});
console.log(emailUsers);

/** Exercise
* Create an function that get an array of Numbers as input
* and return a new array with all numbers greater than 3
* For example:
* Give this array [0,1,1,2,3,5,8]
* result [5,8]
*/

let ar = [0,1,1,2,3,5,8]

function filter(arr) {
    let newAr = [];
    for(item of arr){
        if (item > 3){
            newAr.push(item)
        }
    }
    return newAr
}

console.log(filter(ar))

//Filter
let narr = ar.filter((item) => {
    return item > 3
});
console.log(narr);

const Narr = [
    {id:1 ,name:'John', email:'jjj@gmail.com'},
    {id:2 ,name:'Mor', email:'mmm@gmail.com'},
    {id:3 ,name:'Marry', email:'marry@gmail.com'},
    {id:4 ,name:'Or', email:'or@gmail.com'},
];
//name that includes 'o'

const ARR = Narr.filter((item)=>{
   return item.name.toLowerCase().includes("a")
}); 
console.log(ARR);

let employees = [
        {
            firstName: 'John',
            lastName: 'Doe',
            age: 27,
            joinedDate: 'December 15, 2017'
        },
    
        {
            firstName: 'Ana',
            lastName: 'Rosy',
            age: 25,
            joinedDate: 'January 15, 2019'
        },
    
        {
            firstName: 'Zion',
            lastName: 'Albert',
            age: 30,
            joinedDate: 'February 15, 2011'
        }
    ];

    const filterEmployees = employees.filter((item)=>{
       return item.age > 26
     }); 
    
     console.log(filterEmployees)

function render(arr){
    const html = employees.map(item => {
        return `<div style = "display: inline-block"; border: "1px solid black">
                    <h2>${item.firstName} ${item.lastName}</h2>
                    <h4>${item.age}</h4>
                    <p>${item.joinedDate}</p>
                    </div>`
    });
    console.log(html.join(""))
    document.getElementById("div").innerHTML = html.join("")
}

render(employees);

/**  Exercise
* Create an function that get an array of Numbers as input
* and return the sum of all numbers
* For example:
* Give this array [2, 5, 10,100]
* result 117
*/

let numbers = [2, 5, 10,100];

function reduce (arr, num){
    let sum = num;
    arr.forEach((element)=>{
        sum += element
    });
    return sum
};
let sum = reduce(numbers,0)
console.log(sum)
//
// const sum1 = reduce(arr, num){

// }


// Given n, take the sum of the digits of n.
// If that value has more than one digit,
// continue reducing in this way until a single-digit
// number is produced.
// This is only applicable to the natural numbers.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function oneDigit(num){
    const n = new String(num).split('');
    const digits = n.reduce((total, num)=>{
        return total +Number(num);
    },0)
    return digits< 10 ? digits : oneDigit(digits);
}
console.log(oneDigit(132189))