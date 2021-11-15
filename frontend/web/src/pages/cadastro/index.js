import Header from '../../components/header/header';
import logo from '../../assets/logo-conexo.svg';
import api from '../../services/api';
import { useState } from 'react';

const Cadastro = () => {

  const [credenciais, setCredenciais] = useState({
    nome: '',
    senha: ''

  });

  const cadastrar = async() =>{
    try{
      const response = await api.post('/cliente' ,credenciais );
      const res = response.data;
      console.log(credenciais)
      let id = credenciais.id;
      // if(res.error){
      //   alert(res.message);
      //   return false;
      // }
      // window.location.reload();

    } catch(err) {
      alert(err.message);
    }

  };


return (
<div className="container-fluid h-100 bg-primary">
<Header />
<div className="row pad">

<div className="col-6 my-auto">
  <img src={logo} className="img-fluid text-right" /></div>
<div className="col-6 my-auto">
  <div className="box">
    <h2 className="text-center">Faca seu cadastro!</h2>
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
    <button className="btn btn-lg btn-secondary" onClick={cadastrar}>Cadastrar</button>
</div>
  </div>
</div>

</div>
</div>
);
};

export default Cadastro;
