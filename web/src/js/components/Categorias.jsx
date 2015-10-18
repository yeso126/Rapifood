import React from "react";
import Firebase from "firebase";
import Rebase from "re-base";

var base = Rebase.createClass('https://rapifood.firebaseio.com');

let Categorias = React.createClass({
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




  render: function() {
    var itemsArray = this.state.categorias;
    console.log(itemsArray);

    return (
      <div>
        <section className="container">
          <ul></ul>
        </section>
      </div>
    );
  }
});

export default Categorias;
