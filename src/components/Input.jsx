import React from "react";

import "./input.css";

const Input = (props) => {
  return (
    <div className="container-input">
      {props.icon && <span className="icon-input">{props.icon}</span>}
      <input className="input" {...props} />
    </div>
  );
};

export default Input;
