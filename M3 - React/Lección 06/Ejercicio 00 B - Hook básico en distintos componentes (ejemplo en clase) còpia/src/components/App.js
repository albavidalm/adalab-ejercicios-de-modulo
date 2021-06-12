import "../stylesheets/App.css";
import React, { useState } from "react";
import Form from "./Form";
import Preview from "./Preview";

function App() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  const handleInput = (inputId, inputValue) => {
    if (inputId === "email") {
      setEmail(inputValue);
    } else if (inputId === "name") {
      setName(inputValue);
    } else if (inputId === "color") {
      setColor(inputValue);
    }
  };

  return (
    <div>
      <Form handleInput={handleInput} />

      <Preview email={email} name={name} color={color} />
    </div>
  );
}

export default App;
