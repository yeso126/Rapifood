import styles from './pedir.css';

import React from 'react';
import history from '../../history';
import AppBar from '../components/AppBar.jsx';
import Categorias from '../components/Categorias.jsx';

let Pedir = React.createClass({
  getInitialState: function () {
    return {
      userData: ''
    };
  },

  componentWillMount: function() {
    let jsonData = sessionStorage.getItem('user');
    let userData = JSON.parse(jsonData);
    this.setState({
        userData: userData
    });
  },

  render: function() {

    var userName;
    var userPic;
      if ( this.state.userData.twitter === undefined) {
        userName= <h3 className={styles.name}>Bienvenido {this.state.userData.facebook.cachedUserProfile.first_name}</h3>;
        userPic= <img className={styles.pic} src={this.state.userData.facebook.profileImageURL}></img>;
      }
      else if ( this.state.userData.facebook === undefined ) {
          userName= <h3 className={styles.name}>Bienvenido {this.state.userData.twitter.displayName}</h3>;
          userPic= <img className={styles.pic} src={this.state.userData.twitter.profileImageURL} ></img>;
      }
    return (
      <div>
        <AppBar/>
        <div className={styles.user}>
          {userName}
          {userPic}
        </div>
        <Categorias/>
        {this.props.children}
      </div>
    );
  }
});

export default Pedir;
