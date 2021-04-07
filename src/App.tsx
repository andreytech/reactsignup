import React from 'react';
import { Signup } from './components/Signup';
import { Dashboard } from './components/Dashboard';
import { Login } from './components/Login';
import { PrivateRoute } from './components/PrivateRoute';

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/reactsignup">
      <Switch>
        <PrivateRoute exact path='/' component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
