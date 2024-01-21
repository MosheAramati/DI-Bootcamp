// Mini Project - Random Quote Generator
// Create a Random Quote Generator game in Javascript.

// Instructions
// Part 1 : Quote Generator
//1. Create an HTML file, that contains a section (for now the section is empty), and a button “Generate Quote”.

//2. In the Javascript file, create an array of objects. Each object has 3 keys : id, author and quote. The id must start at 0, and is incremented for every new quote. So the first quote will have the id 0, the second quote the id 1, the third quote the id 3 ect…

//3. Populate the array with a few quotes that you like.

//4. When the “Generate Quote” button is pressed, retrieve randomly a quote (ie. an object), and display it in the DOM - like the image above.
// Important: When clicking on the button, make sure you don’t display the same quote twice in a row.

let quotes = [
    { 
        id: 0, 
        author: "Albert Einstein", 
        quote: "The true sign of intelligence is not knowledge but imagination." ,
        likes: 0
    },
    { 
        id: 1, 
        author: "Maya Angelou", 
        quote: "If you don't like something, change it. If you can't change it, change your attitude." ,
        likes: 0
    },
    { 
        id: 2, 
        author: "Oscar Wilde", 
        quote: "Be yourself; everyone else is already taken.",
        likes: 0
    },
    { 
        id: 3, 
        author: "Mark Twain", 
        quote: "Twenty years from now you will be more disappointed by the things you didn't do than by the ones you did do." ,
        likes: 0
    },
    { 
        id: 4, 
        author: "Albert Einstein", 
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        likes: 0
    },
];

const button = document.querySelector("#button")

button.addEventListener('click', () => displayQuote(quotes));

let lastIndex = -1;

function displayQuote(arr) {

    let randomIndex;    
    do{
    randomIndex = Math.floor(Math.random() * arr.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;

    const randomQuote = arr[randomIndex];

    const sentence = `"${randomQuote.quote}"- ${randomQuote.author}`
    const p = document.querySelector('#quote')
    p.innerHTML = sentence

};

// Part 2 : Add Buttons

//1. In the HTML file, create a form with the inputs “Quote” and “Author” and a button. So when you click on the button, you can add a new quote to the array of object.
// Important: Don’t forget to set the id of the new quotes

const button1 = document.querySelector("#createQuote")

button1.addEventListener('click',addQuote);

function addQuote(){
    let newQuote = document.querySelector('#newQuote').value;
    let newAuthor = document.querySelector('#newAuthor').value;
    const newId = quotes.length

    if (newQuote ===''){
        alert('Please enter a valid quote.');
        return;
    };

    if (newAuthor ===''){
        alert('Please enter a valid author.');
        return;
    }

    const newObj =  { id: newId , author: newAuthor, quote: newQuote, likes: 0 };

    quotes.push(newObj);

    document.querySelector('#newQuote').value = '';
    document.querySelector('#newAuthor').value = '';

    console.log(quotes)
};

//2- In the HTML file, under the displayed quote, create a few more buttons:
//- A button that gives the number of character inside each quote (space included)
const numCharacterSpaces = document.querySelector('#numberCharacterSpaces');
numCharacterSpaces.addEventListener('click', countCharacter);

function countCharacter(){
   let quoteLength = quotes[lastIndex].quote.length
    console.log(`The quote has ${quoteLength} characters`)
};
//- A button that gives the number of character inside each quote (space NOT included)
const numCharacterNoSpaces = document.querySelector('#numberCharacterNoSpaces');
numCharacterNoSpaces.addEventListener('click', countCharacterNoSpaces);

function countCharacterNoSpaces(){
   let actualQuote = quotes[lastIndex].quote
    let quoteNoSpaces = actualQuote.replace(/\s/g, '');

    console.log(`The quote has ${quoteNoSpaces.length} characters (no spaces)`)
};

//- A button that gives the number of words in each quote
const numWords = document.querySelector('#numberWords');
numWords.addEventListener('click', countWords);

function countWords(){
   let actualQuote = quotes[lastIndex].quote;
   let wordCount = actualQuote.split(/\s+/);
    
    console.log(`The quote has ${wordCount.length} words`)
};

//- A button “Like” for the user to like a quote. Hint : add a new key to each object that will represent the number of “likes”.
const like = document.querySelector('#like')
like.addEventListener('click', addLike);

function addLike(){
    let actualQuote = quotes[lastIndex]
    actualQuote.likes += 1
    console.log(`Liked! This quote now has ${actualQuote.likes} likes.`);
};

// Part 3 : Filter Form
//1. Create a form, that will filter the quotes depending on the name of the author. When the button of the form is clicked, display all the quotes from this specific author.
// const searchButton = document.querySelector('#SearchB')
// searchButton.addEventListener('click', displaySearch)

// function displaySearch (e){
//     e.preventDefault()
//     const searchedAuthor = document.querySelector('#searchAuthor').value
//     const filteredQuotes = quotes.filter((item)=>{
//         return item.author.toLowerCase() === searchedAuthor.toLowerCase()
//     });

//     filteredQuotes.forEach((item)=>{
//         let quoteDOM = document.createElement("p")
//         quoteDOM.innerHTML = `"${item.quote}" - ${item.author}`
//         const divDOM = document.querySelector('#searchedQuotes')
//         divDOM.appendChild(quoteDOM)
//     });

//     document.querySelector('#searchAuthor').value = ""
// };


//2. Instead of showing all the quotes of the specific author. Show only one quote, and add a button “Previous” and a button “Next” that will display the next or previous quote.

const searchButton = document.querySelector('#SearchB');
const quoteDisplay = document.querySelector('#searchedQuotes');
let currentIndex = 0;
let filteredQuotes = [];

searchButton.addEventListener('click', displaySearch);

function displaySearch(e) {
    e.preventDefault();
    filteredQuotes = filterAutors();

    if (filteredQuotes.length > 0) {
        currentIndex = 0;
        showCurrentQuote();
    } else {
        quoteDisplay.textContent = 'No quotes found for the author.';
    }

    document.querySelector('#searchAuthor').value = '';
}

function filterAutors() {
    const searchedAuthor = document.querySelector('#searchAuthor').value;
    return quotes.filter((item) => item.author.toLowerCase() === searchedAuthor.toLowerCase());
}

function showCurrentQuote() {
    quoteDisplay.innerHTML = `"${filteredQuotes[currentIndex].quote}" - ${filteredQuotes[currentIndex].author}`;
}

function next(e) {
    e.preventDefault();
    if (filteredQuotes.length > 0) {
        currentIndex = (currentIndex + 1) % filteredQuotes.length;
        showCurrentQuote();
    }
}

const nextButton = document.querySelector('#next');
nextButton.addEventListener('click', next);

function previous(e) {
    e.preventDefault();
    if (filteredQuotes.length > 0) {
        currentIndex = (currentIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
        showCurrentQuote();
    }
}

const prevButton = document.querySelector('#previous');
prevButton.addEventListener('click', previous);

