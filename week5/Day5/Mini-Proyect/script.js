let colorCol = 3;
let colorRow = 8;
let color_count = colorCol * colorRow;

const sideBar = document.querySelector("#sideBar");
const clear = document.querySelector("#clear");

let color = null;
let isMouseDown = false;

for (i = 0; i < color_count; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = generateRandomColor();
    div.addEventListener("click", function(event){
        color = event.target.style.backgroundColor;
    })
    sideBar.appendChild(div);   
}


const squares = document.querySelectorAll("#main  div")

squares.forEach(square =>{
    square.addEventListener("mousedown", function() {
        isMouseDown = true;
        this.style.backgroundColor = color;
    });

    square.addEventListener("mouseover", function() {
        if (isMouseDown) { 
            this.style.backgroundColor = color;
        }
    });

    square.addEventListener("mouseup", function() {
        isMouseDown = false;
    });

});

function generateRandomColor(){
    let letters = "0123456789ABCDEF"
    let color ="#"
    for (let i=0; i<6; i++){
        let random = Math.floor(Math.random() * 16);
        color += letters[random];
    }
    return color;
}

clear.addEventListener("click", function(){
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
});






