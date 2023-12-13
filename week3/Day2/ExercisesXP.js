//Exercise 1
//Store your favorite food into a variable.

// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

// Console.log I eat <favorite food> at every <favorite meal>

let favoriteFood = "sushi"
let favoriteMeal = "dinner"

console.log("I eat " + favoriteFood + " " + "every day at " + favoriteMeal);

//Exercise 2
// Part I
// Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory

// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

let myWatchedSeriesLength = myWatchedSeries.length

let myWatchedSeriesSentence = "black mirror, money heist, and the big bang theory"

console.log("I watch " + myWatchedSeriesLength + " " + "seriers that were: " + myWatchedSeriesSentence)


// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
// Add, at the end of the array, the name of another series you watched.
// Add, at the beginning of the array, the name of your favorite series.
// Delete the series “black mirror”.
// Console.log the third letter of the series “money heist”.
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.

// const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

myWatchedSeries[2] = "friends";
console.log(myWatchedSeries);

myWatchedSeries.push("The boys");
console.log(myWatchedSeries);

myWatchedSeries.splice(0, 0, "two and a half man");
console.log(myWatchedSeries);

myWatchedSeries.splice(1,1);
 console.log(myWatchedSeries);

console.log(myWatchedSeries[1][2]);

//Exercise 3
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32

// let celsiusTemperature =  "10"

// let fahrenheitTemperature = (celsiusTemperature/5*9+32)

// console.log(fahrenheitTemperature)

let celsiusTemperature, fahrenheitTemperature;
celsiusTemperature = 10
fahrenheitTemperature = (celsiusTemperature/5*9+32)

console.log(fahrenheitTemperature)

//Exercise 4
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: 55 because a and b have number values
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: 23 because the value of a is was changed to 2
// Actual: 2

// What will be the outcome of a + b in the first expression ?
//55
// What will be the outcome of a + b in the second expression ?
//23
// What is the value of c?
//undefined

// Analyse the code below, what will be the outcome?
console.log(3 + 4 + '5');
// 75 because is indicating 4+3 and '5' as a diferents objects

//Exercise 5
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

console.log(typeof(15))
// Prediction: number
// Actual: number

console.log(typeof(5.5))
// Prediction: decimal
// Actual: number

console.log(typeof(NaN))
// Prediction:
// Actual: number

console.log(typeof("hello"))
// Prediction: string
// Actual: string

console.log(typeof(true))
// Prediction: boolean
// Actual: boolean

console.log(typeof(1 != 2))
// Prediction:
// Actual: boolean

console.log("hamburger" + "s")
// Prediction: hamburguers
// Actual: hamburguers

console.log("hamburgers" - "s")
// Prediction: hamburguer
// Actual: NaN

console.log("1" + "3")
// Prediction:13
// Actual:

console.log("1" - "3")
// Prediction:-2
// Actual:-2

console.log("johnny" + 5)
// Prediction: johnny5
// Actual: johnny5

console.log("johnny" - 5)
// Prediction: j
// Actual: NaN

console.log(99 * "hello")
// Prediction: NaN
// Actual: NaN

console.log(1 != 1)
// Prediction:
// Actual:false

console.log(1 == "1")
// Prediction: true
// Actual:true

console.log(1 === "1")
// Prediction:false
// Actual: false

//Exercise 6
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

//What is the output of each of the expressions below?


console.log(5 + "34")
// Prediction: 534
// Actual: 534

console.log(5 - "4")
// Prediction: 1
// Actual:

console.log(10 % 5)
// Prediction: 2
// Actual: 0

console.log(5 % 10)
// Prediction: 0.5
// Actual: 5

console.log("Java" + "Script")
// Prediction: JavaScript
// Actual:

console.log(" " + " ")
// Prediction:   
// Actual:

console.log(" " + 0)
// Prediction: 0
// Actual:

console.log(true + true)
// Prediction: True
// Actual: 2

console.log(true + false)
// Prediction: 2
// Actual: 1

console.log(false + true)
// Prediction: 1
// Actual: 1

console.log(false - true)
// Prediction:-1
// Actual:

console.log(!true)
// Prediction: false
// Actual: false

console.log(3 - 4)
// Prediction: -1
// Actual: -1

console.log("Bob" - "bill")
// Prediction: NaN
// Actual: NaN

















