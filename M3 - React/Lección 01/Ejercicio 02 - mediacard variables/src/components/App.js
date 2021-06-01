/* eslint-disable no-useless-constructor */
import "../stylesheets/App.css";
import image from "../images/C34.jpg";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //const main = <div className="Cardcontainer"></div>;
    const header = (
      <div class="CardHeader">
        <img
          className="Profilepicture"
          src={image}
          title="Skull"
          alt="Skull and candle"
        ></img>
        <div class="Cardheader2">
          <h2 className="Username">All Bones</h2>
          <h3 className="Date">Lunes, 31 de mayo de 2021</h3>
        </div>
      </div>
    );
    const text = (
      <p className="Infouser">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra,
        ipsum vitae consectetur pulvinar, mi lacus tincidunt nisi, non maximus
        mi nunc ut leo. Mauris ut ligula accumsan, pulvinar urna in, venenatis
        lorem. Integer auctor, nibh ut semper porttitor, nisi lectus lobortis
        nibh, eu tincidunt eros risus eu massa. Phasellus lacinia magna vel arcu
        sodales, at consectetur metus facilisis. Donec imperdiet faucibus justo,
        et rhoncus dolor fermentum venenatis. Ut ornare, tortor sit amet laoreet
        lobortis, mi diam egestas quam, at pharetra massa massa eu dolor.
      </p>
    );
    const footer = (
      <div>
        <a className="Moreinfo" href="#">
          Leer más...
        </a>
        <div class="Postinfo">
          <p className="Likes">37</p>
          <p className="Heart">♥</p>
        </div>
      </div>
    );

    return (
      <div className="Cardcontainer">
        {header} {text} {footer}
      </div>
    );
  }
}

export default App;
