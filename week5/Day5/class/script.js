function onDragStartForPinkSquare(event) {
  console.log("start");
  event.dataTransfer.setData("text/plain", event.target.id);
}

function onDragEndForPinkSquare(event) {
  console.log("end");
}

function onDragForPinkSquare(event) {
  event.target.textContent = event.clientX + " " + event.clientY;
}

function onDragOverForOrangeSquare(event) {
  event.preventDefault();
  event.dataTransfer.setData("text/plain", event.target.id);
  console.log("Over orange");
}

function OnDropOverOrangeSquare(event) {
  console.log("dropped orange");

const id = event.dataTransfer.getData("text/plain");
console.log(id);

const pinkSquare = document.getElementById(id)
console.log(pinkSquare);

event.target.appendChild(pinkSquare)
}


