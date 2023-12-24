// Exercise 1 : Information
// Instructions
// Part I : function with no parameters

// 1. Create a function called infoAboutMe() that takes no parameter.
//2. The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
//3. Call the function.

function infoAboutMe(){
    console.log("My name is Moshe, my age is 27");
}
infoAboutMe()



// Part II : function with three parameters

//1. Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
//2. The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
function infoAboutPerson(personName, personAge, personFavoriteColor){
    console.log("your name is " + personName + " you are " + personAge + " years old, your favorite color is " + personFavoriteColor);
}

//3. Call the function twice with the following arguments:
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")

// Exercise 2 : Tips
// Instructions
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

//1. Create a function named calculateTip() that takes no parameter.

//2. Inside the function, use prompt to ask John for the amount of the bill.

//3. Here are the rules
//- If the bill is less than $50, tip 20%.
//- If the bill is between $50 and $200, tip 15%.
//- If the bill is more than $200, tip 10%.

//4. Console.log the tip amount and the final bill (bill + tip).

//5. Call the calculateTip() function.

function calculateTip(){
    const amountOfTheBill = parseInt(prompt("How much was the bill?"));
   if (amountOfTheBill < 50){
    console.log("Your final price is " +((amountOfTheBill * 0.2)+ amountOfTheBill))
   } else if ( amountOfTheBill >= 50 && amountOfTheBill <= 200){
    console.log("Your final price is " +((amountOfTheBill * 0.15)+ amountOfTheBill))
   } else if (amountOfTheBill > 200){
    console.log("Your final price is " +((amountOfTheBill * 0.1)+ amountOfTheBill))
   }
}

//calculateTip()

// Exercise 3 : Find The Numbers Divisible By 23
// Instructions
//1. Create a function call isDivisible() that takes no parameter.

//2. In the function, loop through numbers 0 to 500.

//3. Console.log all the numbers divisible by 23.

//4. At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313

function isDivisible(){
    let outcome = [];
   for(let i=0;i<=500;i++){
        if( i % 23 === 0){
            outcome.push(i) ;
        }
    }
    console.log(outcome)
    let sum = 0;
for (let num of outcome) {
    sum += num;
}
console.log("The sum of all numberes that are divisible by 23 is " + sum)
}
isDivisible ()

//5. Bonus: Add a parameter divisor to the function.

function isDivisible2(divisor){
    let outcome = [];
   for(let i=0;i<=500;i++){
        if( i % divisor === 0){
            outcome.push(i) ;
        }
   }
    console.log(outcome)
    let sum = 0;
for (let num of outcome) {
    sum += num;
}
console.log("The sum of all numberes that are divisible by " + divisor + " is " +sum)
}

isDivisible2(3) 
isDivisible2(45)

// Exercise 4 : Shopping List
// Instructions

//1. Add the stock and prices objects to your js file.
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

//2. Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

//3. Create a function called myBill() that takes no parameters.

//4. The function should return the total price of your shoppingList. In order to do this you must follow these rules:
//- The item must be in stock. (Hint : check out if .. in)
//- If the item is in stock find out the price in the prices object.

//5. Call the myBill() function.

// Bonus: If the item is in stock, decrease the item’s stock by 1

let shoppingList = ["banana", "orange", "apple"]

function myBill(){
    let billPrices = []
    for (const fruit of shoppingList){
        if (fruit in stock && stock[fruit] !== 0){
            billPrices.push(prices[fruit]);
        }else {
            console.log("we dont have " + fruit + " on stock")
        }
    }
    let finalBill = 0;
    for (let num of billPrices) {
        finalBill += num;
    }

    console.log("The price of your shoppingcart is " + finalBill)
}

myBill()


// Exercise 5 : What’s In My Wallet ?
// Instructions
// Note: Read the illustration (point 4), while reading the instructions

//1. Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
//- an item price
//- and an array representing the amount of change in your pocket.

//2. In the function, determine whether or not you can afford the item.
//- If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
//- If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

//3. Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01

function changeEnough(itemPrice, amountOfChange){

    let coinValues = [0.25, 0.10, 0.05, 0.01]; 
    let sumChange = 0;

    for (let i = 0; i < amountOfChange.length; i++) {
        sumChange += amountOfChange[i] * coinValues[i];
    }
    if (sumChange >= itemPrice){
        return true,
        console.log(true);
    } else  {
       return false,
       console.log(false);
    }
}

// 4. To illustrate:

// After you created the function, invoke it like this:

changeEnough(4.25, [25, 20, 5, 0])

//- The value 4.25 represents the item’s price
//- The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
//- The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)


// Examples
changeEnough(14.11, [2,100,0,0]) //=> returns false
changeEnough(0.75, [0,0,20,5]) //=> returns true

// Exercise 6 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

//1. Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.
function hotelCost() {
    do { numberOfNights = parseInt(prompt("How many nights will you be staying?"));
    }while (isNaN(numberOfNights));

    let totalCost = numberOfNights * 140;
    console.log("The cost of your stay is: $" + totalCost);
    return totalCost;
}

//hotelCost()

//2. Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$


function planeRideCost() {
    let destination;

    do {
        destination = prompt("Where are you going?");
    } while (typeof userInput === 'string'|| destination.trim() === ''|| !isNaN(destination));

    if (destination === "london") {
            console.log("Your ride cost is $183");
            return 183;
    } else if (destination === "paris") {
            console.log("Your ride cost is $220");
            return 220;
    } else {
            console.log("Your ride cost is $300");
            return 300;
    }
}

//planeRideCost();

//3. Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

function rentalCarCost(){
    do { numberOfDays = parseInt(prompt("How many days you'll be renting?"));
   }while (isNaN(numberOfDays));

    const carCost = numberOfDays * 40 ;
     if (numberOfDays > 10){
        console.log("your rental will be $" + (carCost*0.05));
        return carCost - (carCost*0.05);
     }else {
        console.log("your rental will be $" + carCost);
        return carCost;
     }
}

//rentalCarCost()

//4. Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

function totalVacationCost() {
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCarCost();
  
    const totalCost = hotel + plane + car;
    
    console.log("the total cost of you vacation is $" + totalCost)
    return totalCost;
  }


//5. Call the function 

//totalVacationCost()

//6. Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.
