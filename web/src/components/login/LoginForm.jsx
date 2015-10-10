import React from "react";
import ReactDOM from "react-dom";
import belle from "belle";


let TextInput = belle.TextInput;

let LoginForm = React.createClass({

  render: function() {
    return (
      <div>
        <div>
          <label>Nombre de usuario</label>
          <TextInput/>
        </div>
        <div>
          <label>Contraseña</label>
          <TextInput />
        </div>
      </div>
    );
  }
});

export default LoginForm;
