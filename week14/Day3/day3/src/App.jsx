import { useState } from 'react'
import './App.css'
import SearchCar from './components/SearchCar.jsx'
import Car from './components/Car.jsx'
import Heroes from './components/Hero.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'

const listCars = [
  {
    id: 1,
    brand: "ford",
    name: "ford torino",
    year: "1970-01-01",
    origin: "USA"
  },
  {
    id: 2,
    brand: "ford",
    name: "ford galaxie 500",
    year: "1970-01-01",
    origin: "USA"
  },
  {
    id: 3,
    brand: "chevrolet",
    name: "chevrolet vega 2300",
    year: "1971-01-01",
    origin: "USA"
  },
  {
    id: 4,
    brand: "peugeot",
    name: "peugeot 504 (sw)",
    year: "1972-01-01",
    origin: "Europe"
  },
  {
    id: 5,
    brand: "renault",
    name: "renault 12 (sw)",
    year: "1972-01-01",
    origin: "Europe"
  },
]

function App() {
  const [nameChosenCar, setNameChosenCar] = useState("")
  const [chosenCars, setChosenCars] = useState([])

  const handleChange =(e) =>{
    const searchedCars = listCars.filter((car)=> car.brand.includes(e.target.value))
    setNameChosenCar(e.target.value)
    setChosenCars(searchedCars)
  }

 
  return (
    <div>
     <SearchCar listCars={listCars} handleChange = {handleChange}/>
     <h1>{nameChosenCar}</h1>
     <Car chosenCars ={chosenCars} nameChosenCar={nameChosenCar}/>
    
    <ErrorBoundary><Heroes name="Iron Man"/></ErrorBoundary>
    <ErrorBoundary><Heroes name="Captain America"/></ErrorBoundary>
    <ErrorBoundary><Heroes name="thanos"/></ErrorBoundary>
   
    </div>
  )
}

export default App
