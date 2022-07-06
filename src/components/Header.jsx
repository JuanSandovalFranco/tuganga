import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserContext from "../context/UserContext";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  IoPersonOutline,
  IoCartOutline,
  IoSearchOutline,
  IoCloseOutline,
  IoBoatOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import "./header.css";
import "./menu.css";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Overlay from "./Overlay";
import { IoPhonePortraitOutline, IoHeadsetOutline } from "react-icons/io5";
import HoverMenu from "./HoverMenu";
import Separador from "./Separador";
import Logo from "./Logo";
import logo from "../assets/logo.png";
import Boton from "./Boton";
import CartContext from "../context/CartContext";
import { animate, motion } from "framer-motion";

const Header = () => {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const [menu, setmenu] = useState(false);
  const [search, setSearch] = useState("");
  const [subMenu, setsubMenu] = useState(false);

  const navigation = useNavigate();

  useSearchParams();

  const userContext = useContext(UserContext);
  const { LogOut } = userContext;

  const cart = useContext(CartContext);

  const { cartState } = cart;

  return (
    <header className="header">
      {menu ? (
        <Overlay>
          <motion.div
            initial={{ x: "-100%" }}
            transition={{ duration: 0.2 }}
            animate={setmenu && { x: 0 }}
            className="box-menu"
          >
            <button className="container-close-menu">
              <IoCloseOutline
                onClick={() => setmenu(false)}
                className="icon-close-menu"
              ></IoCloseOutline>
            </button>
            <ul className="cont-menu">
              <li className="menu_links">
                <Link
                  to={"/celulares"}
                  onMouseEnter={() => {
                    setsubMenu(true);
                  }}
                  onMouseLeave={() => setsubMenu(false)}
                  className="menu-categories"
                >
                  <IoPhonePortraitOutline className="icon-category"></IoPhonePortraitOutline>
                  <span className="text-link">Celulares</span>
                </Link>

                {subMenu ? (
                  <ul
                    onMouseEnter={() => {
                      setsubMenu(true);
                    }}
                    onMouseLeave={() => setsubMenu(false)}
                    className="sub-category-list"
                  >
                    <li className="sub-category">
                      <Link
                        to={"/celulares/xiaomi"}
                        className="menu-categories"
                      >
                        <span className="text-link">Xiaomi</span>
                      </Link>
                    </li>
                    <li className="sub-category">
                      <Link
                        to={"/celulares/iphone"}
                        className="menu-categories"
                      >
                        <span className="text-link">iPhone</span>
                      </Link>
                    </li>
                    <li className="sub-category">
                      <Link
                        to={"/celulares/samsung"}
                        className="menu-categories"
                      >
                        <span className="text-link">Samsung</span>
                      </Link>
                    </li>
                    <li className="sub-category">
                      <Link
                        to={"/celulares/realme"}
                        className="menu-categories"
                      >
                        <span className="text-link">Realme</span>
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>

              <li className="menu_links">
                <Link
                  to={"/celulares"}
                  onMouseEnter={() => {
                    setsubMenu(true);
                  }}
                  onMouseLeave={() => setsubMenu(false)}
                  className="menu-categories"
                >
                  <IoHeadsetOutline className="icon-category"></IoHeadsetOutline>
                  <span className="text-link">Audifonos</span>
                </Link>

                {subMenu ? (
                  <ul
                    onMouseEnter={() => {
                      setsubMenu(true);
                    }}
                    onMouseLeave={() => setsubMenu(false)}
                    className="sub-category-list"
                  >
                    <li className="sub-category">
                      <Link
                        name="hola"
                        to={"/celulares/xiaomi"}
                        className="menu-categories"
                      >
                        <span className="text-link">Xiaomi</span>
                      </Link>
                    </li>
                    <li className="sub-category">
                      <Link
                        to={"/celulares/iphone"}
                        className="menu-categories"
                      >
                        <span className="text-link">iPhone</span>
                      </Link>
                    </li>
                    <li className="sub-category">
                      <Link
                        to={"/celulares/samsung"}
                        className="menu-categories"
                      >
                        <span className="text-link">Samsung</span>
                      </Link>
                    </li>
                    <li className="sub-category">
                      <Link
                        to={"/celulares/realme"}
                        className="menu-categories"
                      >
                        <span className="text-link">Realme</span>
                      </Link>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </motion.div>
        </Overlay>
      ) : (
        ""
      )}

      <button onClick={() => setmenu(true)} className="menu-dropdown">
        <FontAwesomeIcon
          className={`menu-icon ${menu ? "is-dropdown" : ""}`}
          icon={faBars}
        />
      </button>
      <div className="cont-logo">
        <Link to={"/"} className="logo">
          <img style={{ width: "150px" }} src={logo} alt="" />
        </Link>
      </div>
      <div className="container-search">
        <input
          onChange={(e) => handleSearch(e)}
          onKeyDown={(e) =>
            e.key === "Enter" && navigation(`/search/?text=${search}`)
          }
          type="search"
          placeholder="Que buscas hoy?"
          className="search"
        />

        <IoSearchOutline className="icon-search"></IoSearchOutline>
      </div>
      <div className="container-actions">
        {userContext.user ? (
          <div
            style={{ position: "relative" }}
            className="user-profile nav__menu"
          >
            <Link className="cont-user-image-profile" to={`profile`}>
              <img
                className="user-image-profile"
                src={userContext.user.imageUser}
                alt=""
              />
              <HoverMenu>
                <ul>
                  <li>
                    <Link to={`/profile`}>
                      <IoPersonOutline />
                      perfil
                    </Link>
                  </li>
                  <li>
                    <Separador margin="5px" />
                  </li>
                  <li>
                    <Link to={`/profile`}>
                      <IoCartOutline /> mis compras
                    </Link>
                  </li>
                  <li>
                    <Link to={`/profile`}>
                      <IoBoatOutline />
                      pedidos
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={(e) => LogOut()}>
                      <IoLogOutOutline />
                      Salir
                    </Link>
                  </li>
                </ul>
              </HoverMenu>
            </Link>
          </div>
        ) : (
          <Link
            to={"/login"}
            className="container-actions-cont-user container-actions-user link"
          >
            <IoPersonOutline className="icon-user"></IoPersonOutline>
            <span className="text-user-login">Iniciar Sesion</span>
          </Link>
        )}
        <Link
          to={"/cart"}
          className="container-actions-cont-cart container-actions-user link"
          style={{ position: "relative" }}
        >
          {cartState.cart.length !== 0 && (
            <span className="number-products-cart">
              {cartState.cart.length}
            </span>
          )}
          <IoCartOutline className="icon-cart"></IoCartOutline>
          <span className="text-user-cart">Mi carrito</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
