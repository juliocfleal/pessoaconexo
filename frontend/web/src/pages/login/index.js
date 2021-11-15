import Header from '../../components/header/header';

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
      const res = response.data;
console.log(credenciais)
      if(res.error){
        alert(res.message);
        return false;
      }
      window.location.reload();


      login(response.data.token);
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
    <br/>
    <input type="text" className="form-control form-control-lg mb-3" placeholder="nome" onChange={(e) => {
      setCredenciais({
        ...credenciais,
        nome: e.target.value,
      })
    }}/>
    <input type="text" className="form-control form-control-lg mb-3" placeholder="senha" onChange={(e) => {
      setCredenciais({
        ...credenciais,
        senha: e.target.value,
      })
    }}/>
    <div className="text-center">
    <button className="btn btn-lg btn-secondary" onClick={login}>Logar</button>
</div>

{/* <link to="/cadastrar">
<h5 className="text-center">Sem cadastro? Clique aqui para se cadastrar!</h5>
<link /> */}
  </div>
</div>

</div>
</div>
);
};

export default Login;
