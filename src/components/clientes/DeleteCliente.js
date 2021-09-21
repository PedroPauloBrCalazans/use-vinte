import React from 'react';
import  api from '../../api/ApiService';
import M from 'materialize-css';

import { Modal, Button } from 'react-materialize';


export default function DeleteCliente({ itens }) {


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
            <Modal
                actions={[
                    <Button flat modal="close" node="button" waves="green">Close</Button>
                ]}
                bottomSheet={false}
                fixedFooter={false}
                header="Excluir"
                id="Modal-10"
                open={false}
                options={{
                    dismissible: true,
                    endingTop: '10%',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: '4%'
                }}
                trigger={<Button className="waves-effect waves-light btn-small" title="Excluir">
                            <i className="material-icons">delete</i>
                        </Button>}
            >
                <p>
                    Tem certeza que deseja excluir o Cliente <b style={{textTransform: "uppercase", color: "red"}}>{itens.nome}</b> ?
                </p>
                <Button className="button" onClick={() => deletarCliente(itens.id)}>Excluir</Button>
            </Modal>
        </>
    )
}