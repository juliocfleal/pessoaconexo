import { useState, useEffect } from 'react';
import Header from '../../components/header/header';
import Pessoas from '../../components/pessoastable/pessoastable';

import api from '../../services/api';



const Exibir = ({ pessoas }) => {

 

  const [data, setData] = useState([]);
  const [pessoa,setPessoa] = useState([]);
  useEffect(() =>{
    async function loadPessoa(){
      const response = await api.get('/pessoa');
      setData(response.data);
      setPessoa(data.pessoa)
      
    }
    loadPessoa(); 
  },[pessoa]);
  
  const adicionar = async() =>{

    try{

  
  
      window.location= "/inserir";
    } catch(err) {
      alert(err.message);
    }

  };
    //Esta funcao confere se existe um token e em caso negativo redireciona o usuario para a pagina de login
    if (localStorage.getItem('token') == null ){
      alert("Voce pecisar fazer o login para acessar esta Pagina!");
      window.location= "/";
    }

return (
<div className="container-fluid h-100 bg-primary">
<Header />
<div className="row pad">
<div className="d-flex justify-content-center my-auto">
<div className="col-12 my-auto">
  <div className="box">
    <h1 className="text-center">Lista de Pessoas</h1>
    <br/>
    <br/>
    <table className="table">
  <thead className="thead-light">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">NOME</th>
      <th scope="col">CPF</th>
      <th scope="col"></th>
    </tr>
  </thead>
  {data.map(pessoas => <Pessoas pessoas={pessoas}/>)}
</table>
<div className="d-flex justify-content-">
    <button className="btn btn-lg btn-secondary"onClick={adicionar}>Adicionar pessoa</button>
    </ div>
</div>
  </div>
</div>
</div>
</div>

);
};

export default Exibir;
