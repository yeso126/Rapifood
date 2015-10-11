import React from "react";
import ReactDOM from "react-dom";
import Firebase from "firebase";

var ref = new Firebase("https://rapifood.firebaseio.com/");

let LoginForm = React.createClass({
getInitialState: function(){

  return {
    email: '',
    password: ''
  };
},

handleForm: function (e){
  e.preventDefault();
  ref.authWithPassword({
  email    : 'demo@demo.com',
  password : 'demo'
}, authHandler);
function authHandler(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
}
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
