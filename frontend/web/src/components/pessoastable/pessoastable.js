import React from "react";
import Exibir from "../../pages/exibir";

const Pessoas = ({ pessoas }) =>{
  return(
  <tbody>
    <tr>
      <th scope="row">{pessoas.id}</th>
      <td>{pessoas.nome}</td>
      <td>{pessoas.cpf}</td>
      <td><div class="d-flex justify-content-around">
  <button className="btn btn-sm btn-atl">Atualizar</button><button className="btn btn-sm btn-dlt">Deletar</button> </div>
  </td>
    </tr>
  </tbody>

  );
}

  export default Pessoas;