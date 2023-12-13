// Console.log
console.log("Hello World!");
console.log("This is day one of javascript");

// Variables
let z = 3;
console.log(z);

// Naming Variables - varaibles are case sensitive
let Z = 4;
console.log(Z);

// cameCase first word is lowercase, after first word, each first letter of world is capital
let userName;
let testUser;
let dayOfTheMonth;
// This is also an undefined class b/c we didnt assign the varaiable

// Keywords
let x, y;
x = 5 + 6;
console.log(x);
y = x * 10;
console.log(y);

// DataTypes

// Strings
let a = "Hello";
let b = "World";
let c = a + " " + b;
// added a space between the two variables to put a space between the string
console.log(c);

// String Properties

// How to get length of string
let longString =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam minima voluptatem illo, voluptatum repudiandae expedita nisi fuga neque optio consequuntur accusamus laborum odit fugiat suscipit eveniet rem nesciunt nihil quaerat quos doloremque non. Dolor quasi neque accusantium totam, recusandae hic molestiae facere labore minima sequi vitae repellendus illo odio beatae saepe doloribus molestias asperiores eos enim officiis? Reiciendis accusamus quod a officia hic veritatis quas cupiditate consequatur, incidunt nesciunt, fugiat eius laborum quidem ducimus eaque? Corrupti excepturi cupiditate alias temporibus eligendi. Laborum commodi rem, atque, veniam facilis vitae deserunt corporis consequatur temporibus pariatur molestias ducimus esse iste voluptatibus tempora expedita?";

let longStringLength = longString.length;
console.log(longStringLength);

// Shorter way to get length of string
let smallString = "Hello, welcome to Javascript Day One";
console.log(smallString.length);

// String Methods

// Positioning
console.log(smallString[0]);

// index of
let str = "Hello Everyone, please say hello to the class";
let posUppercaseHello = str.indexOf("Hello");
let posLowercaseHello = str.indexOf("hello");
console.log(posUppercaseHello);
console.log(posLowercaseHello);

// Substring
// Method: Defining Range
console.log(str.substring(0, 5));

// Method: Defining Starting point
console.log(str.substring(15));

// Function: Lowercase Property
let uppercaseString = "HELLO THIS IS AN INTENSE STRING";
console.log(uppercaseString.toLowerCase());

// Numbers:

// Look at difference in log between these two
console.log("1" + 2);
console.log(1 + 2);

// Number Methods:

// isNan method: Not a number: return true or false
let op = "me";
console.log(isNan(op));
// Conole says true b/c there is no number in variable "op"

let num = 1;
console.log(isNaN(num));
// False b/c variable "num" is a number

// Decimal:
let decimal = 10.6789;
console.log(decimal.toFixed(0));
// Rounds up to 11
console.log(decimal.toFixed(2));
// Returns 10.68 b/c method rounds up to the assigned place

// Convert Number to String:
console.log(decimal.toString());

// Type of:
console.log(typeof decimal);

// Boolean - True or False:
console.log(Boolean(10 > 9));

// Type of Boolean:
console.log(boolean(typeof num === "number"));

// Null - Empty / Nonexistant / No Value

// Arrays
// Example of usercase of Array:
let user1 = "John";
let user2 = "Bill";
let user3 = "Nancy";

// Creating an array out from example of usecase:
let users = ["John", "Bill", "Nancy"];
console.log(users);

// Access element in array:
console.log(users[0]);
console.log(users[1]);
console.log(users[2]);

// Nested Array
let nestedArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(nestedArrays);

// Access specifc element within a nested array:
console.log(nestedArrays[(1)[1]]);

// Changing element in an array:
let colors = ["blue", "yellow", "green"];
console.log(colors);

// colors[1] = "pink";
// console.log(colors);
// Log shows change in element

// Array Methods:

// Push & Pop: Adding elements to end of array
colors.push("orange");
colors.push("red");
console.log(colors);

// Removing elements from end of array:
colors.pop();
console.log(colors);

// Splice: add and remove elements in array:
colors.splice(1, 1, "pink");
console.log(colors);
// starting from position 1, remove 1 element, add element from starting position

colors.splice(1, 0, "pink", "grey");
console.log(colors);
// starting from position 1, remove 0 elements, add element from starting position

colors.splice(1, 2, "pink", "grey");
console.log(colors);
// starting from position 1, remove 2 elements, add element from starting position

// Slice: slice a part of an array and start a new array
let favorite = colors.slice(2);
console.log(favorite);
console.log(colors);

let favorite1 = colors.slice(0, 2);
// Specify range of positions for slice method - start at position 0 and slice out 2 elements

// toString Method:
let colorsString = colors.toString();
console.log(colorsString);

// User-interface Functions:

// Alert:
console.log("Before alert");
alert("This is an alert, stops execution of script until user clicks OK");
// Page still loads, HTML text did not load, last console log didnt load
console.log("After Alert");

// Confirm:
console.log("Before Confirm");
let userAnswer = confirm("Are you over 18?");
console.log(userAnswer);
// Logs the confirm type within variable (true or false)

// Prompt:
let userPrompt = prompt("What is your username?");
console.log("welcome to the website: " + userPrompt);
