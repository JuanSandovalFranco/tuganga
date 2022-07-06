import React, { useContext, useEffect, useState } from "react";
import Input from "../components/Input";
import UserContext from "../context/UserContext";
import { IoPersonOutline, IoLockClosedOutline } from "react-icons/io5";

import logo from "../assets/logo.png";

import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { data } from "./data";
import InfoMessage from "../components/InfoMessage";
import Boton from "../components/Boton";

const Login = () => {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [error, setError] = useState(false);

  const { loadUser, user, Login } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    user !== null && navigate("/dashboard");
  }, []);

  const handleSubmit = async (e) => {
    console.log(userData);
    if (userData.username !== "" && userData.password !== "") {
      Login(userData);
      setTimeout(() => {
        !user && setError(true);
      }, 2000);
    } else {
      setError(true);
    }
  };

  const handleForm = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 4000);
  }, [error]);

  return (
    <div className="container-login">
      <div className="form">
        <Link to="/">
          <img src={logo} width="150px" />
        </Link>
        <h1 className="title-login">Inicio de Sesion</h1>
        <p className="text-greeting">Bienvenido de nuevo</p>
        <label className="text-login" htmlFor="username">
          Nombre de Usuario
        </label>
        <Input
          id="username"
          autoFocus="autofocus"
          icon={<IoPersonOutline />}
          placeholder="Ingresa tu nombre de usuario"
          name="username"
          type="text"
          onChange={(e) => handleForm(e)}
        />
        <label className="text-login" htmlFor="password">
          Contraseña
        </label>
        <Input
          id="password"
          icon={<IoLockClosedOutline />}
          name="password"
          placeholder="Contraseña"
          type="password"
          onChange={(e) => handleForm(e)}
        />
        {error && (
          <InfoMessage alert>Correo o Contraseña incorrecta</InfoMessage>
        )}
        <p className="forgot-password-text">Has olvidado tu contraseña?</p>
        <Boton primary width="100%" onClick={(e) => handleSubmit(e)}>
          Ingresar
        </Boton>
        <p className="sign-up">
          No tienes cuenta?{" "}
          <Link className="link-sign-up" to="/signup">
            Registrarse
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
