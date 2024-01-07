let colorCol = 3;
let colorRow = 8;
let color_count = colorCol * colorRow;

const sideBar = document.querySelector("#sideBar");
const clear = document.querySelector("#clear");

let color = null;

for (i = 0; i < color_count; i++) {
    let div = document.createElement("div");
    div.style.backgroundColor = generateRandomColor();
    div.addEventListener("click", function(event){
        color = event.target.style.backgroundColor;
    })
    sideBar.appendChild(div);
}

function generateRandomColor(){
    let letters = "0123456789ABCDEF"
    let color ="#"
    for (let i=0; i<6; i++){
        let random = Math.floor(Math.random() * 16);
        color += letters[random];
    }
    return color;
}

let col = 70
let ro