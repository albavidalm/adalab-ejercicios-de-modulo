/* eslint-disable no-useless-constructor */
import "../stylesheets/App.css";
import image from "../images/C34.jpg";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = {
      image:
        "https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/",
      cardTitle: "Bob Dylan",
      cardDate: "May 24, 1941",
      cardDescription:
        "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
      button: {
        url: "https://en.wikipedia.org/wiki/Bob_Dylan",
        label: "Go to wikipedia",
      },
    };

    const header = (
      <div class="CardHeader">
        <img
          className="Profilepicture"
          src={data.image}
          title="Skull"
          alt="Skull and candle"
        ></img>
        <div class="Cardheader2">
          <h2 className="Username">{data.cardTitle}</h2>
          <h3 className="Date">{data.cardDate}</h3>
        </div>
      </div>
    );
    const text = <p className="Infouser">{data.cardDescription}</p>;
    const footer = (
      <div>
        <a href={data.button.url} target="_blank">
          <input type="button" value={data.button.label} className="button" />
        </a>
        <div class="Postinfo">
          <p className="Likes">37</p>
          <p className="Heart">♥</p>
        </div>
      </div>
    );

    return (
      <div className="App">
        <div className="Cardcontainer">
          {header} {text} {footer}
        </div>
      </div>
    );
  }
}

export default App;
