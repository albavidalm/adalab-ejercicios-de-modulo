import React from "react";

class App extends React.Component {
  render() {
    const students = [
      {
        promo: "A",
        name: "Sofía",
        age: 20,
      },
      {
        promo: "B",
        name: "María",
        age: 21,
      },
      {
        promo: "A",
        name: "Lucía",
        age: 22,
      },
    ];

    const filterStudents = students.filter((student) => {
      return student.promo === "A";
    });

    return (
      <div>
        {filterStudents.map((student) => {
          //console.log(student.promo); Consoleo la promo para conprobar que la recoge bien
          return (
            <li key={student.name}>
              <p>Nombre: {student.name}</p>
              <p>Edad: {student.age}</p>
            </li>
          );
        })}
      </div>
    );
  }
}

export default App;
