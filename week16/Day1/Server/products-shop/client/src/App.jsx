import { useState , createContext} from 'react'
import{Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import LoginRegister from './components/LoginRegister'
import './App.css'

export const BASE_URL = import.meta.env.VITE_APP_BASE_URL

export const AuthContext = createContext()

function App() {
  const[token, setToken]= useState()

  return (
    <AuthContext.Provider value={{token, setToken}}>
     <Routes>
      <Route path= '/' element={<Home/>}/>
      <Route path= '/login' element={<LoginRegister page="Login" />}/>
      <Route path= '/register' element={<LoginRegister page="Register"/>}/>
     </Routes>
    </AuthContext.Provider>
  )
}

export default App
