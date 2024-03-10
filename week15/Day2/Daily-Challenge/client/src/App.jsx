import { useState, useEffect } from 'react'
import React from 'react';

import './App.css'

function App() {
  const [message, setMessage]= useState("")
  const [input, setInput]= useState("")


useEffect(() => {
    fetchData(); 
  }, []);

const handleSubmit =(e) =>{
  e.preventDefault();

  fetch("http://localhost:3001/api/world", {
    method: 'POST',
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify({input}) 
  })
  .then((res)=> res.json())
  .then((data)=>{
    setMessage(data.message)
  })
  .catch((err)=>{
    console.log(err)
  })
}

 const fetchData = async() => {
    const url = "http://localhost:3001/api/hello"
    try {
      const res = await fetch(url)
      const msg = await res.json()
      console.log(msg);
      setMessage(msg.message)
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
    <h1>Message: {message}</h1>
    <form onSubmit={handleSubmit}>
      <input onChange={(e)=> setInput(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      <p>{message}</p>
    </form>
    </>
  )
}

//Class component

// class App extends React.Component {
//   constructor() {
//     super();
  
//     this.state = {
//        message: ""
//     };
//   }

//   componentDidMount() {
//     this.fetchData();
//   }

//   fetchData = async () => {
//     const url = "http://localhost:3001/api/hello";
//     try {
//       const res = await fetch(url);
//       const data = await res.json();
//       this.setState({ message: data.message });
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   render() {
//     return (
//       <>
//         <h1>Message: {this.state.message}</h1>
//       </>
//     );
//   }
// }

export default App
