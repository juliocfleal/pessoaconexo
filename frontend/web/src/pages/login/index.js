import Header from '../../components/header/header';
import axios from 'axios';
import sobre from '../../assets/sobre-conexo.svg';
import api from '../../services/api';
import { useState } from 'react';


const Login = () => {


  const [credenciais, setCredenciais] = useState({
    nome: '',
    senha: ''

  });

  const login = async() =>{
    try{

      const response = await api.post('/login',credenciais );

      localStorage.setItem('token', response.headers['authorization']);
      const res = response.data;

      if(res.error){
        alert("Usuario ou Senha invalidos.");
        return false;
      }
     
      window.location= "/exibir";

    } catch(err) {
      alert("Usuario ou Senha invalidos.");
    }

  };


  const cadastrar = async() =>{
    try{

  

      window.location= "/cadastro";
    } catch(err) {
      alert(err.message);
    }

  };

return (
<div className="container-fluid h-100 bg-primary">
<Header />
<div className="row pad">

<div className="my-auto">
  <div className="box">
    <div className="row pad">
  <img className="col-6" src={sobre} />
  <h1 className=" bv col-6 my-auto text-center">Bem vindo a Conexo!</h1>
  </div>
    <br/>

    <input type="text" className="form-control form-control-lg mb-3" placeholder="nome" onChange={(e) => {
      setCredenciais({
        ...credenciais,
        nome: e.target.value,
      })
    }}/>
    <input type="password" className="form-control form-control-lg mb-3" placeholder="senha" onChange={(e) => {
      setCredenciais({
        ...credenciais,
        senha: e.target.value,
      })
    }}/>
    <div className="text-center">
    <button className="btn btn-lg btn-secondary" onClick={login}>Logar</button>
</div>
<br/>
<div className="text-center">
<button className="btn btn-sm " tableIndex="-1"  aria-disabled="true" onClick={cadastrar}>Clique aqui para se cadastrar!</button>
</div>

</div></div></div>

</div>

);
};

export default Login;