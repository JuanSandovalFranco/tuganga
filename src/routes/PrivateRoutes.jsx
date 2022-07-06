import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const PrivateRoutes = ({ children, redirect,state}) => {
  const context = useContext(UserContext);
  const [isRedirect,setIsRedirect] = useState(false)
  const navigate = useNavigate()

  const { user } = context;

  useEffect(()=>{
    if(!user){
      setIsRedirect(true)
      navigate(redirect)
    }
  },[])

  return isRedirect && children

  
};

export default PrivateRoutes;
