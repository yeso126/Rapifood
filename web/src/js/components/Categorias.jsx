import React from "react";
import Firebase from "firebase";


let Categorias = React.createClass({


  render: function() {
    var china = this.props.categorias.china;
    console.log(china);

    return (
        <section className="container">
          <ul>
          
          </ul>
        </section>
    );
  }
});

export default Categorias;
