import React from "react";
import Rebase from "re-base";
import history from '../history';
import AppBar from "../components/AppBar.jsx";
import Categorias from "../components/Categorias.jsx";


var base = Rebase.createClass('https://rapifood.firebaseio.com');

let Pedir = React.createClass({
  getInitialState: function () {
    return {
      userData: '',
      categorias: ''
    };
  },

  componentDidMount: function(){
    base.bindToState('categorias', {
      context: this,
      state: 'categorias',

    });
  },

  componentWillMount: function() {
    let jsonData = sessionStorage.getItem("user");
    let userData = JSON.parse(jsonData);
    this.setState({
        userData: userData
    });
  },


  render: function() {
    var userName;
    var userPic;
      if (this.state.userData.facebook === undefined ) {
        userName= <h3>Bienvenido {this.state.userData.twitter.displayName}</h3>;
        userPic= <img className="user-pic" src={this.state.userData.twitter.profileImageURL} ></img>;
      }
      else if (this.state.userData.twitter === undefined) {
        userName= <h3>Bienvenido {this.state.userData.facebook.cachedUserProfile.first_name}</h3>;
        userPic= <img className="user-pic" src={this.state.userData.facebook.profileImageURL}></img>;
      };

    return (
      <div>
        <AppBar/>
        <header>
          {userName}
          {userPic}
        </header>
        <section className="container">
          <h1>Categorias</h1>
          <Categorias categorias={this.state.categorias}/>
        </section>
      </div>
    );
  }
});

export default Pedir;
