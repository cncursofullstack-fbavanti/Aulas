import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router"
import Navbar from './components/NavBar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import AddUser from './pages/AddUser'
import FormLogin from './components/FormLogin'


import './App.css'

function App() {
  const [contador, setContador] = useState(0);

  return (
  <>
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={Home()} />
          <Route path="/about" element={About()} />
          <Route path="/contact" element={Contact()} />
          <Route path="/addUser" element={AddUser()} />
        </Routes>

        <button onClick={()=>{setContador(contador+1)}}>Clique {contador}</button>        
        <FormLogin />
      </div>    
    </BrowserRouter>
  </>
  )
}

export default App
