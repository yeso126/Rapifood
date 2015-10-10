import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./LoginForm.jsx";

let LoginContainer = React.createClass({

  render: function() {
    return (
      <div>
        <LoginForm></LoginForm>
      </div>
    );
  }
});

export default LoginContainer;
