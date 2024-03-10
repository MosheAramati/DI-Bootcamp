import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop'
import Products from './components/Products'
import {Link, createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'

const Root = () =>{
  return(
  <>
    <div>
      <Link to='/'>Home / </Link>
      <Link to='/about'>About / </Link>
      <Link to='/shop'>Shop</Link>
    </div>

    <Outlet/>
  </>
  )
}

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root/>,
    errorElement: <h2>404 Not Found</h2>,
    children: [
      {
        path: '/',
        element:<Home/>,
      },
      {
        path:'/about',
        element:<About/>,
      },
      {
        path:'/shop',
        element:<Shop/>,
      },
      {
        path:'/products/:id',
        element:<Products/>,
      }
    ]
  }
])

function App() {


  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App


// function App() {


//   return (
//     <>
//     <div>
//       <nav>
//         <Link to='/Home'>Home / </Link> 
//         <Link to='/about'>About / </Link>
//         <Link to='/shop'>Shop</Link>
//       </nav>
//     </div>
//       <Routes>
//         <Route path='/home' element={<Home/>}/>
//         <Route path='/about' element={<About/>}/>
//         <Route path='/shop' element={<Shop/>}/>
//         <Route path='/products/:id' element={<Products/>}/>
//         <Route path='*' element={<h2>404 Not Found</h2>}/>
//       </Routes>
//     </>
//   )
// }

// export default App

