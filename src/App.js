
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './telalogin';
import Cadastro from './telacadastro';
import Senha from './telaresetsenha';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>

          <Route path="/senha" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/recover" element={<Senha />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;