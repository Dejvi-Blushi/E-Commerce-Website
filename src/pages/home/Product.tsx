import {useState} from "react";
import {formatMoney} from "../../utils/money";
import type {loadCartFn, Product} from "../../types/types.js";

import {addToCart} from "../../utils/cartHelpers.js";

type ProductProps = {
  product: Product;
  loadCart: loadCartFn;
};

export default function Product({product, loadCart}: ProductProps) {
  const [quantity, setQuantity] = useState(1);
  const [responseStatus, setResponseStatus] = useState(0);

  const addToCartCall = async () => {
    await addToCart(product.id, quantity, loadCart, setResponseStatus);
  };

  const selectQuantity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedQuantity = Number(e.target.value);
    setQuantity(selectedQuantity);
  };

  return (
    <div className="product-container" data-testid="product-container">
      <div className="product-image-container">
        <img
          className="product-image"
          data-testid="product-image"
          src={product.image}
        />
      </div>

      <div className="product-name limit-text-to-2-lines">{product.name}</div>

      <div className="product-rating-container">
        <img
          className="product-rating-stars"
          data-testid="product-rating-stars"
          src={`images/ratings/rating-${product.rating.stars * 10}.png`}
        />
        <div className="product-rating-count link-primary">
          {product.rating.count}
        </div>
      </div>

      <div className="product-price">{formatMoney(product.priceCents)}</div>

      <div className="product-quantity-container">
        <select value={quantity} onChange={selectQuantity}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div className="product-spacer"></div>

      <div
        className="added-to-cart"
        style={{opacity: responseStatus === 201 ? 1 : 0}}
      >
        <img src="images/icons/checkmark.png" />
        Added
      </div>

      <button
        className="add-to-cart-button button-primary"
        onClick={addToCartCall}
        data-testid="add-to-cart-button"
      >
        Add to Cart
      </button>
    </div>
  );
}
