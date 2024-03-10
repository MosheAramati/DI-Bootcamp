import { useState } from 'react'
import './App.css'
import Form from './components/Form.component.jsx'
import Summary from './components/Sumary.components.jsx'

function App() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [age, setage] = useState("")
  const [gender, setGender] = useState("")
  const [destination, setDestination] = useState("")
  const [noNuts, setNoNuts] = useState(false)
  const [noLactose, setNoLactose] = useState(false)
  const [vegan, setVegan] = useState(false)


  return (
    <>
    <Form firstName={firstName} lastName={lastName} age={age} gender={gender} destination={destination} noNuts={noNuts} noLactose={noLactose} vegan={vegan} 
    changeFirstName={(newName)=> setFirstName(newName)}
    changeLastName={(newName)=> setLastName(newName)}
    changeAge={(newAge)=> setage(newAge)}
    changeGender={(gender)=> setGender(gender)}
    changeDestination={(destination)=> setDestination(destination)}
    changeNoNuts={(noNuts)=> setNoNuts(noNuts)}
    changeNoLactose={(noLactose)=> setNoLactose(noLactose)}
    changeVegan={(vegan)=> setVegan(vegan)}
    />
    <Summary firstName={firstName} lastName={lastName} age={age} gender={gender} destination={destination} noNuts={noNuts} noLactose={noLactose} vegan={vegan}/>
    </>
  )
}

export default App
