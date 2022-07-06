import React, { useEffect, useState } from "react";
import ProductsContext from "./ProductsContext";
import { getProducts } from "../utils/product";

const ProductsProvider = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);

  return (
    <ProductsContext.Provider>
      {products.map((el) => (
        <div>el</div>
      ))}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
