import React from "react";
import AppBar from "../components/navigation/AppBar.jsx";
import Hero from "../components/navigation/Hero.jsx";
import LoginForm from "../components/login/LoginForm.jsx";

let Home = React.createClass({

  render: function() {
    return (
      <div>
        <AppBar></AppBar>
        <Hero/>
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
