// ((a, b, c, d) => {
//   console.log(a, b, c, d);
//   document.getElementById("root").innerHTML = a + b + c + d;
// })(3, "John & Marry", "New York", "Manager");

/**
Given n, take the sum of the digits of n.
If that value has more than one digit,
continue reducing in this way until a single-digit
number is produced.
This is only applicable to the natural numbers.
Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

// function oneDigit(num) {
//   let arr = new String(num).split("");
//   console.log(arr);
//   let sum = 0;
//   for (i in arr) {
//     sum += Number(arr[i]);
//   }
//   if (sum < 10) {
//     return sum;
//   }
//   return oneDigit(sum);
// }
// console.log(oneDigit(493193));

/** Exercise
 * Create a function that get an array of Numbers as input
 * and return a new array with all numbers multiply by 2
 * For example:
 * Give this array [1,2,3,4]
 * result [2,4,6,8]
 */

function map(arr) {
  let newArr = [];
  for (item of arr) {
    newArr.push(item * 2);
  }
  return newArr;
  //   arr.forEach((item, i, arr) => {
  //     arr[i] = item * 2;
  //   });
  //   return arr;
}

// console.log(map([2, 4, 6, 8]));

/** map */
// let arr = [1, 2, 3, 8];
// let newArr = arr.map((item, index) => {
//   if (item >= 3) return item * index;
// });
// let newArr = arr.map((item,index) => item * index);

// console.log(newArr);

// let users = ["eli", "adam", "anne"];
// ['eli@gmail.com','adam@gmail.com','anne@gmail.com']

// const emails = users.map(item => {
//     return item + '@gamil.com';
// })

// const emails = users.map(item => {
//     return [item,item + '@gamil.com'];
// })
// console.log(emails);

/** Exercise
 * Create an function that get an array of Numbers as input
 * and return a new array with all numbers greater than 3
 * For example:
 * Give this array [0,1,1,2,3,5,8]
 * result [5,8]
 */

function filter(arr) {
  let newArr = [];
  for (item of arr) {
    if (item > 3) {
      newArr.push(item);
    }
  }
  return newArr;
}
// console.log(filter([0, 1, 1, 2, 3, 5, 8]));

/** filter */
// let arr = [0, 1, 1, 2, 3, 5, 8];

// const newArr = arr.filter((item) => {
//   return item > 3;
// });
// console.log(newArr);

// const arr = [
//   { id: 1, name: "John", email: "jjj@gmail.com" },
//   { id: 2, name: "Mor", email: "mmm@gmail.com" },
//   { id: 3, name: "Marry", email: "marry@gmail.com" },
//   { id: 4, name: "Or", email: "or@gmail.com" },
// ];

// name that include 'o'

// const newArr = arr.filter((item) => {
//   return item.name.toLowerCase().includes("a");
// });

// console.log(newArr);

let employees = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 27,
    joinedDate: "December 15, 2017",
  },
  {
    firstName: "Ana",
    lastName: "Rosy",
    age: 25,
    joinedDate: "January 15, 2019",
  },
  {
    firstName: "Zion",
    lastName: "Albert",
    age: 30,
    joinedDate: "February 15, 2011",
  },
];

// age > 26

// let older = employees.filter((a) => {
//   return a.age > 26;
// });
// console.log(older);

// function render(arr) {
//   const html = employees.map((item) => {
//     return `<div style="display:inline-block;border:1px solid #000;margin:20px">
//             <h2>${item.firstName} ${item.lastName}</h2>
//             <h4>${item.age}</h4>
//             <p>${item.joinedDate}</p>
//         </div>`;
//   });
//   console.log(html.join(""));
//   document.getElementById("root").innerHTML = html.join("");
// }
// render(employees);

/**  Exercise
 * Create an function that get an array of Numbers as input
 * and return the sum of all numbers
 * For example:
 * Give this array [2, 5, 10,100]
 * result 117
 */

function reduce(arr, num) {
  let sum = num;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
}

let arr = [2, 5, 10, 100];
// // console.log(reduce(arr, 1000));

const sum = arr.reduce((total, item) => {
  return total + item;
}, 1);

// console.log(sum);

/**
Given n, take the sum of the digits of n.
If that value has more than one digit,
continue reducing in this way until a single-digit
number is produced.
This is only applicable to the natural numbers.
Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

function oneDigit(num) {
//   const numbers = new String(num).split("");
  const digits = new String(num).split("").reduce((total, num) => total + Number(num), 0);
  return digits < 10 ? digits : oneDigit(digits);
}
console.log(oneDigit(132189));
