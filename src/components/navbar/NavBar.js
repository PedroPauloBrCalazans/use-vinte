import React, { useEffect } from 'react';
import M from 'materialize-css';  
import { Link } from 'react-router-dom';

export default function NavBar() {

    useEffect(() => {
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {inDuration: 300, outDuration: 225});
    }, [])


    return (
        <div>
            {/* <ul id="dropdown1" className="dropdown-content">
                <li><Link to="/lista-convidados" style={{ fontFamily: "Dancing Script", fontSize: "20px"}}>Lista de Convidados</Link></li> 
                <li className="divider"></li>
                <li><Link to="/lista-presentes-padrinhos" style={{ fontFamily: "Dancing Script", fontSize: "20px"}}>Presentes Padrinhos</Link></li>
            </ul> */}
            <nav>
                <div className="nav-wrapper grey darken-4">
                    <Link to="/" className="brand-logo" style={{marginLeft: '25px', fontFamily: "Dancing Script", fontSize: "40px"}}>UseVint3</Link>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/agenda" style={{ fontFamily: "Dancing Script", fontSize: "20px"}}>Agenda</Link></li> 
                        <li><Link to="/financeiro" style={{ fontFamily: "Dancing Script", fontSize: "20px"}}>Financeiro</Link></li>
                        <li><Link to="/todos-clientes" style={{ fontFamily: "Dancing Script", fontSize: "20px"}}>Clientes</Link></li> 
                        {/* <li>
                            <a  className="dropdown-trigger" 
                                data-target="dropdown1"
                            >
                                Aqui
                                <i className="material-icons right">arrow_drop_down</i>
                            </a>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </div>
    )
}