// 🌟 Exercise 1 : HTML Form
// Instructions
//1. Create a form like the one above. The form should contain three inputs:
// a small text input asking for a name,
// a larger textarea input to write a message,
// a submit input (“Send”)

//2. When you click the Send button, the form will be submitted with a GET method. (you can use the same HTML file for the action url)
//3. Where will the sent data appear?
// The data is sent to the url and they are being passed as Query Strings Parameters.

// 🌟 Exercise 2 : HTML Form #2
// Instructions
// Use the same form structure as Exercise 1.
// When you click the Send button, the form will be submitted with a POST method.(you can use the same HTML file for the action url)
// Where will the sent data appear? Hint : Look at the Network Tab
//  The data is sent as a form data in the payload

// 🌟 Exercise 3 : JSON Mario
// Instructions
// Using this code:

const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}


// Convert this JS object into a JSON object. What happens to the nested objects ?

// Resp: Because we converted it in to a JSON object now all is stringified wich means that even the nested objects are in string form.

// Convert and pretty print this JS object into a JSON object. Hint : Check out the JSON lesson on the platform.

// Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger.

const stringified = JSON.stringify(marioGame, null, 5)
console.log(stringified);

