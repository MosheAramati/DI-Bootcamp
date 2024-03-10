import { useState } from "react";
import './App.css'
import Languages from "./components/Languages.jsx";

function App() {
  const [languages, setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaSript", votes: 0},
    {name: "Java", votes: 0}
  ])

  const increaseVotes = (languageName) => {
    setLanguages(prevLanguages => 
        prevLanguages.map(language => 
            language.name === languageName ? {...language, votes: language.votes + 1} : language
        )
    );
};

  return (
    <>
     <h1>Vote For Your Favorite Lenguage!</h1>
     {languages.map((item, index) => {
      return <Languages name={item.name} votes = {item.votes}  increaseVotes={increaseVotes} />
     })}
    </>
  )
}

export default App
