import React from "react";
import ReactDOM from "react-dom";

let LoginForm = React.createClass({

  render: function() {
    return (
      <div className="login-container">
        <div className="login-container-username">
          <label>Nombre de usuario</label>
          <input type="text"/>
        </div>
        <div className="login-container-password">
          <label>Contraseña</label>
          <input type="password" />
        </div>
      </div>
    );
  }
});

export default LoginForm;
