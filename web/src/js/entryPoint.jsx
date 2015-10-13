import React from "react";
import ReactDOM from "react-dom";
import Home from "./views/Home.jsx";
import { Router, Route, Link } from 'react-router';




let App = React.createClass({

render: function() {
  return (
    <Home/>
  );
}

});

ReactDOM.render(
  <App/>,
  document.getElementById('appContainer')
);
