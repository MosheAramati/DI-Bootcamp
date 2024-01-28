// 🌟 Exercise 1 : Location
// Instructions
// Analyze the code below. What will be the output?
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

//with the destructuring it was asign a name to the respectives values of the object in that way it can be uses ad variables to complete the string

// 🌟 Exercise 2: Display Student Info
// Instructions
function displayStudentInfo(obj){
    console.log(`Your full name is ${first} ${last}`);
};

//1 Using the code above, destructure the parameter inside the function and return a string as the example seen below:
// //output : 'Your full name is Elie Schoppik'
const user ={
    first: 'Elie', 
    last:'Schoppik'
};

const {first, last} = user;

displayStudentInfo(user);


// 🌟 Exercise 3: User & Id
// Instructions
// Using this object 

const users1 = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.
const usersArr = Object.entries(users1)
console.log(usersArr);

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

const idX2 = usersArr.map(([key,id])=>[key, id*2])
console.log(idX2);

// 🌟 Exercise 4 : Person Class
// Instructions
// Analyze the code below. What will be the output?
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);

// it return object because member is a class and a class is kind of object.

// 🌟 Exercise 5 : Dog Class
// Instructions
// Using the Dog class below:

class Dog {
  constructor(name) {
    this.name = name;
  }
};
//1. Analyze the options below. Which constructor will successfully extend the Dog class?
   // 1
// class Labrador extends Dog {
//     constructor(name, size) {
//       this.size = size;
//     }
//   };
// it need the super so it can calm the cunstruction of dog
  
  
    // 2
  class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };
  //this is the right one (call the constructor of dog with super and the new size is called wiyh this)
  
  
    // 3
//   class Labrador extends Dog {
//     constructor(size) {
//       super(name);
//       this.size = size;
//     }
//   };
// it woudn't assign a name for the dog
  
  
    // 4
//   class Labrador extends Dog {
//     constructor(name, size) {
//       this.name = name;
//       this.size = size;
//     }
//   };
//this cunstructor overright the name of the constructor in dog so it gives an error

const lab = new Labrador('Tommy', 'Big')

console.log(lab);

// 🌟 Exercise 6 : Challenges
// Evaluate these (ie True or False)

console.log([2] === [2]); 
console.log({} === {});
// In both is returning false because we are dealing with object and the values are passed by reference.

// What is, for each object below, the value of the property number and why?

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)
console.log(object3.number)
console.log(object4.number)
// becase we are dealing with "objects" the values are passed by reference wich mean the object 2 and 3 has the reference value of object one wich means object 1, 2 and 3 has the same number wich is 4, object 4 has it own reference wich means it stays 5.

//1. Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …

class Animal {
    constructor(name, type, color){
        this.name = name ;
        this.type = type;
        this.color = color;
    }
};

//2. Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

class Mamal extends Animal {
    constructor(name, type, color){
        super(name, type, color);
    }
    sound(sound){
        console.log(`${sound} I'm a ${this.type}, named${this.name} and I'm ${this.color}`);
    }
};

//3. Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white

const farmerCow = new Mamal('Lily', 'Cow', 'brown and white')
farmerCow.sound('Mooo')