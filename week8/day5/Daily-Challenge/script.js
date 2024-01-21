// Instructions
// Create a function that returns true if all parameters are truthy, and false otherwise.

const allTruth = (arr)=>arr.every((item)=>item);

const a = [true, true, true];//true
console.log(allTruth(a));
const b = [true, false, true];//false
console.log(allTruth(b));
const c = [5, 4, 3, 2, 1, 0];//false
console.log(allTruth(c));
const d = [5, 4, 3, 2, 1];//true
console.log(allTruth(d));