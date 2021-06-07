import React from "react";
import "../stylesheets/App.css";

class Destiny extends React.Component {
  constructor(props) {
    super(props);
    //Para que sepa qué he seleccionado y qué imagen poner, es decir, para que pueda hacer el condicional es NECESARIO guardar el valor en una VARIABLE.
    //Para poder usar esta variable en todo el componente la declaro en el CONSTRUCTOR en lugar de hacerlo al declarar la función ya que en ese punto sólo la podría usar allí. La declaro y le doy como valor su primer valor (o el que queramos por defecto):
    let citySelected = "Tokio"; //Qué hace? Da igual que esté o no declarada
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.citySelected = event.target.value;
    this.forceUpdate();
  }

  render() {
    let citySrc = "";
    if (this.citySelected === "Buenos Aires") {
      citySrc =
        "https://d1bvpoagx8hqbg.cloudfront.net/originals/mi-buenos-aires-querido-a80509b392885d53d9085dd1d268188f.jpg";
    } else if (this.citySelected === "Sydney") {
      citySrc =
        "https://www.plateamagazine.com/images/fotos/noticias/sidney_opera_australia_keith_zhu.jpg";
    } else if (this.citySelected === "Praga") {
      citySrc =
        "https://www.estaentumundo.com/wp-content/imagenes/2012/06/puente-carlos-praga-777x396.jpg";
    } else if (this.citySelected === "Boston") {
      citySrc =
        "https://www.viajes-carrefour.com/blog/wp-content/uploads/2018/12/boston-massachusetts.jpg";
    } else if (this.citySelected === "Tokio") {
      citySrc =
        "https://elviajerofeliz.com/wp-content/uploads/2018/05/Que%CC%81-ver-en-Tokio.jpg";
    }
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
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Sydney">Sydney</option>
            <option value="Praga">Praga</option>
            <option value="Boston">Boston</option>
            <option value="Tokio">Tokio</option>
          </select>
        </form>
        <img className="picture" src={citySrc} alt="" />
      </main>
    );
  }
}
export default Destiny;
