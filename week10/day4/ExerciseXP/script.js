// 🌟 Exercise 1 : Giphy API
// Instructions
// With your knewly accumulated knowledge of the Fetch API lets write some cool code!

// You will work with this part of the documention

// You will use this Gif URL: https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2Myz

//1. Create a program to retrieve the data from the API URL provided above.
// Use the fetch() method to make a GET request to the Giphy API and Console.log the Javascript Object that you receive.
// Make sure to check the status of the Response and to catch any occuring errors.

const Url ="https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"

fetch(Url)
.then((resp)=> resp.json())
.then((dataJs)=> console.log(dataJs))
.catch((err)=> console.log('ups', err) );


// 🌟 Exercise 2 : Giphy API
// Instructions
//1. Read carefully the documention to understand all the possible queries that the URL accept.
//2. Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Make sure to check the status of the Response and to catch any occuring errors.
//3. Console.log the Javascript Object that you receive.

const Url2 ="https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2"

fetch(Url2)
.then((resp)=> resp.json())
.then((dataJs)=> console.log(dataJs))
.catch((err)=> console.log('ups', err) );

// 🌟 Exercise 3 : Async Function
// Instructions
// Improve the program below :

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));
// Create an async function, that will await for the above GET request.
// The program shouldn’t contain any then() method.
// Make sure to check the status of the Response and to catch any occuring errors.


const asyncFetch = async () => {
    const resp = await fetch("https://www.swapi.tech/api/starships/9/")
    const data = resp.json();
    console.log(data)
}
asyncFetch();

// 🌟 Exercise 4: Analyze
// Instructions
// Analyse the code provided below - what will be the outcome?

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// First is going to show the string "calling", because is not under any promise, then result get the promise (await) with the time out and afte 2 seconds is resoloved because the what the promise dictates.