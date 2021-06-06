import React from "react";

class Destiny extends React.Component {
  //Especifico cóm crear mi elemento. Va a heredar de App el super(props).
  //Le indico que voy a declarar luego la finción "onChangeHandler" para luego poder usarla en todo el componente.
  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  //Aquí, fuera del constructor, DECLARO a "onChangeHandler"
  onChangeHandler(event) {
    if (event.target.value) {
      alert(`Tu destino es viajar a ${event.target.value}`);
    }
  }
  //En el render() + return() es donde le digo donde tiene q escuchar y a la vez qué tiene que hacer
  render() {
    return (
      <select
        className="destiny"
        name="cities"
        id="cities"
        onChange={this.onChangeHandler}
      >
        <option value="">Selecciona:</option>
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="Sydney">Sydney</option>
        <option value="Praga">Praga</option>
        <option value="Boston">Boston</option>
        <option value="Tokio">Tokio</option>
      </select>
    );
  }
}
export default Destiny;
