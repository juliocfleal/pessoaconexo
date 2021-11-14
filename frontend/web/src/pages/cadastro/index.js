import Header from '../../components/header/header';
import logo from '../../assets/logo-conexo.svg';


const Cadastro = () => {
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
    <input type="text" className="form-control form-control-lg mb-3" placeholder="nome" />
    <input type="text" className="form-control form-control-lg mb-3" placeholder="senha" />
    <div className="text-center">
    <button className="btn btn-lg btn-secondary">Cadastrar</button>
</div>
  </div>
</div>

</div>
</div>
);
};

export default Cadastro;
