import Header from '../../components/header/header';
import logo from '../../assets/logo-conexo.svg';
import api from '../../services/api';
import { useState } from 'react';

const Inserir = () => {

 
  const [inserido, setInserido] = useState({
    nome: '',
    cpf: ''

  });

  const inserir = async() =>{
    try{
      const response = await api.post('/pessoa/' ,inserido );
      const res = response.data;


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
<div className="col-6 my-auto">
  <div className="box">
    <h1 className="text-center">Inserir nova Pessoa</h1>
    <br/>
    <br/>
    <input type="text" className="form-control form-control-lg mb-3" placeholder="nome" onChange={(e) => {
      setInserido({
        ...inserido,
        nome: e.target.value,
      })
    }}/>
    <input type="text" className="form-control form-control-lg mb-3" placeholder="CPF" onChange={(e) => {
      setInserido({
        ...inserido,
        cpf: e.target.value,
      })
    }}/>
    <div className="d-flex justify-content-around">
    <button className="btn btn-lg btn-secondary"onClick={inserir}>Inserir</button>
    <button className="btn btn-lg btn-back" onClick={voltar}>Voltar</button>
</div>
  </div>
</div>
</div>
</div>
</div>
);
};

export default Inserir;
