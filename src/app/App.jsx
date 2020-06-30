import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/LoginPage';
import GameboardPage from './pages/GameboardPage';
import ModalMessage from './components/ModalMessage';

const App = () => (
  <Router>
    <Switch>
      <Route path='/' exact>
        <LoginPage />
      </Route>
      <Route path='/gameboard'>
        <GameboardPage />
      </Route>
      <Route path='/modal'>
        <ModalMessage />
      </Route>
    </Switch>
  </Router>
);

export default App;
