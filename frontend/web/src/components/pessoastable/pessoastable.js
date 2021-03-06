import { useState, useEffect } from 'react';
import React from "react";
import Exibir from "../../pages/exibir";
import api from '../../services/api';
import axios from 'axios';

const Pessoas = ({ pessoas }) =>{
  let rata='';

  const [credenciais, setCredenciais] = useState({
    id:''

  });

  const deletar = async() =>{
    try{

        const response = await axios.delete('http://localhost:8080/pessoa/'+ pessoas.id, );
      const res = response.data;
      console.log(credenciais)
      window.location.reload();
    } catch(err) {
      alert(err.message);
    }

  };

  const atualizar = async() =>{
    try{
     
 

      window.location= 'http://localhost:3000/atualizar/' + pessoas.id;
    } catch(err) {
      alert(err.message);
    }

  };

  return(
  <tbody>
    <tr>
      <th scope="row">{pessoas.id}</th>
      <td>{pessoas.nome}</td>
      <td>{pessoas.cpf}</td>
      <td><div className="d-flex justify-content-around">
  <button rata={pessoas} className="btn btn-sm btn-atl" onClick={atualizar}>Atualizar</button><button className="btn btn-sm btn-dlt" onClick={deletar}>Deletar</button> </div>
  </td>
    </tr>
  </tbody>

  );
}

  export default Pessoas;