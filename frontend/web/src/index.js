import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import Cadastro from './pages/cadastro';
import Login from './pages/login';
import Inserir from './pages/inserir';
import Atualizar from './pages/atualizar';
import Exibir from './pages/exibir';


ReactDOM.render(
  <React.StrictMode>
    <Exibir />
  </React.StrictMode>,
  document.getElementById('root')
);

