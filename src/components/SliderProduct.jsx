import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./estilos.css";
import { getProducts } from "../utils/product";

import CardProduct from "../components/CardProduct";

import Loader from "./Loader";
import { Link } from "react-router-dom";

const SliderProduct = ({ products }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    products.lenght !== 0 && setLoading(false);
  }, []);

  return (
    <>
      {!loading && products.lenght !== 0 ? (
        <Swiper
          className="product-slider"
          navigation={true}
          spaceBetween={20}
          slidesPerView={5}
          pagination={{ clickable: true }}
          modules={[Navigation, EffectFade, Autoplay]}
          autoplay
        >
          {products.lenght !== 0 &&
            products.map((product) => (
              <SwiperSlide key={product.id} className="slider-Product">
                <Link
                  key={product.id}
                  to={`/p/${product.name.toLowerCase().split(" ").join("-")}/${
                    product.id
                  }`}
                >
                  <CardProduct
                    image={product.images[0].src}
                    title={product.name}
                    price={product.price}
                    offer={
                      product.sale_price !== "" ? product.sale_price : null
                    }
                  ></CardProduct>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default SliderProduct;
