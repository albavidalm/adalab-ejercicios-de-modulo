import "../stylesheets/App.css";

import React from "react";

const MediaCard = (props) => {
  console.log(props);
  const header = (
    <div className="CardHeader">
      <img
        className="Profilepicture"
        src={props.picture}
        title="Skull"
        alt="Skull and candle"
      ></img>
      <div className="Cardheader2">
        <h2 className="Username">{props.name}</h2>
        <h3 className="Date">{props.date}</h3>
      </div>
    </div>
  );
  const text = <p className="Infouser">{props.description}</p>;
  const footer = (
    <div>
      <a className="Moreinfo" href="#">
        Leer más...
      </a>
      <div className="Postinfo">
        <p className="Likes">{props.likes}</p>
        <p className="Heart">{props.heart}</p>
      </div>
    </div>
  );

  return (
    <div className="Cardcontainer">
      {header} {text} {footer}
    </div>
  );
};

export default MediaCard;
