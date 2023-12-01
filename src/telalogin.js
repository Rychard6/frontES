import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/users/sign_in', { email, senha });
      
    } catch (error) {
      console.error('Erro no login:', error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-200">
      <div className="m-auto w-2/6">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">Entrar</h2>
          <div className="flex justify-center">
            <div className="bg-gray-400 rounded-full h-28 w-28 flex justify-center items-center mb-5">LOGO</div>
          </div>
          <form className="space-y-4 justify-center" onSubmit={handleLogin}>
            <div className="flex space-x-4 justify-center">
              <div className="w-3/4">
                <input
                  className="border border-gray-500 rounded-2xl w-full py-2 px-3"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="flex space-x-4 justify-center">
              <div className="w-3/4">
                <input
                  className="border border-gray-500 rounded-2xl w-full py-2 px-3"
                  type="password"
                  id="senha"
                  name="senha"
                  placeholder="Senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex justify-center items-center w-full h-14">
              <button
                className="bg-blue-500 w-2/5 h-full text-white text-2xl font-bold py-2 px-4 rounded-3xl hover:bg-indigo-800 mr-2"
                type="submit"
              >
                Login
              </button>
            </div>
            <div className="flex justify-center items-center">
                <Link to="/recover" className="text-blue-500 hover:underline">Esqueceu sua senha?</Link>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-base">
                Não possui uma conta?{" "}
                <Link to="/cadastro" className="text-blue-500 hover:underline">Faça seu cadastro</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}