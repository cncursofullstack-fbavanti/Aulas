import FormLogin from "../components/FormLogin";
import { Link } from 'react-router'

const Login = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">Login</h1>
          <FormLogin />
          <div className="my-4">
            <Link to="/">Voltar a página inicial</Link>
          </div>
          <div className="my-4">
            <Link to="/signin">Ainda não tem cadastro, clique aqui</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;