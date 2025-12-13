import { useState } from 'react'
import HelloWorld from './components/HelloWorld'
import UserList from './components/UserList'
import Card from './components/Card'
import './App.css'

function App() {
  return (
  <>
    <HelloWorld name="Caetano" age={46} />

    <UserList />

    <h2>Tecnologias</h2>
    <div id="cards">
      <Card>
        <h3>HTML</h3>
        <p>Aprenda HTML básico, descubra como estruturar o seu conteudo e melhorar o seu resultado nos mecanismos de busca</p>
      </Card>
      <Card>
        <h3>CSS</h3>
        <p>Aprenda como melhorar as apresentações do seu site. Adicionar animações</p>
      </Card>
      <Card>
        <h3>JS</h3>
        <p>Aprenda como melhorar as apresentações do seu site. Adicionar animações</p>
      </Card>
      <Card>
        <h3>React</h3>
        <p>Aprenda como melhorar as apresentações do seu site. Adicionar animações</p>
      </Card>
      <Card>
        <h3>Node</h3>
        <p>Aprenda como melhorar as apresentações do seu site. Adicionar animações</p>
      </Card>
    </div>
  </>
  )
}

export default App
