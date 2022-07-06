import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import Header from "../components/Header";
import SliderProduct from "../components/SliderProduct";
import { getProduct, getProducts } from "../utils/product";
import image from "../assets/imagen.png";
import "./Home.css";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const Home = () => {
  const [featuredProducts, setFeaturedProduct] = useState(null);

  useEffect(() => {
    getProducts().then((res) => {
      setFeaturedProduct(res);
    });
  }, []);

  return (
    <>
      <Helmet>
        <meta name="description" content="" />
      </Helmet>
      <div className="container">
        <Helmet>
          <title>Tuganga - Disfruta Ahorrando y Comprando</title>
        </Helmet>
        <Header></Header>
        <div className="main-slider">
          <Swiper
            className="swiper-main"
            modules={[Navigation, Pagination, EffectFade, Autoplay]}
            navigation={true}
            pagination={{ clickable: true }}
            effect={"fade"}
            autoplay
          >
            <SwiperSlide>
              <Link to="/hola">
                <img src={image} alt="" />
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link to="/hola">
                <img src={image} alt="" />
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link to="/hola">
                <img src={image} alt="" />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
        <section className="container-featured">
          <h2 className="trend-title">Productos en Tendencia</h2>
          {featuredProducts ? (
            <div className="featured-products">
              <SliderProduct products={featuredProducts}></SliderProduct>
            </div>
          ) : (
            <Loader />
          )}
        </section>
      </div>
    </>
  );
};

export default Home;
