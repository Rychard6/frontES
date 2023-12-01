import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = async (e) => {
    e.preventDefault();
  
    try {
      console.log('Enviando dados para o backend:', { user: { nome, email, senha } });
  
      const response = await axios.post('/users', { user: { nome, email, senha } });
  
      console.log('Resposta do backend:', response.data);
    } catch (error) {
      console.error('Erro no cadastro:', error);
    }
  };
  
  return (
    <div className="flex h-screen bg-gray-200">
      <div className="m-auto w-2/6">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">Cadastre-se</h2>
          <div className="flex justify-center">
            <div className="bg-gray-400 rounded-full h-28 w-28 flex justify-center items-center mb-5">LOGO</div>
          </div>
          <form className="space-y-4 justify-center" onSubmit={handleCadastro}>
            <div className="flex space-x-4 justify-center ">
              <div className="w-3/4">
                <input
                  className="border border-gray-500 rounded-2xl w-full py-2 px-3"
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
              
            </div>
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
                Cadastrar
              </button>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-base">
                Já tem uma conta?{" "}
                <Link to="/" className="text-blue-500 hover:underline">Faça seu login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}