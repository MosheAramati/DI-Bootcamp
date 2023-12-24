// Conditionals

// If Statement
// Example:

// If True:
// let age = 20;
// if (age >= 18) {
//   console.log("You are an adult");
// }

// If ... Else
// age = 18;
// if (age > 18) {
//   console.log("You're an adult");
// } else if (age < 18) {
//   console.log("You are still a child, enjoy your youth...");
// } else {
//   console.log("You just became an adult, congrats");
// }

// let username = prompt("What is your name?");
// if (username === "Bob") {
//   console.log("Welcome Bob");
// } else if (username === "Sam") {
//   console.log("Welcome Sam");
// } else {
//   console.log("Welcome new user");
// }

// Switch Case: Checks type & element to be the same (===)

// let fruit = prompt("Choose a fruit: Mangos, Oranges, Papayas");

// switch (fruit) {
//   case "Oranges":
//     console.log("Oranges are $0.59 per Kilo");
//     break;
//   case "Mangos":
//   case "Papayas":
//     console.log("Mangos and Papayas are $2.79 a kilo");
//     break;
//   default:
//     console.log("Sorry we are out of " + fruit);
// }

// Objects: Organized way to keep data (related data, unrelated, order related)

// Storing data in arrays:
let colors = ["red", "blue", "green"];

// Objects have Key & Value Pairs:
let person = {
  // key: pair
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "Blue",
};

// accessing the object value through key: (dot notation)
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.eyeColor);

// Example using dot notation in a sentence:
console.log(
  "The persons full name is: " + person.firstName + " " + person.lastName
);

// accessing the object value through key: (bracket notation)
console.log(person["firstName"]);

// Adding / Changing Object properties

// Default object properties
let user = {
  firstName: "Jane",
  lastName: "Doe",
  age: 40,
  eyeColor: "Blue",
};
console.log(user);

// Changing value of properties
user.firstName = "Sarah";
user.eyeColor = "Green";
console.log(user);
delete user.age;
console.log(user);

// Parents & Children within an object
let family = {
  firstName: "John",
  lastName: "Doe",
  children: {
    eldest: "Sam",
    youngest: "Rivka",
  },
  favoriteFoods: ["Pizza", "Burger", "Tortillas"],
};

// Access the children within the Parent object:
console.log(family.children);
// Access a specific child withint the parent object (eldest key):
console.log(family.children.eldest);
// Changing the objects within a property (Key:Value)
family.favoriteFoods[2] = "Banana";
console.log(family);
