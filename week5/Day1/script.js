// DOM-- Events

// function handleClick (){
//     console.log ("hey")
// }

// function handelInput(event){
//     console.log(event.target.value);
// }

// function handelEnter(e){
//     e.target.style.backgroundColor = "pink";
// }

// function handelEnter(e){
//     e.target.style.background;
// }

// function addRow (){
//     const table = document.querySelector("table")
//     const row = document.createElement("tr")
//     table.appendChild(row)

//     const td = document.createElement("td")
//     row.appendChild(td)
//     const td1 = document.createElement("td")
//     row.appendChild(td1)
// }

// function addRow (){
//     const table = document.querySelector("table")
//     const row = document.querySelector("tr");
//     const newRow = row.cloneNode(true);
//     table.appendChild(newRow)
// }

const root = document.getElementById("root")
const but = document.createElement("button")
const but1 = document.createElement("button")
but.innerText ="Click me"
but1.innerText ="Click me 1"

but.addEventListener("click", function(event) {
    root.style.backgroundColor = "yellow";
    changeBG("yellow");
  
})
but1.addEventListener("click", function(event) {
    root.style.backgroundColor = "red";
    changeBG("red");
   
})

root.appendChild(but)
root.appendChild(but1)


function changeBG(color){
    root.style.backgroundColor = color
}