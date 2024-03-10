import { useState } from 'react'
import './App.css'
import ErrorBoundary from './components/Exercise1/ErrorBoundary.jsx'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import HomeScreen from './components/Exercise1/HomeScreen.jsx'
import ShopScreen from './components/Exercise1/ShopScreen.jsx';
import ProfileScreen from './components/Exercise1/ProfileScreen.jsx';
import PostList from './components/Exercise2/PostList.jsx';
import Example1 from './components/Exercise3/Example1.jsx';
import Example2 from './components/Exercise3/Example2.jsx';
import Example3 from './components/Exercise3/Example3.jsx';

//Exercise 1

// const routes = (
//   <Routes>
//   <Route path='/' element={<HomeScreen/>}/>
//   <Route path='/profile' element={<ProfileScreen/>}/>
//   <Route path='/shop' element={<ShopScreen/>}/>
// </Routes>
// )


// function App() {

//   return (
//     <>
    
//       <BrowserRouter>
//         <Navbar/>
//         <ErrorBoundary>{routes}</ErrorBoundary>
//      </BrowserRouter>
  
//     </>
//   )
// }

// function Navbar(){
//   return (
//     <>
//     <h1>Welcome</h1>
//     <NavLink to='/' >Home / </NavLink>
//     <NavLink to='/profile'>Profile / </NavLink>
//     <NavLink to='/shop'>Shop</NavLink>
   
//     </>
//   )
// }

//Exercise 2

// function App() {

//   return (
//     <>
//       <PostList/>
//     </>
//   )
// }

//Exercise 3

// function App() {

//   return (
//     <>
//       <Example1/><br />
//       <Example2/><br />
//       <Example3/><br />
//     </>
//   )
// }

//Exercise 4
function App() {

  const handleClick =  async () =>{
    const url = "http://webhook.site/b48164bd-49a3-40d2-9f7c-80d475aecbfd"
    try{
      const body = {
        key1: 'myusername',
        email: 'mymail@gmail.com',
        name: 'Isaac',
        lastname: 'Doe',
        age: 27
      }
      const options ={
        method: 'post',
        mode: 'no-cors',
        headers: {
              'Accept': 'application/json',
              'Content-type': 'application/json'
            },
        body: JSON.stringify(body)
      }
      const res = await fetch(url, options)
    } catch(err){
      console.error(err);
    }
  }

  return (
    <>
     <button onClick={handleClick}>Post data</button>
    </>
  )
}




export default App
