const slug = require("slug")

let url = slug("i love node JS")

console.log(url)

/** 
 * 1. Create folder
 * 2. insall npm package - axios, - fetch
 * 3. Use axios async function to get users api  
 * https://jsonplaceholder.typicode.com/users
 * 4. Log the users names
*/

const axios = require('axios')

const url1 = "https://jsonplaceholder.typicode.com/users"

async function getUser(){
    try {
        const res = await axios.get(url1)
        console.log(res.data)
        res.data.forEach(element => {
            console.log(element.name);
        });
    } catch (err){
        console.error(err);
    }
}
getUser()

// axios.get(url1)
// .then ((res)=> console.log(res.name.data))
// .catch ((err)=> console.log(err))