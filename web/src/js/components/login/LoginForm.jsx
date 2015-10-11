import React from "react";
import ReactDOM from "react-dom";
import Firebase from "firebase";

const ref = new Firebase("https://rapifood.firebaseio.com/");
let LoginForm = React.createClass({


handleForm: function (e){
  e.preventDefault();
  let login = {
    email: this.refs.email.value,
    password: this.refs.password.value
  };
  ref.authWithPassword({
    email    : login.email,
    password : login.password
  }, authHandler);
    function authHandler(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
        alert("Correo o contraseña errado");
      } else {
        console.log("Authenticated successfully with payload:", authData);
        alert("Ha iniciado sesion correctamente");
      }
  };
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
