import React from "react";

const Club = (props) => {
  // console.log(props); //Estas props reciben la info del return de la función const clubItems (En el primer planteamiento del ejercicio donde enviamos el objeto desglosado)
  // console.log(props.item); // Comprobamos que recibe toda la info del objeto item
  const renderMembers = () => {
    return props.item.members.map((member, index) => {
      return (
        <li key={index} className="members__item">
          {member}
        </li>
      );
    });
  };
  return (
    <>
      <article className="club">
        <i className={`club__icon ${props.item.fa}`}></i>
        <div className="club__info">
          <h2 className="club__title">{props.item.name}</h2>
          <h4 className="members__title">Members:</h4>
          <ul className="members__list">{renderMembers()}</ul>
        </div>
      </article>
    </>
  );
};

export default Club;
