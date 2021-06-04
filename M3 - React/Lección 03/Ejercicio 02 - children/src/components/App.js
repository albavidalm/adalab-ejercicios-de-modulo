import "../stylesheets/App.css";
import React from "react";
import HalfPage from "./HalfPage";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <HalfPage>
          <h1>Esto es el H1 de la 1ª mitad</h1>
          <p>Estoy a la izquierda</p>
        </HalfPage>
        <HalfPage>
          <h2>Esto es el H2 de la 2ª mitad</h2>
          <p>Estoy a la derecha</p>
        </HalfPage>
      </div>
    );
  }
}

export default App;
