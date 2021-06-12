import "../stylesheets/App.css";
import React, { useState } from "react";

const Input = (props) => {
  const handleInput = (ev) => {
    props.handleInput(props.id, ev.target.value);
  };
  return (
    <div>
      <label htmlFor={props.id}>{props.labelText}</label>
      <input
        className="form__input-text"
        type="text"
        id={props.id}
        name={props.name}
        onChange={handleInput}
      />
    </div>
  );
};

export default Input;
