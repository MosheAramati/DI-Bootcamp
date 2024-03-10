import { useState } from 'react'


import './App.css'

function App() {
  const [input1, setInput1] = useState(0)
  const [input2, setInput2] = useState(0)
  const [result, setResult] = useState(0);

  const handleChangeInput1 = (e) => {
    setInput1(parseInt(e.target.value));
  };

  const handleChangeInput2 = (e) => {
    setInput2(parseInt(e.target.value));
  };

  const handleAddition = () => {
    setResult(input1 + input2);
  };

const changeInput1 =(newNumber)=> setinput1(newNumber)
  return (
    <div>
      <h2>Adding two Numbers</h2>

      <input type="number" onChange={handleChangeInput1}/>
      
      <input type="number" onChange={handleChangeInput2} /><br /> <br />
      <button onClick={handleAddition}>Add Them !</button><br />
      <h1>{result} </h1>
      
    </div>

  )
}

export default App
