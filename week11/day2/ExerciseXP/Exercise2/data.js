// 🌟 Exercise 2: Advanced Module Usage Using ES6 Module Syntax
// Instructions
//1. Create a file named data.js.

//2. Inside data.js, define an array of objects, each representing a person with properties like name, age, and location.

//3. Export the array using the ES6 module syntax.

//4. Create another file named app.js.

//5. In app.js, import the array of person objects from the data.js module.

//6. Write a function that calculates and prints the average age of all the persons in the array.

//7. Use the imported array and the average age function in app.js.

//8. Run app.js and confirm that the average age is correctly calculated and displayed.

const humans = [
    {
        name: "john",
        age: 24,
        location: "Israel"
    },
    {
        name: "lee",
        age: 25,
        location: "USA"
    }, {
        name: "joe",
        age: 23,
        location: "Venezuela"
    },
];

export default humans;
