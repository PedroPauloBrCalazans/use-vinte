import React, { useEffect, useState } from 'react';
import  api from '../../api/ApiService';
import M from 'materialize-css'; 

export default function DeleteCliente({ itens }) {


    useEffect(() => {
        let elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, {inDuration: 300, outDuration: 225});
    }, []);

    const deletarCliente = (id) => {
        let resp = api.delete(`/clientes/${id}`)
        resp.then((resp) => {
            if(resp.data.success) {
                M.toast({ html: 'Cliente Excluído com Sucesso !', classes: 'green', displayLength: 2000 });

                setTimeout(() => {
                    window.location.href = '/todos-clientes'
                  }, 1000)
            }
        });
    };


    return(
        <>
             <a
              className="waves-effect waves-light btn-small modal-trigger" 
              href="#modal1" 
              style={{marginLeft: '8px'}}    
              title="Excluir">
              <i className="material-icons">delete</i>
            </a>

                                           

            <div id="modal1" className="modal">
                <div className="modal-content">
                    <h4>Excluir</h4>
                    <p>Tem certeza que deseja excluir o Cliente <b style={{textTransform: "uppercase", color: "red"}}>{itens.nome}</b> ?</p>
                </div> 
                                        
                <div className="modal-footer">
                    <a 
                        className="modal-close waves-effect waves-green btn-flat" 
                        onClick={ () => deletarCliente(itens.id)}
                    >
                        Sim
                    </a>
                    <a 
                        href="/todos-clientes"
                        className="modal-close waves-effect waves-green btn-flat"
                    >
                        Fechar
                    </a>
                </div> 
            </div>
        </>
    )
}