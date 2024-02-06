const fromSelect = document.getElementById("from")
const toSelect = document.getElementById("to")
const button = document.querySelector("button")
const input = document.querySelector("input")
const p = document.querySelector("p")

button.addEventListener('click', handleClick)


function fetchCurrencies(){
    const url = "https://v6.exchangerate-api.com/v6/0e6d85b0ccde2e34f956a333/codes"
    fetch(url)
    .then((res)=> res.json())
    .then((res)=> pupulateDropdown(res.supported_codes))
    .catch((err)=> console.log(err))
}

fetchCurrencies()

function pupulateDropdown(codes){
   
    const entries = Object.entries(codes)

    for (const entry of entries){
        const [index, [code, name]]= entry;

        const option = document.createElement("option")
        option.innerHTML =code +", "+ name
        option.value = code
        fromSelect.appendChild(option);

        const option2 = document.createElement("option")
        option2.innerHTML =code +", "+ name
        option2.value = code
        toSelect.appendChild(option2)
    }
};



async function handleClick(){
    const from =fromSelect.value
    const to = toSelect.value

    const url = `https://v6.exchangerate-api.com/v6/0e6d85b0ccde2e34f956a333/pair/${from}/${to}`
    try {
        const res =await fetch(url)
        const resJson = await res.json()
        const rate = resJson.conversion_rate
        const amount = Number(input.value)
        const total = amount*rate
        console.log(total)
        p.innerHTML = total
    } catch (error) {
        
    }
}