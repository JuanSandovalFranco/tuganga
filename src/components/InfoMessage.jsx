import React from "react";
import styledComponents from "styled-components";
import { color } from "../theme/theme";
import { IoCloseOutline, IoCheckmarkOutline } from "react-icons/io5";

const InfoMessage = (props) => {
  const Message = styledComponents.div`
    padding:0.5rem;
    display:flex;
    align-items:center;
    

    &, p{
      font-size:1.2rem;
      color: ${(props) => (props.alert ? color.alert : color.info)};
      margin-left:1rem;
    }

    &, svg{
      font-size:1.5rem;
      
    }


  `;

  return (
    <Message {...props} type={props.type} className={`info-message`}>
      {props.alert ? (
        <IoCloseOutline />
      ) : (
        props.success && <IoCheckmarkOutline />
      )}
      <p>{props.children}</p>
    </Message>
  );
};

export default InfoMessage;
