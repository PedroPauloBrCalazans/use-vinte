import React, { useEffect, useState } from 'react';
import  api from '../../api/ApiService'; 
import Loading from '../Loading';
import CadastrarCliente from './CadastrarCliente';
import DeleteCliente from './DeleteCliente';


export default function Clientes() {

    const [ allClientes, setAllClientes ] = useState([]);
    

    useEffect(() => {
      const getClientes = async () => {
          const allClientes = await api.get(`/clientes`);
          
          setAllClientes(allClientes.data);
      };
      getClientes();
    }, []);


    

    return (
        <div className="container">
            <br/>

            <CadastrarCliente/>
               
            <hr/>

            { allClientes.length === 0  && <Loading/> }

            <table className="centered responsive-table">
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>E-mail</th>
                    <th>Situação</th>
                    <th>Ações</th>
                </tr>
                </thead>

                <tbody>
                    { allClientes.map((itens) => {
                        return (
                            <>
                                <tr key={itens.id}>
                                    <td>{itens.nome}</td>
                                    <td>{itens.telefone.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, "$1 $2 $3-$4")}</td>
                                    <td>{itens.email}</td>
                                    <td>{itens.ativo ? 'Ativo' : 'Inativo'}</td>
                                    <td>
                                        <button 
                                            className="waves-effect waves-light btn-small" 
                                            title="Editar" 
                                            style={{marginRight: '5px'}}
                                        >
                                            <i className="material-icons">edit</i>
                                        </button>

                                       <DeleteCliente itens={itens}/>
                                    </td>
                                    
                                </tr>
                               
                            </>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}