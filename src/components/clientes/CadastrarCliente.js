import React, { useEffect, useState } from 'react';
import M from 'materialize-css'; 
import api from '../../api/ApiService';

export default function CadastrarCliente() {

    const [ nome, setNome ] = useState("");
    const [ telefone, setTelefone ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ masculino, setMasculino ] = useState(false);
    const [ feminino, setFeminino ] = useState(false);

    useEffect(() => {
        let elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, {inDuration: 300, outDuration: 225});
    }, []);


    const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        const data = { nome, telefone, email, masculino, feminino };

        api.post(`clientes`, data)
        .then((res) => {
            if(res.data.success) {
                M.toast({ html: 'Cliente Cadastrado com Sucesso =) ', classes: 'green', displayLength: 2000 });

                setTimeout(() => {
                    window.location.href = '/todos-clientes'
                  }, 1000)
            }
        })
        .catch((error) => {
            if(error)
            M.toast({ html: 'OPS! Ocorreu um Erro =( ', classes: 'red', displayLength: 2000 })
           
        });
    }

    return(
        <>
            <a className="waves-effect waves-light btn-small modal-trigger" href="#modal" style={{marginLeft: '8px'}}>
                Cadastrar
            </a>

                <div id="modal" className="modal">
                    <div className="modal-content">
                        <div className="container">

                            <h4>Cadastrar Novo Cliente</h4>

                            <form onSubmit={handleFormSubmit} className="col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <i className="material-icons prefix">account_circle</i>
                                        <label className="active"> Nome Completo</label>
                                        <input  
                                            type="text"
                                            required 
                                            className="validate"  
                                            value={nome} 
                                            onChange={(event) => { setNome(event.target.value);  }} 
                                        />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s6">
                                        <i className="material-icons prefix">phone</i>
                                        <label htmlFor="telefone">Telefone</label>
                                        <input 
                                            type="tel" 
                                            required
                                            className="validate"
                                            value={telefone}
                                            onChange={(event) => { setTelefone(event.target.value); }}
                                        />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="input-field col s6">
                                        <i className="material-icons prefix">email</i>
                                        <label>E-mail</label>
                                        <input 
                                            type="email" 
                                            className="validate"
                                            value={email}
                                            onChange={(event) => { setEmail(event.target.value); }}
                                            required
                                        />
                                    </div>
                                </div>

                                <p>Gênero:</p>
                                <p>
                                    <label>
                                        <input className="with-gap" checked={masculino} onChange={(event) => { setMasculino(event.target.checked) }} name="masculino" type="radio"  />
                                        <span>Masculino</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input className="with-gap" checked={feminino} onChange={(event) => { setFeminino(event.target.checked) }}  name="feminino" type="radio"  />
                                        <span>Feminino</span> 
                                    </label>
                                </p>
                                <br/>

                                <div>
                                
                                    <button className="waves-effect waves-light btn-small" type="submit">Cadastrar
                                        <i className="material-icons right">send</i>
                                    </button>
                                    
                        
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <a href="/todos-clientes" className="modal-close waves-effect waves-green btn-flat">Fechar</a>
                    </div>
                </div>
        </>
    )
}