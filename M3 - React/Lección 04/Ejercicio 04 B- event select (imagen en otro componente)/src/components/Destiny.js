import React from "react";
import "../stylesheets/App.css";
import CityImage from "./CityImage";

class Destiny extends React.Component {
  constructor(props) {
    super(props);
    this.citySelected = "";
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.citySelected = event.target.value;
    this.forceUpdate();
  }

  render() {
    return (
      <main>
        <form action="">
          <select
            className="destiny"
            name="cities"
            id="cities"
            value={this.citySelected}
            onChange={this.handleChange}
          >
            <option value="">Selecciona:</option>
            <option value="BuenosAires">Buenos Aires</option>
            <option value="Sydney">Sydney</option>
            <option value="Praga">Praga</option>
            <option value="Boston">Boston</option>
            <option value="Tokio">Tokio</option>
          </select>
        </form>
        <h3>Tu destino es viajar a {this.citySelected}</h3>
        <CityImage city={this.citySelected} />
      </main>
    );
  }
}
export default Destiny;
