import { useState } from 'react'
import './App.css'
import quotes from './data/data';



function App() {
  const [quote, setQuote] = useState({});

  const getRandomIndex = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  const changeBackgroundColor = () =>{
    const root = document.querySelector(":root");
    console.log(root);
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    root.style.setProperty("--primary-color", "#" + randomColor);
    
  }

  const handleClick = () => {
    getRandomIndex();
    changeBackgroundColor();
   
  }

  return (
    <div className='container'>
    <h1 className='quote'>"{quote.quote}"</h1>
    <h3 className='author'>-{quote.author}-</h3>
    <button onClick={handleClick}>New Quote</button>
    </div>
  )
}



export default App
