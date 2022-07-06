import React, { useEffect, useReducer } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import CardProduct from "../components/CardProduct";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Separador from "../components/Separador";
import productsReducer, { initialState } from "../reducer/productsReducer";
import types from "../reducer/typesProducts";
import { getCustomQuery, getProduct, getProducts } from "../utils/product";
import "./search.css";

const Search = () => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const { products } = state;

  const [search, setSearch] = useState();

  const [params, setParams] = useSearchParams();

  const [productos, setProductos] = useState();

  const query = { ...params };

  useEffect(() => {
    getProducts().then((res) =>
      dispatch({ type: types.PRODUCTS, payload: res })
    );
  }, []);

  useEffect(() => {
    setSearch(params.get("text"));

    getCustomQuery(`?search=xioami`).then((res) => setProductos(res));
  }, [params]);

  return (
    <>
      <Header></Header>

      <div>
        <div className="container-search-results">
          <div className="filters">
            <p className="filter-title">Filtrar</p>
            <Separador width="100%" margin="2rem 0" />
          </div>

          {products.length !== 0 ? (
            <div className="products-search">
              {products.map((el) => (
                <CardProduct
                  key={el.id}
                  image={el.images[0].src}
                  title={el.name}
                  price={el.price}
                  offer={el.sale_price !== "" ? el.sale_price : null}
                  review={parseInt(el.average_rating)}
                  numberReviews={el.rating_count}
                ></CardProduct>
              ))}
            </div>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
