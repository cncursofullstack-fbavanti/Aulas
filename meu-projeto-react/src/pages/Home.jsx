import React, { useState } from "react";
import Navbar from '../components/NavBar';
import UserList from "../components/UserList";

const Home = () => {
  const [contador, setContador] = useState(0);
  return (
    <>
      <Navbar />

      <h1>Bem vindo ao meu site</h1>

      <h3>Aprendendo a utilizar o React Router Dom</h3>
      <div>
        <h4>Contador</h4>
        <button onClick={()=>{setContador(contador+1)}}>Clique {contador}</button>
      </div>

      <UserList />
    </>
  )
}

export default Home;