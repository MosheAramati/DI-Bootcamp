//Exception
console.log('before');
try{
    h
}
catch(e){
    console.log(e.message)
}
console.log('after')

//Promise
//*Pending
//*fulfiled -> reject
//*fulfiled-> reject

//new Promise ((resolve, reject)=>{
//..............
//})

const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(5)
    },5000)
});

console.log(p)

p.then((res)=>{
    console.log(res);
}). catch(err =>{
    console.log(err)
})

const flip = () =>{
   const coin = Math.floor(Math.random()* 3)
   return coin < 2 ? (coin === 0? "head" : "tail") : "side;"
};

const flipCoin = new Promise((res, rej)=>{
    setTimeout(()=>{
        const flipResult = flip();
        if (flipResult ==="head" || flipResult=== "tail"){
            res(flipResult);
        } else {
            rej(flipResult)
        }
        
    }, 6000)
});
console.log("before");
flipCoin
.then((result)=>{
    console.log(result)
})
.catch((e)=>{
    console.log("coin on the side");
});
console.log('after');

//Exercise
/**
 * 1. simulateAsyncOperation function return a Promise with data as
 * Array of objects from server as json
  const arr = [
         { username: "aaa", email: "aaa@gmail.com" },
         { username: "bbb", email: "bbb@gmail.com" },
         { username: "ccc", email: "ccc@gmail.com" },
       ];
 * Simulate successful completion after 2 seconds
 * 2. Call this function and log the data as an Array datatype
 * 3. Simulate an error
 * 4. return to step 2, and create render function that will di
display the users on the page.*/

const simulateAsyncOperation = () => {
    const arr = [
        { username: "aaa", email: "aaa@gmail.com" },
        { username: "bbb", email: "bbb@gmail.com" },
        { username: "ccc", email: "ccc@gmail.com" },
      ];
      return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(JSON.stringify(arr));
            //reject(new Error ('server is down'));
        },2000)
      });
}

simulateAsyncOperation()
.then(resolve =>{
    console.log(resolve)
})
.catch(err=>{
    console.log(err)
})

const render = (arr) => {
    const html = arr.map ((item)=>{
        return `<div>${item.username} ${item.email}</div>`
    });
    document.querySelector("#div").innerHTML = html
}

// render(arr)


// you can chain the then puttin many so it will make many returns once the promise is resoloved


//Promises Static method
//Promise.all([..])
//Promise allSelected ([...])
//Promise.any([...])

const promise1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("promise 1")
    },1000)
})


const promise2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("promise 2")
    },2000)
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("promise 3")
    },3000)
})

Promise.all([promise1, promise2, promise3])
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log('err=>', arr);
});
