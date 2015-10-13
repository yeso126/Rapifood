import React from "react";
import ReactDOM from "react-dom";
import AppBar from "../components/navigation/AppBar.jsx";
import Hero from "../components/navigation/Hero.jsx";
import LoginForm from "../components/login/LoginForm.jsx";

let Home = React.createClass({

  render: function() {
    return (
      <div>
        <AppBar/>
        <Hero/>
        <LoginForm/>
      </div>
    );
  }
});

export default Home;
