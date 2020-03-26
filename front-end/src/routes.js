import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import Cadastro from './pages/Cadastro';
import Profile from './pages/Profile';
import NewIncidents from './pages/NewIncidents';

export default function Router() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Logon}></Route>
      <Route path='/register' component={Cadastro}></Route>
      <Route path='/profile' component={Profile}></Route>
      <Route path='/incident/new' component={NewIncidents}></Route>
    </Switch>
  </BrowserRouter>
  );
}
