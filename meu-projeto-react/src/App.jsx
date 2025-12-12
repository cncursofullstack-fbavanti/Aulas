import { useState } from 'react'
import HelloWorld from './components/HelloWorld'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HelloWorld nome="Caetano" />
      <Card 
        nome="HTML" detalhe="HTML básico" />
    </>
  )
}

export default App
