import React from 'react'
import { useState, useEffect } from 'react'

import axios from 'axios'

export default function Home(props) {
const[users, setUsers]= useState([])

useEffect(()=>{
    getUsers();
},[])

const getUsers = async () => {
try {
    const response = await axios.get("http://localhost:5002/users/", {
        withCredentials: true,
    })
    setUsers(response.data)
} catch (error) {
    console.log(error);
}
}
  return (
    <>
    <h2>Home</h2>
    {users.map((item)=>{
        return <div key={item.id} >{item.email}</div>
    })}
    </>
  )
}
