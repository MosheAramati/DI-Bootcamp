/**
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this
exercise (but not y).
The input string will only consist of lower case letters
and/or spaces.

"The input string will only consist of lower case letters and"
 */

const string = "The input string will only consist of lower case letters and";

let vowels = string.match(/[aeiouAEIOU]/g);

console.log(vowels)

countVowels = 0

vowels.forEach((item, indx, arr)=>{
    countVowels += item.length
})

console.log(countVowels)


// Nested function

function x(age){
    let last
    function y(name){
        console.log("Hello " + name + " " + age)
    }
    return y;
}

let hi = x(26)
hi("dan")

x(26)("dan")

// carryiong

const y =(a) => {
    return(b) => {
        return a + b
    };
};
console.log(y(1)(3));

// same with arrow we dont need the return
const y1 = (a) => (b) => a + b
console.log(y1(1)(3));

const VAT = 1.17;
const y2 = (a) => (b) => a * b

let productPlusVAT = y2(VAT)

let p1 = productPlusVAT(100)

console.log(p1)

// Compose
const z = (a, b) => {
    return(c) => {
        return a(b(c))
    };
};

const z1 = (a, b) => (c) => a(b(c));

const sum2 = (num) => num * 2;
const sum = (num) => num * 1;

let result = z1(sum, sum2)(6);
console.log(result)

// Object:

let obj ={
    age: 32 
};
let obj1 = new Object();

console.log(obj);
console.log(obj1);

obj.name = "John"
obj1.car = "alfa"

console.log(obj);
console.log(obj1);

let nameOBJ = obj.name;
let age1 = obj['age']
console.log(nameOBJ, age1)

// Destructuring

const { name, age } = obj;
console.log(name, age)

// Computer properties / Dinamic key values
let ObjKey = "age"

let Obj = {
    [ObjKey] : 32,
    name: "Dan"
};

console.log(Obj)

// Propertiy Value Shorthand

const Name = 'john'
const Age = 32

let Obj1 = {
    Name,
    Age
}
console.log(Obj1)

for(x1 in Obj1){
    console.log(x1, Obj1[x1])
}

//

let inputs = {}

function handleInput(e) {
    inputs[e.target.name] = e.target.value
}

function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs)
}

// By Value uses another cell to safe the values (primitive values string /bolean /number)
let A = 5;
let B = A;
B++;

console.log(A)
console.log(B)


// By Reference it points (references) a place in the memory
let ARR1 = [1, 2, 3]
//let ARR2 = ARR1
let ARR2 = [...ARR1] // copies the arr so it won change in the memory

ARR2[1] = 5

console.log(ARR1)
console.log(ARR2)

let OBJ1 = {a:1, b:5}
let OBJ2 = OBJ1

OBJ2.b =10

console.log(OBJ1)
console.log(OBJ2)

// in nested object the copy wont work you need JSON

let



