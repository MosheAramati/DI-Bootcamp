import { useState } from 'react'
import './App.css'
import Car from './components/Car';
import Event from './components/Events';
import Phone from './components/Phone';
import Color from './components/Color';


const carInfo = {name: "Ford", model: "Mustang"};

function App() {
 

  return (
    <>
    <h1>EX 1:</h1>
    <Car name = {carInfo.name} model = {carInfo.model}/>
    <h1>EX 2:</h1>
    <Event/>
    <h1>EX 3:</h1>
    <Phone/>
    <h1>Ex 4:</h1>
    <Color/>
    </>
  )
}

export default App
