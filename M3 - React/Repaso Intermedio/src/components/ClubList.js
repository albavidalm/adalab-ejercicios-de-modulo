import React from "react";
import Club from "./Club";

//console.log(data); DATOS RECOGIDOS OK
const ClubList = (props) => {
  //console.log(props); DATOS RECOGIDOS OK
  //console.log(props.list); DATOS RECOGIDOS DEL ARRAY list OK

  const clubItems = props.list.map((item, index) => {
    return (
      <li key={index}>
        <Club item={item} />
      </li>
    );
  });

  return <ul>{clubItems}</ul>;
};

export default ClubList;
