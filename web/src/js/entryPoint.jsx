// Dependencies imports
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link } from 'react-router';
import history from './history';
// Routes imports
import Home from "./routes/Home.jsx";
import Pedir from "./routes/Pedir.jsx";



ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={Home} />
    <Route path="/pedir" component={Pedir}>

    </Route>
  </Router>
  ),document.getElementById('appContainer')
);
