import { useState, useEffect } from 'react';
import Header from '../../components/header/header';
import api from '../../services/api';
import { useParams } from 'react-router-dom';



const Atualizar = ({ rata }) => {

  const { idPessoa } = useParams();
  const [credenciais, setCredenciais] = useState({
    nome: '',
    cpf: ''

  });


  
  const [data, setData] = useState({});
  const [pessoa,setPessoa] = useState({});
  useEffect(() =>{
    async function loadPessoa(){
      const response = await api.get('/pessoa/' + idPessoa, credenciais);
      setData(response.data);
      setPessoa(data.pessoa)

  
    }
    loadPessoa(); 
  },[pessoa]);


  const atualizar = async() =>{
    try{
      // setCredenciais(data);
      const response = await api.put('/pessoa/' + idPessoa, credenciais);
      const res = response.data;
      console.log(data);
      console.log(credenciais)

      window.location= "/exibir";

    } catch(err) {
      alert(err.message);
    }

  };

  const voltar = async() =>{
    try{
      window.location= "/exibir";
    } catch(err) {
      alert(err.message);
    }
  
  };
  



return (
<div className="container-fluid h-100 bg-primary">
<Header />
<div className="row pad">
<div class="d-flex justify-content-center my-auto">
<div className="col-6 my-auto">
  <div className="box">
    <h1 className="text-center">Atualizar Pessoa</h1>
    <br/>
    <br/>
    <input type="text" className="form-control form-control-lg mb-3" placeholder={data.nome} onChange={(e) => {
      setCredenciais({
        ...credenciais,
        nome: e.target.value,
      })
    }}/>
    <input type="text" className="form-control form-control-lg mb-3" placeholder={data.cpf} onChange={(e) => {
      setCredenciais({
        ...credenciais,
        cpf: e.target.value,
      })
    }}/>
    <div className="d-flex justify-content-around">
    <button className="btn btn-lg btn-secondary" onClick={atualizar}>Atualizar</button>
    <button className="btn btn-lg btn-back" onClick={voltar}>Voltar</button>
</div>
  </div>
</div>
</div>
</div>
</div>
);
};

export default Atualizar;
