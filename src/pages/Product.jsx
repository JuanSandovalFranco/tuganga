import React, { useContext, useEffect, useReducer, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Container from "../components/Container";
import Header from "../components/Header";
import Loader from "../components/Loader";
import ProductMedia from "../components/ProductMedia";
import {
  getProduct,
  getProductAttributes,
  getProducts,
} from "../utils/product";
import "./Product.css";
import { data } from "./data";
import Offer from "../components/Offer";
import Score from "../components/Score";
import CardsOptions from "../components/CardsOptions";
import Quantity from "../components/Quantity";
import productReducer, { initialState } from "../reducer/productReducer";
import types from "../reducer/typesProduct";
import { data2 } from "./data2";
import Helmet from "react-helmet";
import JsonLd from "../components/JsonLd";
import Title from "../components/Title";
import Information from "../components/Information";
import Separador from "../components/Separador";
import VerMas from "../components/VerMas";

import {
  IoCheckmarkCircleOutline,
  IoAirplaneOutline,
  IoLockClosedOutline,
} from "react-icons/io5";
import PaymentMethods from "../components/PaymentMethods";
import { data3 } from "./data3";
import Boton from "../components/Boton";
import CartContext from "../context/CartContext";
import Notification from "../components/Notification";
import { SchemaProduct } from "../utils/SchemaProduct";

const Product = () => {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(productReducer, initialState);
  const { producto, options, variationActive, quantity } = state;
  const [productVariation, setProductVariation] = useState(false);

  const [variations, setVariations] = useSearchParams();
  const cartContext = useContext(CartContext);
  const { cartState, cartDispatch } = cartContext;

  const [loading, setLoading] = useState(false);
  const { pathname } = useLocation();
  const productId = pathname.split("/")[3];

  const location = useLocation();

  useEffect(() => {
    console.log(location);

    setLoading(true);
    getProduct(productId).then((res) => {
      dispatch({ type: types.PRODUCT_ACTIVE, payload: res });
      setLoading(false);
    });

    dispatch({ type: types.PRODUCT_ACTIVE, payload: data });

    setLoading(false);

    productVariation &&
      getProduct(producto.variations[0]).then((res) => {
        dispatch({ type: types.VARIATION_ACTIVE, payload: res });
      });

    dispatch({ type: types.VARIATION_ACTIVE, payload: data2 });
  }, []);

  useEffect(() => {
    if (Object.keys(producto).length !== 0) {
      if (producto.variations.length !== 0) {
        /* getProduct(producto.variations[0]).then((res)=>{
          dispatch({ type: types.VARIATION_ACTIVE, payload: res});
        }) */

        dispatch({ type: types.VARIATION_ACTIVE, payload: data2 });
        setProductVariation(true);
      }
    }
  }, [producto]);

  useEffect(() => {
    let LastSelected = document.querySelectorAll(".selected-option");

    LastSelected = Object.values(LastSelected);

    LastSelected &&
      LastSelected.map((element) =>
        element.classList.remove("selected-option")
      );

    if (options.length !== 0) {
      options.map((el) =>
        document
          .querySelector(`[name="${el.option}"]`)
          .classList.add("selected-option")
      );
    }

    if (options.length !== 0) {
      let LastElement;

      options.map((el) => {
        setVariations({ ...LastElement, [el.fromOption]: el.option });
        LastElement = { [el.fromOption]: el.option };
      });

      let search = "";

      options.forEach((element) => {
        search += element.option + " ";
      });
    }
  }, [options]);

  function AddToCart(e) {
    let product = {};

    if (productVariation === false) {
      product = {
        id: producto.id,
        name: producto.name,
        price: producto.price,
        quantity: quantity,
        offer: producto.sale_price,
        url: location.pathname,
      };
    } else {
      product = {
        id: variationActive.id,
        name: variationActive.name,
        image: variationActive.images[0]?.src ?? producto.images[0].src,
        price: variationActive.price,
        quantity: quantity,
        offer: variationActive.sale_price,
        url: location.pathname + location.search,
      };
    }

    console.log(product);

    console.log(product);

    cartDispatch({ type: types.ADD_TO_CART, payload: product });

    navigate("/cart");
  }

  useEffect(() => {
    if (Object.keys(variationActive).length !== 0) {
      variationActive.attributes.map((el) => {
        dispatch({
          type: types.SELECT_OPTIONS,
          payload: { fromOption: el.name, option: el.option },
        });
      });
    }
  }, [variationActive]);

  const handleOption = (fromOption, option, e) => {
    dispatch({
      type: types.SELECT_OPTIONS,
      payload: { fromOption: fromOption, option: option },
    });

    /* getProductAttributes(producto.id ,search).then(response => dispatch({type:types.VARIATION_ACTIVE,payload:response[0]})) */
    dispatch({ type: types.VARIATION_ACTIVE, payload: data3 });
  };

  return (
    Object.keys(producto).length !== 0 &&
    productVariation && (
      <>
        <Helmet>
          <title>{`${variationActive.name} | Tuganga`}</title>

          <script type="application/ld+json">
            {`
                  ${
                    productVariation
                      ? SchemaProduct(
                          producto.name,
                          producto.images,
                          producto.description,
                          producto.categories[producto.categories.length - 1]
                            .name,
                          producto.sku,
                          producto.sale_price,
                          "https://tugangastores.com" +
                            location.pathname +
                            location.search,
                          producto.price,
                          producto.stock_status,
                          producto.average_rating,
                          producto.rating_count
                        )
                      : SchemaProduct(
                          variationActive.name,
                          variationActive.images,
                          variationActive.description,
                          variationActive.categories[
                            producto.categories.length - 1
                          ].name,
                          variationActive.sku,
                          variationActive.sale_price,
                          "https://tugangastores.com" +
                            location.pathname +
                            location.search,
                          variationActive.price,
                          variationActive.stock_status,
                          variationActive.average_rating,
                          variationActive.rating_count
                        )
                  }
                `}
          </script>
        </Helmet>

        <div>
          <Header></Header>
          <Container displayStyle="flex">
            <div className="media-description">
              <ProductMedia images={producto.images}></ProductMedia>
              <Separador />
              <div
                className="description"
                dangerouslySetInnerHTML={{
                  __html: producto.description.slice(
                    0,
                    producto.description.length / 8
                  ),
                }}
              ></div>
              <VerMas
                className="description"
                look={false}
                dangerouslySetInnerHTML={{
                  __html: producto.description.slice(
                    producto.description.length / 8,
                    producto.description.length
                  ),
                }}
              ></VerMas>
            </div>

            <div className="product-information-main">
              <div className="content-title">
                <h1 className="title-product">{variationActive.name}</h1>
                {!loading && (
                  <Offer
                    class="offer-product"
                    text={Math.round(
                      100 -
                        (variationActive.sale_price * 100) /
                          variationActive.regular_price
                    )}
                  ></Offer>
                )}
              </div>
              <div className="review-mark">
                {parseInt(producto.average_rating) !== 0 && (
                  <>
                    <Score
                      mode="review"
                      review={producto.average_rating}
                    ></Score>
                    <p className="review-product">263 Opiniones</p>
                  </>
                )}
              </div>

              <div className="cont-product-price">
                <span className="price-product">
                  {"$ " +
                    new Intl.NumberFormat().format(
                      producto.price || variationActive.price
                    )}
                </span>

                {producto.regular_price !== "" ? (
                  <span
                    className="normal-price-product"
                    dangerouslySetInnerHTML={{
                      __html:
                        "$ " +
                        new Intl.NumberFormat().format(
                          productVariation ? variationActive.regular_price : ""
                        ),
                    }}
                  ></span>
                ) : productVariation ? (
                  productVariation.sale_price !== 0 ? (
                    <span className="normal-price-product">
                      {"$ " +
                        new Intl.NumberFormat().format(
                          productVariation ? variationActive.regular_price : ""
                        )}
                    </span>
                  ) : (
                    <></>
                  )
                ) : (
                  <></>
                )}
              </div>
              <div className="container-options">
                {producto.attributes.length > 0 &&
                  producto.attributes.map((el) => (
                    <div key={el.id} className="options-attributes">
                      <p className="title-options-product">{el.name}</p>
                      <div className="options-container">
                        {el.options.map((ele) => (
                          <CardsOptions
                            name={ele}
                            key={ele}
                            onClick={(e) => handleOption(el.name, ele, e)}
                          >
                            {ele}
                          </CardsOptions>
                        ))}
                      </div>
                    </div>
                  ))}

                <div style={{ display: "flex", alignItems: "center" }}>
                  <p className="title-options-product ">
                    <p className="title-options-product">Cantidad</p>
                  </p>
                  <Quantity style={{ marginLeft: "2rem" }}></Quantity>
                </div>
              </div>
              <div
                style={{ display: "flex", width: "100%", gap: "1rem" }}
                className="cont-button-add-to-cart"
              >
                <Boton onClick={(e) => AddToCart(e)}>Agregar al carrito</Boton>
                <Boton primary onClick={(e) => AddToCart(e)}>
                  Comprar ahora
                </Boton>
              </div>

              <div>
                <Information>
                  <IoLockClosedOutline
                    style={{ fontSize: "1.3rem", color: "" }}
                  />
                  Pago seguro , la seguridad tuya es lo mas importante para
                  nosotros
                </Information>
                <Information>
                  <IoCheckmarkCircleOutline
                    style={{ fontSize: "2rem", color: "" }}
                  />
                  Compra protegida recibe el producto que esperas o te
                  devolvemos el dinero
                </Information>
                <Information>
                  <IoAirplaneOutline
                    style={{ fontSize: "1.3rem", color: "" }}
                  />
                  Envio a tiempo, recibe el producto antes de lo que imaginas
                </Information>
              </div>

              <PaymentMethods></PaymentMethods>
            </div>
          </Container>
        </div>
      </>
    )
  );
};

export default Product;
