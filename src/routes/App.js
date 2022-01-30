import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';


import '../assets/styles/App.scss';

const App = () => (
  <HashRouter>
    <Switch>
      <Route exact path = '/' component={Home}/>
    </Switch>
  </HashRouter>
)

export default App