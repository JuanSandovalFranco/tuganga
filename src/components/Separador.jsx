import React from "react";



const Separador = (props) => {

  const style = {
    width:props.width || "90%",
    margin:props.margin || "3.5rem",
    height: "1px",
    backgroundColor: "rgb(220, 220, 220)",
  };

  return <div style={style} className="separator"></div>;
};

export default Separador;
