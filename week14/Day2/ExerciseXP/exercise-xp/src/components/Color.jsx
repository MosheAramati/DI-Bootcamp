import React, { useState, useEffect } from 'react';

const Color = () => {
    const [favoriteColor, setFavoriteColor] = useState("red");

    useEffect(() => {
        alert("useEffect reached");
        setFavoriteColor("yellow");
      }, ["yellow"]);

    const changeColor = () => {
        setFavoriteColor("blue");
      };
    

    return <>
    <h2>My Favorite Color is {favoriteColor}</h2>
    <button onClick={changeColor}>Change Color!</button>
    </>


}

export default Color