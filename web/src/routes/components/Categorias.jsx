import styles from './Categorias.css';
import React from 'react';
import Firebase from 'firebase';
import Rebase from 're-base';

var base = Rebase.createClass('https://rapifood.firebaseio.com/');

var Categorias = React.createClass({
  getInitialState: function () {
    return {};
  },

  componentWillMount: function (){
    this.chinaRef = base.bindToState('categorias/china', {
      context: this,
      state: 'china',
      asArray: true
    });
    this.rapidaRef = base.bindToState('categorias/rapida', {
      context: this,
      state: 'rapida',
      asArray: true
    });
  },

  componentWillUnmount: function() {
    base.removeBinding(this.chinaRef);
    base.removeBinding(this.rapidaRef);
  },

  render: function() {
    return (
        <section className={styles.container}>
          <h1 className={styles.title}>Categorias</h1>
          <article className={styles.cat}>
            <h3>Comida China</h3>
            <ul>
              {(this.state.china || []).map(function(value, i) {
                return <li key={i}>{value}</li>;
              })}
            </ul>
          </article>
          <article className={styles.cat}>
            <h3>Comida Rapida</h3>
            <ul>
              {(this.state.rapida || []).map(function(value, i) {
                return <li key={i}>{value}</li>;
              })}
            </ul>
          </article>
        </section>
    );
  }
});


export default Categorias;
