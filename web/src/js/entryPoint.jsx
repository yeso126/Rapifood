import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link } from 'react-router';

// Views
import Login from "./views/Login.jsx";
import Home from "./views/Home.jsx";



ReactDOM.render((
  <Router>
    <Route path="/" component={Home}>
    </Route>
    <Route path="login" component={Login} />
  </Router>
  ),document.getElementById('appContainer')
);
