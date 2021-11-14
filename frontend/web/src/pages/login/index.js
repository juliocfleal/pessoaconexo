import Header from '../../components/header/header';
import sobre from '../../assets/sobre-conexo.svg';


const Login = () => {
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
    <input type="text" className="form-control form-control-lg mb-3" placeholder="nome" />
    <input type="text" className="form-control form-control-lg mb-3" placeholder="senha" />
    <div className="text-center">
    <button className="btn btn-lg btn-secondary">Logar</button>
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
