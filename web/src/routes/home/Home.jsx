import styles from  './home.css';

import React from 'react';
import Firebase from 'firebase';

import AppBar from '../components/AppBar.jsx';
import history from '../../history';

const ref = new Firebase('https://rapifood.firebaseio.com/');

let Home = React.createClass({

  loginFbSubmit: function (e){
    e.preventDefault();
    ref.authWithOAuthPopup('facebook', function(error, authData) {
    if (error) {
      alert('Ha habido un problema, por favor intente de nuevo');
      console.log('Login Fallido!', error);
      } else {
        let jsonLogin = JSON.stringify(authData);
        sessionStorage.setItem('user', jsonLogin);
        history.pushState(null , '/pedir');
      }
    });
  },

  loginTwSubmit: function(e){
    e.preventDefault();
    ref.authWithOAuthPopup('twitter', function(error, authData) {
    if (error) {
      alert('Ha habido un problema, por favor intente de nuevo');
      console.log('Login Fallido!', error);
      } else {
        let jsonLogin = JSON.stringify(authData);
        sessionStorage.setItem('user', jsonLogin);
        history.pushState(null, '/pedir');
      }
    });
  },

  render: function() {
    return (
      <div>
        <AppBar></AppBar>
        <article className={styles.hero}>
          <form>
            <button onClick={this.loginFbSubmit} className={styles.login} type="submit">Facebook Login</button>
            <button onClick={this.loginTwSubmit} className={styles.login} type="submit">Twitter Login</button>
          </form>
        </article>
        <section className={styles.section1}>
          <article >
            <h3>Elije lo mejor</h3>
            <p>Muchos restaurantes y gran variedad a tu disposicion</p>
          </article>
          <article >
            <h3>Haz tu pedido ya mismo!</h3>
            <p>No esperes en el telefono, pide lo que quieras de inmediato</p>
          </article>
        </section>
      </div>
    );
  }
});

export default Home;
