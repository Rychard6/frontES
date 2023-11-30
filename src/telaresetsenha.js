import React from "react";
import { Link } from 'react-router-dom';

export default function Senha() {
  return (
    <div className="flex h-screen bg-gray-200">
      <div className="m-auto w-2/6">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">Recuperação de senha</h2>
          <div className="flex justify-center">
            <div className="bg-gray-400 rounded-full h-28 w-28 flex justify-center items-center mb-5">LOGO</div>
          </div>
          <form className="space-y-4 justify-center">
            <div className="flex space-x-4 justify-center">
              <div className="w-3/4">
                <input
                  className="border border-gray-500 rounded-2xl w-full py-2 px-3"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail cadastrado"
                />
              </div>
            </div>
            
            <div className="flex justify-center items-center w-full h-14">
              <button
                className="bg-blue-500 w-2/5 h-full text-white text-md font-bold py-2 px-4 rounded-3xl hover:bg-indigo-800 mr-2"
                type="submit"
              >
                Recuperar senha
              </button>
            </div>
            <div className="flex justify-center items-center">
              <Link to="/" className="text-blue-500 hover:underline">Voltar</Link>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}