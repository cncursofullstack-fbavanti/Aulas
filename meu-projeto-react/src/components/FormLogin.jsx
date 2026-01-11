import React, { useState } from "react";

const FormLogin = () => {
  const [ email, setEmail ] = useState("teste@teste.com");
  const [ password, setPassword ] = useState("***");
  const [ error, setError ] = useState("");

  const submitLogin = (e) => {
    e.preventDefault();

    if(!email || !password) {
      setError("Campo ou Campos obrigatórios vazio(s)!");
      return
    }

    setError("");
    alert(`Dados enviados. Email: ${email} | Password: ${password}`);
  }

  return (
    <>
      
          
          <form onSubmit={submitLogin} className="space-y-4">
            <div>
              <input 
                type="email" 
                placeholder="Digite o seu email" 
                value={email} 
                onChange={(e)=>{setEmail(e.target.value)}}
                className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder-gray-400"
              />
            </div>
            
            <div>
              <input 
                type="password" 
                placeholder="Digite sua senha"
                value={password} 
                onChange={(e) => {setPassword(e.target.value)}}
                className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder-gray-400"
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 shadow-md hover:shadow-lg"
            >
              Enviar
            </button>
          </form>
          
          {error && (
            <p className="text-red-300 bg-red-900/30 border border-red-700 rounded-lg px-4 py-3 text-sm mt-4 flex items-start gap-2">
              <span>⚠️</span>
              <span>{error}</span>
            </p>
          )}
    </>
  )
}

export default FormLogin