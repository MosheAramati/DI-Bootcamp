// 🌟 Exercise 1 : Change The Article
// Instructions

// //1. Using a DOM property, retrieve the h1 and console.log it.
// const h1 = document.querySelector("h1")
// console.log(h1.innerText)

// //2. Using DOM methods, remove the last paragraph in the <article> tag.
// const article = document.querySelector("article")
// const lastP = document.querySelectorAll("p")[3]
// article.removeChild(lastP)

// //3. Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
// const h2 = document.querySelector("h2")

// function handleClick(){
//     h2.style.backgroundColor = "red"
// };

// h2.addEventListener("click", handleClick);

// //4. Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
// const h3 = document.querySelector("h3")

// function deleteH(){
//     h3.style.display = "none";
// };

// h3.addEventListener( "click", deleteH);

// //5. Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
// const button = document.querySelector("button")
// const ps = document.querySelectorAll("p") 

// function makeBold(){
//     for (i=0; i<ps.length; i++){
//         ps[i].style.fontWeight = "bold"
//     }
// };

// button.addEventListener("click", makeBold);


// //6. BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
// function randomNumber(){
//     return Math.floor(Math.random() * 10) + 1;
// }

// function changeSize(){
//     h1.style.fontSize = `${randomNumber()}px`
// }

// h1.addEventListener("mouseover", changeSize)
//7. BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

// 🌟 Exercise 2 : Work With Forms
// Instructions

// //1. Retrieve the form and console.log it.
// const form = document.querySelector("form")
// console.log(form)

// //2. Retrieve the inputs by their id and console.log them.
// const fName = document.querySelector("#fname")
// console.log(fName)
// const lName = document.querySelector("#lname")
// console.log(lName)
// const submit = document.querySelector("#submit")
// console.log(submit)


// //3. Retrieve the inputs by their name attribute and console.log them.
// const fName1 = document.getElementsByName("firstname")[0]
// console.log(fName1)
// const lName1 = document.getElementsByName("lastname")[0]
// console.log(lName1)


// //4. When the user submits the form (ie. submit event listener)
// //- use event.preventDefault(), why ?
// //- get the values of the input tags,
// //- make sure that they are not empty,
// //- create an li per input value,
// //- then append them to a the <ul class="usersAnswer"></ul>, below the form.
// // The output should be :


// const ul = document.querySelector("ul")

// function VaulesSubmition(event){
//     event.preventDefault();

//     const fNameValue = fName.value
//     const lNameValue = lName.value
    
//     if (fNameValue.length > 0 && lNameValue.length > 0){
//         const liFName = document.createElement("li")
//         liFName.textContent = fNameValue
//         ul.appendChild(liFName)

//         const liLName = document.createElement("li")
//         liLName.textContent = lNameValue
//         ul.appendChild(liLName)

//         fNameValue = "";
//         lNameValue = "";

//     }
// };

// submit.addEventListener("click", VaulesSubmition);

// 🌟 Exercise 3 : Transform The Sentence
// Instructions

// // In the JS file:
// //1. Declare a global variable named allBoldItems.
// const allBoldItems = []
// console.log(allBoldItems)

// //2. Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
// const boldItems = document.querySelectorAll("strong")

// function getBoldItems(){
//     for (let i=0; i < boldItems.length; i++){
//         allBoldItems.push(boldItems[i].textContent);
//     }
// };
// getBoldItems()
// console.log(allBoldItems)

// //3. Create a function called highlight() that changes the color of all the bold text to blue.
// function highlight(){
//     for (let i=0; i < boldItems.length; i++){
//         boldItems[i].style.color = "blue"
//     }
// }
// //4. Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.
// function returnItemsToDefault(){
//     for (let i=0; i < boldItems.length; i++){
//         boldItems[i].style.color = ""
//     }
// }
// //5. Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example
// const p =document.querySelector("p")

// p.addEventListener("mouseover", highlight)
// p.addEventListener("mouseout", returnItemsToDefault)

// 🌟 Exercice 4 : Volume Of A Sphere
// Instructions

//1. Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:

const radiusInput = document.querySelector("#radius");
const volumeInput = document.querySelector("#volume")
const button = document.querySelector("#submit")

function volumeCalculator(event){
    event.preventDefault();
    const radiusInputValue = parseInt(radiusInput.value);
    if (!isNaN(radiusInputValue) && radiusInputValue > 0) {
        const volume = (4 / 3) * Math.PI * Math.pow(radiusInputValue, 3);
        volumeInput.value = volume.toFixed(3);
    } else {
        radiusInput.value = "";
        volumeInput.value = "";
    }
}

button.addEventListener("click", volumeCalculator)


