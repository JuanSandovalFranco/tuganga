import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import "../components/cart.css";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";
import Quantity from "../components/Quantity";
import Boton from "../components/Boton";
import { types } from "../reducer/CartTypes";
import Separador from "../components/Separador";
import { motion } from "framer-motion";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const { cartState, cartDispatch } = cartContext;

  const { cart, total } = cartState;

  useEffect(() => {
    cartDispatch({ type: types.TOTAL_CART });
  }, [cartState.cart]);

  return (
    <>
      <Header></Header>
      <div className="container-cart">
        <h1 className="title-cart">Carrito</h1>

        {cart.length === 0 && (
          <div className="empty-cart">
            <p className="text-empty-cart">No hay productos en el carrito</p>
            <p className="text-empty">
              Hay miles de productos perfectos para ti
            </p>
            <Link to="/tienda" className="buy-products">
              Ir a comprar
            </Link>
          </div>
        )}

        {cart.length !== 0 &&
          cart.map((el) => (
            <>
              <motion.div
                initial={{ opacity: 0, x: 90 }}
                animate={{ opacity: 1, x: 0 }}
                key={el.id}
                className="cart-elements"
              >
                <img className="image" src={el.image} width="100px" alt="" />
                <Link to={`${el.url}`}>
                  <p className="product-name">{el.name}</p>
                </Link>
                <div>
                  <p className="offer-price">{`$ ${new Intl.NumberFormat().format(
                    el.offer
                  )}`}</p>
                  <p className="price">{`$ ${new Intl.NumberFormat().format(
                    el.price
                  )}`}</p>
                </div>
                <div className="options-element">
                  <Quantity></Quantity>
                  <button
                    className="remove-item"
                    onClick={(e) =>
                      cartDispatch({
                        type: types.REMOVE_OF_CART,
                        payload: { id: el.id },
                      })
                    }
                  >
                    Eliminar
                  </button>
                </div>
              </motion.div>

              <Separador width="100%" margin="2rem" />
            </>
          ))}

        {cart.length !== 0 && (
          <>
            <div className="total-price">
              <span className="title-total-cart">Total</span>
              <p className="price-total">{` $ ${new Intl.NumberFormat().format(
                total
              )}`}</p>
            </div>
            <div className="checkout">
              <Boton primary width="30%">
                Continuar con la compra
              </Boton>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
