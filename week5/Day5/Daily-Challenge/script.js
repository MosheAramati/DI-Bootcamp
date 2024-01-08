const form = document.querySelector("#form")
const ul = document.getElementById("ul")

form.addEventListener("submit", handlesubmit)
const tasks = [];

function handlesubmit(e){
    e.preventDefault();
    const task = document.querySelector("#task").value;
    if (task === "") return;
    tasks.push(task) ;
    renderTask(tasks)
    form.reset();
}

function renderTask(tasks){
    ul.innerHTML = ""
    for (const task of tasks){ 
       const li = generateLi(task)
        ul.append(li)
    }
}

function generateLi(task){
    const li = document.createElement("li")
    
    const xMark = document.createElement("i");
    xMark.classList.add("fa-solid", "fa-xmark");
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    const span = document.createElement("label");
    span.innerText = task;

    li.append(xMark, checkBox, span)
    return li;
}