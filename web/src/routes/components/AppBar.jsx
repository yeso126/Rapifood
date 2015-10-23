import styles from './AppBar.css';

import React from 'react';
import { Link } from 'react-router';

let AppBar = React.createClass({


  render: function() {

    return (
      <header className={styles.header}>
        <img className={styles.img} src="" alt="Rapifood-logo"/>
        <h1 className={styles.title}>Rapifood</h1>
        <h2 className={styles.subtitle}>Decide y pide rapido lo que quieras</h2>
      </header>
    );
  }
});

export default AppBar;
