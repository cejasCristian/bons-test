import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from '../features/Login';
import GameboardPage from '../features/Gameboard';

const Routes = () => (
  <Router>
    <Switch>
      <Route path='/' exact>
        <LoginPage />
      </Route>
      <Route path='/gameboard'>
        <GameboardPage />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
