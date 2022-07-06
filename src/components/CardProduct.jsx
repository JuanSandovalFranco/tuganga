import "./cardProduct.css";


const CardProduct = ({ image, title, price, offer, review, numberReviews }) => {
  return (
    <div className="product-card">
      <img src={image} alt="" width="150px" height="150px" />
      <div className="data-description">
        <h2 className="search-product-title">{title}</h2>
        <div className="container-price">
          <p className="product-price">{`$ ${new Intl.NumberFormat().format(
            price
          )}`}</p>
          {offer && (
            <p className="percentaje-offer">
              {`${Math.round(100 - (offer * 100) / price)}% OFF`}
            </p>
          )}
          {offer && (
            <p className="product-offer">{`$ ${new Intl.NumberFormat().format(
              offer
            )}`}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
