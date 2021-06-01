/* eslint-disable no-useless-constructor */
import React from "react";
import MediaCard from "./MediaCard";
import image from "../images/C34.jpg";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MediaCard
          name="All Bones"
          date="Lunes, 31 de mayo de 2021"
          picture={image}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra,
        ipsum vitae consectetur pulvinar, mi lacus tincidunt nisi, non maximus
        mi nunc ut leo. Mauris ut ligula accumsan, pulvinar urna in, venenatis
        lorem. Integer auctor, nibh ut semper porttitor, nisi lectus lobortis
        nibh, eu tincidunt eros risus eu massa. Phasellus lacinia magna vel arcu
        sodales, at consectetur metus facilisis. Donec imperdiet faucibus justo,
        et rhoncus dolor fermentum venenatis. Ut ornare, tortor sit amet laoreet
        lobortis, mi diam egestas quam, at pharetra massa massa eu dolor."
          likes="37"
          heart="♥"
        />
      </div>
    );
  }
}

export default App;
