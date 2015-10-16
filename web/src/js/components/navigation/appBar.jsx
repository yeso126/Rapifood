import React from "react";
import { Link } from 'react-router';

let AppBar = React.createClass({

  render: function() {
    return (
      <header className="header">
        <img className="header-img" src="" alt="Rapifood-logo"/>
        <h1 className="header-title">Rapifood</h1>
        <h2 className="header-subtitle">Decide y pide rapido lo que quieras</h2>
      </header>
    );
  }
});

export default AppBar;
