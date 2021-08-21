import React from 'react';
import NavBar from './components/navbar/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Clientes from './components/clientes/Clientes';
import Financeiro from './components/financeiro/Financeiro';
import AgendaList from './components/agenda/AgendaList';



export default function App() {

  return (
    <div>
      <Router>
      <NavBar/>
        <Switch>
          <Route path="/todos-clientes">
            <Clientes/>
          </Route>
          <Route path="/agenda">
            <AgendaList/>
          </Route>


          <Route path="/financeiro">
            <Financeiro/>
          </Route>

          <Route path="/">
            <img style={{width: "100%", height:"1000px" ,float:"left", position:"fixed"}} src="/images/capa.PNG" />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}