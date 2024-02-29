import React from "react"
import { UserFavoriteAnimals } from "./components/FavoriteColors.component"
import Exercise from "./components/Exercise3"

function Ex1 (){
  const hello = <p>Hello World!</p>
  const myElement = <h1>I love JSX</h1>
  const sum = 5 + 5
  const sentence = <p>React is {sum} times better with JSX</p>
  return sentence
}

function Ex2 (){
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };


  return <>
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <UserFavoriteAnimals favorites = {user.favAnimals}/>
      </>
}

function Ex3 (){
  return(
  <div >
    <Exercise/>
  </div>)
}



export{Ex1, Ex2, Ex3}