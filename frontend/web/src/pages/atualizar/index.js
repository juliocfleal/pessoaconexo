import Header from '../../components/header/header';



const Atualizar = () => {
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
    <input type="text" className="form-control form-control-lg mb-3" placeholder="nome" />
    <input type="text" className="form-control form-control-lg mb-3" placeholder="CPF" />
    <div className="d-flex justify-content-around">
    <button className="btn btn-lg btn-secondary">Ataulizar</button>
    <button className="btn btn-lg btn-back">Voltar</button>
</div>
  </div>
</div>
</div>
</div>
</div>
);
};

export default Atualizar;
