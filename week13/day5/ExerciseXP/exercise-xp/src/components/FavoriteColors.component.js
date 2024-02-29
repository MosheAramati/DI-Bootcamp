import React from "react"

function UserFavoriteAnimals (props){
    const favAnimals = props.favorites
    favAnimals.map((animal)=><li>animal</li>)
    return favAnimals.map((animal,indx)=><li key={indx} >{animal}</li>)
  }
export{UserFavoriteAnimals}