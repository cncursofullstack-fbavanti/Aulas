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
        nome="HTML" 
        detalhe="Aprenda HTML básico, descubra como estruturar o seu conteudo e melhorar o seu resultado nos mecanismos de busca" 
      />
      <Card 
        nome="CSS" 
        detalhe="Aprenda como melhorar as apresentações do seu site. Adicionar animações" 
      />
    </>
  )
}

export default App
