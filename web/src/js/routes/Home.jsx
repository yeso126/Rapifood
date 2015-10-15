import React from "react";
import Firebase from "firebase";
import AppBar from "../components/navigation/AppBar.jsx";
import LoginForm from "../components/login/LoginForm.jsx";
import history from '../history';

const ref = new Firebase("https://rapifood.firebaseio.com/");

let Home = React.createClass({

getInitialState: function() {
  return {
      login: false
  };
},



  loginFbSubmit: function (e){
    e.preventDefault();
    ref.authWithOAuthPopup("facebook", function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        history.replaceState(null, '/login');
      }
    });
  },

  loginTwSubmit: function(e){
    e.preventDefault();
    ref.authWithOAuthPopup("twitter", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        history.replaceState(null, '/login');
      }
    });
  },

  render: function() {
    return (
      <div>
        <AppBar></AppBar>
        <article className="hero">
          <form>
            <button onClick={this.loginFbSubmit} className="login" type="submit">Facebook Login</button>
            <button onClick={this.loginTwSubmit} className="login" type="submit">Twitter Login</button>
          </form>
        </article>
        <section className="section1">
          <article className="section1-bullet">
            <h3>Elije lo mejor</h3>
            <p>Muchos restaurantes y gran variedad a tu disposicion</p>
          </article>
          <article className="section1-bullet">
            <h3>Haz tu pedido ya mismo!</h3>
            <p>No esperes en el telefono, pide lo que quieras de inmediato</p>
          </article>
        </section>
      </div>
    );
  }
});

export default Home;
