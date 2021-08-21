import React from 'react'

export default function AgendaList() {
    return (
        <div className="container">
            <br/>
            <table className="centered responsive-table">
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>E-mail</th>
                    <th>Ações</th>
                </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>fdsfsd</td>
                        <td>fsfsfsf</td>
                        <td>fsfsdfs</td>
                        <td>
                            <a className="waves-effect waves-light btn-small" title="Editar">
                                <i className="material-icons">edit</i>
                            </a>
                            <a className="waves-effect waves-light btn-small" style={{marginLeft: '8px'}} title="Excluir">
                                <i className="material-icons">delete</i>
                            </a>

                                        
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
