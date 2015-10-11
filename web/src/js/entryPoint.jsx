import React from "react";
import ReactDOM from "react-dom";
import LoginContainer from "./components/login/LoginContainer.jsx";




let App = React.createClass({

render: function() {
  return (
    <LoginContainer/>
  );
}

});

ReactDOM.render(
  <App/>,
  document.getElementById('appContainer')
);
