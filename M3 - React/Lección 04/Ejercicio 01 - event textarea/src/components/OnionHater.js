import React from "react";

class OnionHater extends React.Component {
  //Especifico cóm crear mi elemento. Va a heredar de App el super(props).
  //Le indico que voy a declarar luego la finción "handleTextArea" para luego poder usarla en todo el componente.
  constructor(props) {
    super(props);
    this.handleTextArea = this.handleTextArea.bind(this);
  }
  //Aquí, fuera del constructor, DECLARO a "handleTextArea"
  handleTextArea(event) {
    //console.log(
    //"me han escrito:",
    //event.target.value,
    //"con el evento: ",
    //event
    //);

    //A) OPCIÓN CON EL VALUE DEL TARGET:
    // if (event.target.value === "cebolla") {
    // alert("ODIO LA CEBOLLA");
    // }

    //B) OPCIÓN CON EL INCLUDES:
    if (event.target.value.includes("cebolla") === true) {
      alert("ODIO LA CEBOLLA");
    }
  }
  //En el render() + return() es donde le digo donde tiene q escuchar y a la vez qué tiene que hacer
  render() {
    return (
      <textarea
        className="textarea"
        name="textarea"
        id="textarea"
        onChange={this.handleTextArea}
      ></textarea>
    );
  }
}
export default OnionHater;
