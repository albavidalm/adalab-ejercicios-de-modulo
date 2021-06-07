import React from "react";

class CityImage extends React.Component {
  constructor(props) {
    super(props);
    this.cities = {
      BuenosAires:
        "https://d1bvpoagx8hqbg.cloudfront.net/originals/mi-buenos-aires-querido-a80509b392885d53d9085dd1d268188f.jpg",
      Sydney:
        "https://www.plateamagazine.com/images/fotos/noticias/sidney_opera_australia_keith_zhu.jpg",
      Praga:
        "https://www.estaentumundo.com/wp-content/imagenes/2012/06/puente-carlos-praga-777x396.jpg",
      Boston:
        "https://www.viajes-carrefour.com/blog/wp-content/uploads/2018/12/boston-massachusetts.jpg",
      Tokio:
        "https://elviajerofeliz.com/wp-content/uploads/2018/05/Que%CC%81-ver-en-Tokio.jpg",
    };
  }

  render() {
    return (
      <div>
        <img
          className="picture"
          src={this.cities[this.props.city]}
          alt={this.props.city}
        />
      </div>
    );
  }
}

export default CityImage;
