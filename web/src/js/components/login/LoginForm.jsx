import React from "react";
import ReactDOM from "react-dom";

let LoginForm = React.createClass({
getInitialState: function(){
  return {
    email: '',
    password: ''
  };
},

handleForm: function (e){
  e.preventDefault();
  console.log('Click');
},

  render: function() {
    return (
      <form onSubmit={this.handleForm} className="login-container">
        <h1 className="login-title">Iniciar sesion</h1>
        <div className="login-container-username">
          <label>Email</label>
          <input ref="email" type="email"/>
        </div>
        <div className="login-container-password">
          <label>Contraseña</label>
          <input ref="password" type="password" />
        </div>
        <button type="submit">Entrar</button>
      </form>
    );
  }
});

export default LoginForm;
