import "../stylesheets/App.css";
import { Route, Switch } from "react-router";
import React from "react";
import Header from "./Header";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Home1 from "./Home1";
import Home2 from "./Home2";
import PageNotFound from "./PageNotFound";

const App = () => {
  return (
    <div>
      <Header />
      <h2>Router con switch</h2>
      <Switch>
        <Route exact path="/">
          <p>Hola</p>
        </Route>

        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
