const math = require("./math.js");

const lodash = require('lodash');

// math module
console.log('Math module:');

console.log('Addition:'+ math.sum(5, 3));
console.log('Multiplication:'+ math.multiply(5, 3));

// lodash
console.log('Lodash:');

const sum = lodash.sum([3,5]);
const multiply = lodash.multiply(3, 5)
console.log('Sum:', sum);
console.log('Multiplication:', multiply);