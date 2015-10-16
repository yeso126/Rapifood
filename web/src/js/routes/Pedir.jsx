import React from "react";
import AppBar from "../components/navigation/AppBar.jsx";



let Pedir = React.createClass({

  getInitialState: function () {
    return {
      userData: sessionStorage.getItem("user")
    };
  },

  render: function() {
    return (
      <div>
        <AppBar/>
        <h1>Categorias</h1>
        <p></p>
      </div>
    );
  }
});

export default Pedir;
