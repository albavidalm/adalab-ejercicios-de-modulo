import "../stylesheets/App.css";
import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("example");
  const [address, setAddress] = useState({
    country: "Spain",
    city: "Barcelona",
  });

  const handleEmail = (ev) => {
    setEmail(ev.target.value);
  };

  const handleCity = (ev) => {
    setAddress({
      country: address.country,
      city: ev.target.value,
    });
  };
  return (
    <div>
      <h1>React hooks: useState simple</h1>
      <form>
        <label className="form__label" htmlFor="email">
          Escribe tu email
        </label>
        <input
          className="form__input-text"
          type="text"
          id="email"
          onChange={handleEmail}
        />
        <label className="form__label" htmlFor="city">
          Escribe tu ciudad
        </label>
        <input
          className="form__input-text"
          type="text"
          id="city"
          onChange={handleCity}
        />
      </form>
      <p className="border--medium">Tu email es: {email}</p>
      <p className="border--medium">Tu ciudad es: {address.city}</p>
      <p className="border--medium">Tu país es: {address.country}</p>
    </div>
  );
}

export default App;
