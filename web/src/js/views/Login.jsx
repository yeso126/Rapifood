import React from "react";
import AppBar from "../components/navigation/AppBar.jsx";
import Hero from "../components/navigation/Hero.jsx";
import LoginForm from "../components/login/LoginForm.jsx";

let Login = React.createClass({

  render: function() {
    return (
      <div>
        <AppBar/>
        <LoginForm/>
      </div>
    );
  }
});

export default Login;
