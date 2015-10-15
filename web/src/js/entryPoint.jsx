import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

// Views
import Login from "./routes/Login.jsx";
import Home from "./routes/Home.jsx";
import AppBar from "./components/navigation/AppBar.jsx";


let history = createBrowserHistory();

let App = React.createClass({

  render: function() {
    return (
      <div>
        <AppBar></AppBar>

        {this.props.children}
      </div>
    );
  }
});


ReactDOM.render((
  <Router history={history} >
    <Route path="/" component={Home} />
    <Route path="login" component={Login} />
  </Router>
  ),document.getElementById('appContainer')
);
