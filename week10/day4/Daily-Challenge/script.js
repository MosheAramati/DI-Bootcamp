// Daily Challenge: Gifs
// Instructions
//1. Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
//2. In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
//3. In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
//4. The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
//5. Allow the user to delete a specific gif by clicking the DELETE button.
//6. Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

const searchButton = document.getElementById("button");
const deleteAllButton = document.getElementById("deleteAll");
const gifsContainer = document.getElementById("gifs");

searchButton.addEventListener("click", fetchGif);
deleteAllButton.addEventListener("click", deleteAllGifs);

async function fetchGif (e){
    e.preventDefault()
    const searchTerm = document.getElementById("input").value.trim().replace(/\s/g, "&");
    const url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
    try {
        const res = await fetch(url)
        const resJson = await res.json()
        const RandomIndx = Math.floor(Math.random() * (resJson.data.length));
        console.log(resJson.data.length);
        console.log(resJson.data[RandomIndx].images.original.url);
        const gifUrl =resJson.data[RandomIndx].images.original.url
        const gifElement = createGifElement(gifUrl);
        gifsContainer.insertBefore(gifElement, gifsContainer.firstChild);
    } catch (error) {
        console.log(error)
    }
}


function createGifElement(url) {
    const gifElement = document.createElement("div");
    const img = document.createElement("img");
    const deleteButton = document.createElement("button");

    img.src = url;
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        gifElement.remove();
    });

    gifElement.appendChild(img);
    gifElement.appendChild(deleteButton);

    return gifElement;
}

function deleteAllGifs() {
    gifsContainer.innerHTML = "";
}