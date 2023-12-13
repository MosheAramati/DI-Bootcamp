//Exercise 1 (if/else/else if)

let driver = 17
if (driver < 18) {
    console.log("Sorry, you are too young to drive this car.")
} else if (driver == 18) {
    console.log("Congratulations on your first year of driving. Enjoy the ride!")
} else {
    console.log("Powering on. Enjoy your ride!")
}

//Exercise 2 (object)

let user ={
    userName: "musa",
    password: "123",
}

let database = [user]

let neewsfeed = [
    { userName:"moshe", timeline: "1-2" },
    { userName:"jay", timeline: "1-3" }, 
    { userName:"john", timeline: "1-4" },  
]

console.log(neewsfeed[1].userName)