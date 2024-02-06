// You are tasked with writing a function `solution` that takes a string `S` as input. 
// The string consists of 'a' and/or 'b' characters. 
// The function should return `true` if all occurrences 
// of the letter 'a' appear before all occurrences 
// of the letter 'b' in the string `S`. 
// If either 'b' does not occur in `S` or 'a' does not occur in `S`, 
// the function should also return `true`. 
// Otherwise, it should return `false`.

// aabb - true
// bbaa - false
// aaa - true
// bbb - true
// ababa - false

function solution (string){
    let lastA_index = string.lastIndexOf('a');
    let firstB_index = string.indexOf('b')

    if (firstB_index=== -1 || lastA_index === -1 || lastA_index < firstB_index){
        return true
    }else {
        return false
    }
};

string = 'abaa'

console.log(solution(string));

// Fetch

fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=> {
    return res.json()
})
.then((arr))

