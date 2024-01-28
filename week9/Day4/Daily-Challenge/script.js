// Daily Challenge : HTML Form
// Instructions
//1.  Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.

// const name = document.querySelector("#name")
// const lastName = document.querySelector("#lastName")

// const button = document.querySelector("#button")
document.querySelector("form").addEventListener("submit", submitDom)

function submitDom(e) {
    e.preventDefault()
    const formData = new FormData(document.querySelector("form"));
    const entries = formData.entries()
    const data = Object.fromEntries(entries)
    const dataJSON = JSON.stringify(data);

    const div = document.querySelector("div");
    div.innerHTML = dataJSON;
};

