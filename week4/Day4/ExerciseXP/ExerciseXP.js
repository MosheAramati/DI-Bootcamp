// // Exercise 1 : Users
// // Instructions

// // Using Javascript:
// //1. Retrieve the div and console.log it
// const div = document.querySelectorAll("div")
// console.log(div[0].innerHTML)

// //2. Change the name “Pete” to “Richard”.
// const li = document.getElementsByTagName("li")
// li[1].innerText = "Richard"
// console.log(li[1].innerText)

// //3. Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
// const ul = document.getElementsByTagName("ul")[1];
// const saraLI = ul.children[1]
// ul.removeChild(saraLI)
// console.log(li[3].innerText)

// //4. Change each first name of the two <ul>'s to your name. (Hint : use a loop)
// const allUl = document.querySelectorAll("ul.list");

// for (let i = 0; i < allUl.length; i++) {
//     let firstLi = allUl[i].querySelector("li")
//     if (firstLi) {
//     firstLi.textContent = "Moshe"
//     }
// }

// // Bonus - Using Javascript:
// // Add a class called student_list to both of the <ul>'s.
// // Add the classes university and attendance to the first <ul>.
// for (let i = 0; i < allUl.length; i++){

// allUl[i].classList.add("student_list")
// }
// allUl[0].classList.add("university", "attendance")

// // 🌟 Exercise 2 : Users And Style
// // Instructions


// // Using Javascript:
// //1. Add a “light blue” background color and some padding to the <div>.
// const myDiv = document.querySelector("div");
// myDiv.style.backgroundColor = "lightblue"

// //2. Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)
// let liJohn = document.querySelector("li")
// if (liJohn.textContent === "John"){
//     liJohn.style.display = "none"
// }

// //3. Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)
// const liPete = document.querySelectorAll("li")
// liPete[1].style.border = "2px solid black"

// //4. Change the font size of the whole body.
// const body = document.querySelector("body")
// body.style.fontFamily = "Montserrat, sans-serif"

// // Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).


// Exercise 3 : Change The Navbar
// Instructions

//1. Add the code above, to your HTML file

// //2. Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
// const div = document.querySelector("#navBar")
// div.setAttribute("id", "socialNetworkNavigation" )

// //3. We are going to add a new <li> to the <ul>.
// //- First, create a new <li> tag (use the createElement method).
// //- Create a new text node with “Logout” as its specified text.
// //- Append the text node to the newly created list node (<li>).
// //- Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
// const newLi = document.createElement("li")
// newLi.textContent = ("Logout")
// const ul = document.getElementsByTagName("ul")
// ul[0].appendChild(newLi)

// //4. Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
// const firstElementChild = ul[0].firstElementChild
// console.log(firstElementChild.textContent)
// const lastElementChild = ul[0].lastElementChild
// console.log(lastElementChild.textContent)


// Exercise 4 : My Book List
// Instructions
// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

//1. In the body of the HTML page, create an empty div:
//2. In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :

const allBooks = [
    {
      title: "Hunger Games",
      author: "Unknown",
      image: "https://example.com/image1.jpg",
      alreadyRead: false
    },
    {
      title: "Another Book",
      author: "Some Author",
      image: "https://example.com/image2.jpg",
      alreadyRead: true
    }
  ];

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.