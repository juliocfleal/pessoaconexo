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



  // const getExibir = async () =>{
  //   try{

  //     if(res.error){
  //       alert(res.message);
  //       return false;
  //     }
  //     setPessoa(res.pessoa);
  //     console.log(res.map((pessoa) => pessoa.id));
  //     console.log(pessoa);
    

  //   }catch(err){
  //     alert(err.message);
  //   };
  // };

  // useEffect(() => {
  //   getExibir();
  // }, []
  //   );

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
</div>
  </div>
</div>
</div>
</div>
);
};

export default Exibir;
