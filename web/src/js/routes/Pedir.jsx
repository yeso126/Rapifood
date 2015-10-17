import React from "react";
import AppBar from "../components/AppBar.jsx";
import Categorias from "../components/Categorias.jsx";

let Pedir = React.createClass({
  getInitialState: function () {
    return {
      userData: ''
    };
  },

  componentWillMount: function() {
    let jsonData = sessionStorage.getItem("user");
    let userData = JSON.parse(jsonData);
    this.setState({
        userData: userData
    });
  },


  render: function() {
    return (
      <div>
        <AppBar/>
        <header>
          <h3>Bienvenido {this.state.userData.facebook.cachedUserProfile.first_name}</h3>
        </header>
        <section className="container">
          <h1>Categorias</h1>

        </section>
      </div>
    );
  }
});

export default Pedir;
