export const SchemaProduct = (
  name,
  image,
  description,
  brand,
  sku,
  offer,
  urlOffer,
  price,
  availability,
  rating,
  ratingCount
) => {
  let images = [];

  image.length > 1 && image.map((el) => images.push(el.src));

  const imagenes = image.length > 1 ? images : image;

  const Product = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: name,
    image: imagenes,
    description: description,
    brand: {
      "@type": brand,
      name: brand,
    },
    sku: sku,
    offers: {
      "@type": "Offer",
      url: urlOffer,
      priceCurrency: "COP",
      price: offer,
      availability: availability
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating,
      ratingCount: ratingCount,
    },
  };

  const Producto = JSON.stringify(Product);

  return Producto;
};
