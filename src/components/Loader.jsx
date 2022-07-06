import React from "react";
import "./loader.css";

const Loader = (props) => {
  return (
    <div style={{ marginTop: "10rem" }} {...props} className="cont-loader">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
