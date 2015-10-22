// Dependencies imports
import './normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import history from './history';
// Routes imports
import Home from './routes/home/Home.js';
import Pedir from './routes/pedir/Pedir.js';



ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={Home} />
    <Route path="/pedir" component={Pedir}>

    </Route>
  </Router>
  ),document.getElementById('appContainer')
);
