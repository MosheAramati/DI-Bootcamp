// Instructions
// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.

// In this exercise you work with the HTML code presented below.

// Follow these steps :

//1. Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
//2. Make sure the values are not empty
//3. Write a story that uses each of the values.
//4. Make sure you check the console for errors when playing the game.
//5. Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.


const story = document.querySelector("#story");
const button = document.querySelector("button");
const shuffleButton = document.querySelector("shuffle");

function storyTeller(event){
    event.preventDefault();

    const noun = document.querySelector("#noun").value;
    const adjective = document.querySelector("#adjective").value;
    const someoneName = document.querySelector("#person").value;
    const place = document.querySelector("#place").value;
    const verb = document.querySelector("#verb").value;

    if (noun.length > 0 && adjective.length > 0 && someoneName.length > 0 && place.length > 0 && verb.length > 0){
        story.innerHTML = `In a ${adjective} ${place}, ${someoneName} stumbled upon a peculiar ${noun}. Intrigued, ${someoneName} decided to ${verb} the ${noun}. in the middle of the ${adjective} landscapes of ${place}, ${someoneName} embarked on an unforgettable journey, forever changed by the experience.`
    }
};
button.addEventListener("click", storyTeller)


function getRandomStory() {
const randomIndex = Math.floor(Math.random() * stories.length);
return stories[randomIndex];
    }

function shuffle(event){
    event.preventDefault();

    const noun = document.querySelector("#noun").value;
    const adjective = document.querySelector("#adjective").value;
    const someoneName = document.querySelector("#person").value;
    const place = document.querySelector("#place").value;
    const verb = document.querySelector("#verb").value;
    const stories = [
        `In a ${adjective} land, ${someoneName} stumbled upon a mystical ${noun}. Captivated, ${someoneName} decided to ${verb} the ${noun}. Amidst the ${adjective} landscapes of ${place}, ${someoneName} embarked on a transformative journey, forever marked by the adventure.`,
        `Through the ${adjective} forest, ${someoneName} encountered a shimmering ${noun}. Intrigued, ${someoneName} chose to ${verb} the ${noun}. In the heart of ${place}, ${someoneName} experienced an extraordinary journey, forever influenced by the quest.`, 
        `In a ${adjective} city, ${someoneName} stumbled upon an ancient ${noun}. Fascinated, ${someoneName} decided to ${verb} the ${noun}. Amidst the ${adjective} streets of ${place}, ${someoneName} embarked on an unforgettable journey, forever changed by the discovery.` ]
    

       
    
        story.innerHTML = getRandomStory();
    
 
}

shuffleButton.addEventListener("click", shuffle)