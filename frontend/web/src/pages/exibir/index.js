import { useState, useEffect } from 'react';
import Header from '../../components/header/header';
import Pessoas from '../../components/pessoastable/pessoastable';

import api from '../../services/api';



const Exibir = () => {


  const [data, setData] = useState([]);
  const [pessoa,setPessoa] = useState([]);
  useEffect(() =>{
    async function loadPessoa(){
      const response = await api.get('/pessoa');
      setData(response.data);
      setPessoa(data.pessoa)
      console.log(data);
  
    }
    loadPessoa(); 
  },[pessoa]);

  const adicionar = async() =>{
    try{

  
      const response = 
      window.location= "/inserir";
    } catch(err) {
      alert(err.message);
    }

  };

return (
<div className="container-fluid h-100 bg-primary">
<Header />
<div className="row pad">
<div class="d-flex justify-content-center my-auto">
<div className="col-12 my-auto">
  <div className="box">
    <h1 className="text-center">Lista de Pessoas</h1>
    <br/>
    <br/>
    <table class="table">
  <thead class="thead-light">
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
