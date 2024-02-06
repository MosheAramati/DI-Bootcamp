// 🌟 Exercise 1 : Comparison
// Instructions
//1. Create a function called compareToTen(num) that takes a number as an argument.
//2. The function should return a Promise:
//  -the promise resolves if the argument is less than or equal to 10
//  -the promise rejects if argument is greater than 10.

function  compareToTen(num){
    return new Promise((resolve, reject) => {
            if(num <= 10 ){
                resolve('Your number is less or equal to 10');
            } else {
              reject('Your number is greater than 10');
            }
           
    })
};

compareToTen(11)
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    });

    
compareToTen(10)
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    });

// Exercise 2 : Promises
// Instructions
//1. Create a promise that resolves itself in 4 seconds and returns a “success” string.

const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('success');
    }, 4000)
})

promise.then((result)=>{
    console.log(result);
})

// 🌟 Exercise 3 : Resolve & Reject
// Instructions
//1. Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
//2. Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

const resolvedPromise = Promise.resolve(3)

resolvedPromise.then((result)=>{
    console.log(result);
})

const rejectedPromise = Promise.reject('Boo!')

rejectedPromise.catch((error)=>{
    console.error(error);
});