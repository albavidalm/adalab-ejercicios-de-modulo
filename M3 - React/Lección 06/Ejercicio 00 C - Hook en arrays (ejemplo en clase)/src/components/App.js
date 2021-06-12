import React, { useState } from "react";
import "../stylesheets/index.css";

// 1)
// estos datos los tenemos aquí, pero lo normal sería obtenerlos de un API
const shows = [
  { id: "id-1", name: "Dexter" },
  { id: "id-2", name: "Lost" },
  { id: "id-3", name: "Homeland" },
];

const App = () => {
  // 7)
  // El único valor que cambiará en mi web serán los favoritos por eso son los únicos que necesitan gestionar sus estados
  // Aquí declaramos que nuestra constante favs tendrá un valor que variará en el momento setFavs y que el estado inicial de favs será un array vacío
  const [favs, setFavs] = useState([]);

  // 4)
  // Ahora React tiene que manejar el evento que le hemos añadido en el onClick de renderShows: onClick={handleFav}
  // Le declaro la función handleFav para que la reconozca y lo hago mediante const para que guarde sus datos. Le paso como parámetro el evento.
  // 5)
  // Le indico qué evento es el que he clicado
  //6)
  // Le digo que busque en el listado de favoritos. Si no existe: if (favIndex === -1) lo añado, y si ya estaba en favoritos lo elimino favs.splice(favIndex, 1);
  const handleFav = (ev) => {
    // 5)
    const showClickedId = ev.target.id;
    // 6)
    const favIndex = favs.findIndex((fav) => fav.id === showClickedId);
    if (favIndex === -1) {
      const showFound = shows.find((shows) => shows.id === showClickedId);
      favs.push(showFound);
    } else {
      favs.splice(favIndex, 1);
    }

    // 8)
    // Llamo a la función setFavs para que me actualice el listado de favoritos y me los pinte
    // Usamos el SPREAD para que me guarde los datos que tenía y sólo actualice en función de de lo que pase en el condicional del handleFav
    setFavs([...favs]);

    // si en vez de la línea anterior ponemos setFavs(favs); el estado sí se cambia pero React no se entera, así que no re-renderiza
  };

  // 3)
  // Como mi const shows es un Array tengo que hacerle un map para obtener y "separar" los resultados y así poder pintarlos más abajo en el return
  // Del resultado del map le digo que me cree un <li> por cada indexación
  // A cada etiqueta <li> le añado una clase, una key relacionada con su id para que React sepa distinguir cada elemento de cara  a los eventos que le voy a crear, su id en la API y le indico que le añado una función que al hacer click en un futuro me manejará a los favoritos que creo posteriormente
  // Fuera de la etiqueta li le digo que me escriba el nombre de la serie en cada mapeo
  const renderShows = () => {
    return shows.map((show) => {
      return (
        <li
          className="show cursor-pointer"
          key={show.id}
          id={show.id}
          onClick={handleFav}
        >
          {show.name}
        </li>
      );
    });
  };

  // 9)
  // Pintamos nuestros favoritos mapeando nuestro array
  const renderFavs = () => {
    return favs.map((fav) => {
      return (
        <li
          className="show cursor-pointer"
          key={fav.id}
          id={fav.id}
          onClick={handleFav}
        >
          {fav.name}
        </li>
      );
    });
  };

  // 2)
  // EN EL RETURN PLANTEAMOS CÓMO PINTAR EL HTML
  // H1 PARA EL TÍTULO DE LA PAGE
  // DIV col2 CONETENEDOR DE MIS RESULTADOS
  // EL SEGUNDO DIV CONTENDRÁ LAS SERIES QUE VISUALIZO DE MI "API" aka const shows
  // H2 PARA EL TÍTULO DE SECCIÓN
  // UL QUE SE COMPLETARÁ CON EL MAPEO QUE HARÉ ARRIBA DE MIS SHOWS YA QUE ES UN ARRAY

  // POSTERIORMENTE OTRO DIV QUE CONTENDRÁ MIS FAVORITAS
  // H2 PARA EL TÍTULO DE SECCIÓN
  // UL QUE QUE SE COMPLETARÁ CON EL MAPEO QUE HARÉ ARRIBA DE MIS SHOWS FAVORITOS
  return (
    <div>
      <h1>React hooks: useState con arrays</h1>
      <div className="col2">
        {/* series */}
        <div className="border--medium">
          <h2>Series</h2>
          <ul className="pl-1">{renderShows()}</ul>
        </div>

        {/* favs */}
        <div className="border--medium">
          <h2>Favoritas</h2>
          <ul className="pl-1">{renderFavs()}</ul>
        </div>
      </div>
    </div>
  );
};

export default App;
