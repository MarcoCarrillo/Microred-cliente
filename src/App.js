import React from 'react';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import LoginEmpresa from './components/auth/LoginEmpresa';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';

import ProyectoState from './context/proyectos/proyectoState';
import TareaState from './context/tareas/tareaState';

import AlertaState from './context/alertas/alertaState';

import AuthState from './context/autenticacion/authState';

function App() {
  return (
    <ProyectoState>
      <TareaState>
        <AlertaState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path ='/' component={LoginEmpresa} />
                <Route exact path ='/login' component={Login} />
                <Route exact path ='/nueva-cuenta' component={NuevaCuenta} />
                <Route exact path ='/proyectos' component={Proyectos} />
              </Switch>
            </Router>
          </AuthState>
        </AlertaState>
      </TareaState>  
  </ProyectoState>
  );
}

export default App;
