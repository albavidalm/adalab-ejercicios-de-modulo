import React from "react";
import ClubList from "./ClubList";
import data from "../data/clubs.json";
import "../stylesheets/App.css";

//console.log(data); DATOS RECOGIDOS OK
const App = () => {
  return (
    <>
      <h1 className="title">Mis clubes favoritos</h1>
      <ClubList list={data} />
    </>
  );
};

export default App;
