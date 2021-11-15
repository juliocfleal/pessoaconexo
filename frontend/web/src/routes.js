import { Switch } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";

import './styles/global.css';
// import { isAuthenticated } from "./services/auth";
// import PrivateRoute from './privateroute';

import Cadastro from './pages/cadastro';
import Login from './pages/login';
import Inserir from './pages/inserir';
import Atualizar from './pages/atualizar';
import Exibir from './pages/exibir';


//Projeto rodando com react-router-dom@5.2.0

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact ><Login /></Route>
        <Route path="/cadastro" exact><Cadastro /></Route>
        <Route path="/exibir" exact><Exibir /></Route>
        <Route path="/inserir" exact><Inserir /></Route>
        <Route path="/atualizar" exact><Atualizar /></Route>



    </ Switch>
    </ BrowserRouter>
    );
  };


export default Routes;