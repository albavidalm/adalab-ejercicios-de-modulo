import "../stylesheets/App.css";

import React from "react";

class MediaCard extends React.Component {
  render() {
    console.log(this.props);
    const header = (
      <div className="CardHeader">
        <img
          className="Profilepicture"
          src={this.props.picture}
          title="Skull"
          alt="Skull and candle"
        ></img>
        <div className="Cardheader2">
          <h2 className="Username">{this.props.name}</h2>
          <h3 className="Date">{this.props.date}</h3>
        </div>
      </div>
    );
    const text = <p className="Infouser">{this.props.description}</p>;
    const footer = (
      <div>
        <a className="Moreinfo" href="#">
          Leer más...
        </a>
        <div className="Postinfo">
          <p className="Likes">{this.props.likes}</p>
          <p className="Heart">{this.props.heart}</p>
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

export default MediaCard;
