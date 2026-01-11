import { BrowserRouter, Routes, Route } from "react-router"
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Signin from './pages/Signin'
import Login from './pages/Login'



import './App.css'

function App() {
  

  return (
  <>
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={Home()} />
          <Route path="/about" element={About()} />
          <Route path="/contact" element={Contact()} />
          <Route path="/signin" element={Signin()} />
          <Route path="/login" element={Login()} />
        </Routes>
      </div>    
    </BrowserRouter>
  </>
  )
}

export default App
