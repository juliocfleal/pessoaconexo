import Header from '../../components/header/header';



const Exibir = () => {
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
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td><div class="d-flex justify-content-around">
  <button className="btn btn-sm btn-atl">Atualizar</button><button className="btn btn-sm btn-dlt">Deletar</button> </div>
  </td>
    </tr>
  </tbody>
</table>
</div>
  </div>
</div>
</div>
</div>
);
};

export default Exibir;
