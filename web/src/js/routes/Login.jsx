import React from "react";
import AppBar from "../components/navigation/AppBar.jsx";
import LoginForm from "../components/login/LoginForm.jsx";

let Login = React.createClass({

  render: function() {
    return (
      <div>
        <LoginForm/>
      </div>
    );
  }
});

export default Login;
