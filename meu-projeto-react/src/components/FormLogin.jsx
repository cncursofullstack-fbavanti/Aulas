import React, { useState } from "react";

const FormLogin = () => {
  const [email, setEmail] = useState("teste@teste.com");
  const [password, setPassword] = useState("***");
  const [error, setError] = useState("");

  const submitLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Campo ou Campos obrigatórios vazio(s)!");
      return
    }

    setError("");
    alert(`Dados enviados. Email: ${email} | Password: ${password}`);
  }

  return (
    <>
      <div>
        <h1>Login</h1>
        <form onSubmit={submitLogin}>
          <input type="text" placeholder="Digite o seu email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          
          <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
          <button type="submit">Enviar</button>
        </form>
        {error && (
          <p>{error}</p>
        )}
      </div>
    </>
  )
}

export default FormLogin