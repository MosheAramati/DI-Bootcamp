// Functions

// Declare

function showMessage (val1, val2){
    // Do something
    return {msg1:val1, msg2:val2 };
}

let messages = showMessage("mmm" , "aaa");

console.log(messages["msg1"],messages["msg2"] )

//Expression
const sum = function(a, b){
    return a+b;
}
console.log(sum(3,5));

//Arrow function
const hello = (val)=>{
    return val;
};
console.log(hello("ddd"));

//Default values
function Sum (a=1, b=2){
    return a + b;
}

let sumAB =Sum();
console.log (sumAB);

//Block scope
{
    let x = 10
    console.log(x);   
}

// Ternary operator
let a = 9
// if (a=8){
//     c = 10
// }
// else{
//     c = 5;
// }
// console.log(c);

// let c = (a == 8)? 10 : 5;
// console.log(c);

//both the same different syntaxct

let b = 5
let d = 0
//.......false........................true....
let c = !(a==9) ? (d==0) ? -10 : -20 : b==5 ? 8 : -1;

console.log(c);

console.log((true) ? 10 : 5)

// Template string
let name = 'john'
let email = 'jjj@gmail.com'

console.log("Name: " + name + "\nEmail: "+ email)

console.log(`Name: ${name}
 Email:${email}`)

 //For each  ==> only for arrays

 let arr =['john', 'marry', 'dan', 'anne', 'jacob']

arr.forEach((item, indx, arr1)=>{
    console.log(indx, item);
    arr1 [indx]= item
});

console.log(arr);


// Some
let result = arr.some((value)=>{
    return value == 'dan';
});
console.log(result);

//Every

let result2 = arr.every((value)=>{
    return value == 'dan';
});
console.log(result2);


//Exercise: 
let B = 3, D = B, U = B;

const tree = ++D * D*B * B ++ +
+ --D + + + B -- +
+ +D*B+ +
U

console.log(tree)

4 * 4 * 3 * 3 +
3 + 4 +
3 * 3 +
3