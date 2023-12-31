// 🌟 Exercise 1: Timer 
// Instructions
// Part I
//1. In your Javascript file, using setTimeout, call a function after 2 seconds.
//2. The function will alert “Hello World”.

//(HTML IN EXERCISE-1)

// function showMesage(){
//     alert("Hello word")
// }

//setTimeout(showMesage, 2*1000)

// Part II
//1. In your Javascript file, using setTimeout, call a function after 2 seconds.
//2. The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

// const div = document.querySelector("#container")

// function addParagraph(){
//     const p = document.createElement("p")
//     p.innerText = "Hello World"
//     div.appendChild(p)
// }

// setTimeout(addParagraph, 2*1000)

// Part III
//1. In your Javascript file, using setInterval, call a function every 2 seconds.
//2 The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
//3. The interval will be cleared (ie. clearInterval), when the user will click on the button.
//4. Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

// const interval = setInterval(addParagraph, 2*1000);

// const div = document.querySelector("#container");
// const button = document.querySelector("button");
// button.addEventListener("click", cInterval);

// function cInterval(){
//     clearInterval(interval);
// };


// function addParagraph(){
//     const p = document.createElement("p")
//     p.innerText = "Hello World"
//     div.appendChild(p)

//     const ps = document.getElementsByTagName("p")

//     if (ps.length >= 5){
//         clearInterval(interval);
//     }
// };

// 🌟 Exercise 2 : Move The Box 
// Instructions
//1. Copy the code above, to a structured HTML file.
//2. In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions

//(HTML IN EXERCISE-2)

// function animation(){
//     const square = document.querySelector("#animate")
//     let moveLenght = 0

//     let movment = setInterval(function(){
//         if(moveLenght === 350){
//             clearInterval(movment)
//         }
//         moveLenght ++
//         square.style.left = `${moveLenght}px`
//     }, 1);
// }

// const button = document.querySelector("button")
// button.addEventListener("click", animation)

// 🌟 Exercise 3: Drag & Drop
// Instructions
// Copy the code above, to a structured HTML file.
// In your Javascript file add the functionality which will allow you to drag the box and drop it into the target. Check out the Course Notes named DOM animations.

//(HTML IN EXERCISE-3)

function onDragStart4square(event){
    console.log("start")
}

function onDragEnd4square(event){
    console.log("end")
}

function onDrag4Square(event){
    console.log()

}









// const square = document.querySelector("#box")
// const target = document.querySelector("#target")

// function handleDragStart(event){
//     event.dataTransfer.setData("text/plain", event.target.id);
// }

// function handleDragOver(event) {
//     event.preventDefault();
//   }

//   function handleDrop(event) {
//     event.preventDefault();
//     const data = event.dataTransfer.getData('text/plain');
//     const draggedElement = document.getElementById(data);
//     dropzone.appendChild(draggedElement);
//   }

//   square.addEventListener('dragstart', handleDragStart);
//   target.addEventListener('dragover', handleDragOver);
//   target.addEventListener('drop', handleDrop);
