async function handleClick( ){
    showLoadingSpinner();

    const randomNumber = Math.floor(Math.random()* 83)+ 1;
    const url = `https://www.swapi.tech/api/people/${randomNumber}`
    try { 
        const res = await fetch(url)
        const resJson = await res.json()
        const { name, height, gender, birth_year, homeworld } = resJson.result.properties;
        const homeworldName = await fetchHomeWorld(homeworld);
        displayProperties(name, height, gender, birth_year, homeworldName);
    } catch(err){
        console.error(err);

        const container = document.querySelector(".infoContainer");

        container.innerHTML = "Oh No! That person isn't available"
        
    }
};

async function fetchHomeWorld (homeworld){
    try {
        const res = await fetch(homeworld)
        const resJson = await res.json()
        const homeworldName = resJson.result.properties.name
        return homeworldName
    } catch (error) {
        console.error(error)
    }

};

function displayProperties(name, height, gender, birth_year, homeworldName){
    const container = document.querySelector(".infoContainer");

    container.innerHTML = 
             `<h2>Name: ${name}</h2>
             <p>Height: ${height}</p>
             <p>Gender: ${gender}</p>
             <p>Birth Year: ${birth_year}</p>
             <p>Homeworld: ${homeworldName}</p>`;
};

const button = document.querySelector("#button");

button.addEventListener("click", handleClick);

function showLoadingSpinner(){
    const container = document.querySelector(".infoContainer");

    container.innerHTML = ` <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>Loading...</div>
    `;
}

