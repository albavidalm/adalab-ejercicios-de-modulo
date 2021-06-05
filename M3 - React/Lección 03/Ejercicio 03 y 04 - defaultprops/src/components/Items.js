import React from "react";
import PropTypes from "prop-types";

class Items extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h2>Nombre: {this.props.name}</h2>
        <p>Descripción: {this.props.description}</p>
        <p>Precio: {this.props.price}</p>
      </>
    );
  }
}

Items.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

//No funciona bien, no detecta qué elementos son los que no tienen descripción
Items.defaultProps = {
  description: "No hay descripción",
};

export default Items;
