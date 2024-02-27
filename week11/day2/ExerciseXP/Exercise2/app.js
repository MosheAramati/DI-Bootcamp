import humans from "./data.js"

console.log(humans);

function averageAge(arr) {
    let sum = 0
    for(let i=0; i <arr.length; i++){
        sum += arr[i].age  
    }
    const average = sum / arr.length  
    console.log(average);
}

averageAge(humans)