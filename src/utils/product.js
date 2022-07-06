export const getProducts = async () => {
  const responseProducts = await fetch(
    "https://tugangastores.com/wp-json/wc/v3/products",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
        "Content-Type": "application/json",
      },
    }
  );

  const products = await responseProducts.json();

  return products;
};

export const getProduct = async (idProducts) => {
  const product = await fetch(
    "https://tugangastores.com/wp-json/wc/v3/products/" + idProducts,
    {
      method: "GET",
      headers: {
        Authentication: "Bearer " + process.env.REACT_APP_API_KEY,
        "Content-Type": "application/json",
      },
    }
  );

  const Product = await product.json();

  return Product;
};

export const getProductAttributes = async (mainProductId, search) => {
  const res = await fetch(
    "https://tugangastores.com/wp-json/wc/v3/products/" +
      mainProductId +
      "/variations/?search=" +
      search,
    {
      method: "GET",
      headers: {
        Authentication: "Bearer " + process.env.REACT_APP_API_KEY,
      },
    }
  );

  const Product = await res.json();

  const Producto = await getProduct(Product.id);

  return Producto;
};

export const getCustomQuery = async (custom) => {
  const res = await fetch(
    "https://tugangastores.com/wp-json/wc/v3/products/" + custom,
    {
      method: "GET",
      headers: {
        Authentication: "Bearer " + process.env.REACT_APP_API_KEY,
      },
    }
  );

  const Product = await res.json();

  const Producto = await getProduct(Product.id);

  return Producto;
};
