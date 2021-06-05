import React from "react";
import Items from "./Items";

class App extends React.Component {
  render() {
    const items = [
      {
        name: "Cereales con chocolate",
        quantity: 2,
        category: "Cereales",
        price: 5,
      },
      {
        name: "Hamburguesa con queso",
        description: "Hamburguesa rica y saludable",
        quantity: 1,
        category: "Fast-food",
        price: 15,
      },
      {
        name: "Agua mineral",
        description: "Agua de un charco del Himalaya",
        quantity: 2,
        category: "Bebida",
        price: 5,
      },
    ];

    return (
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <Items name={item.name} price={item.price} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default App;
