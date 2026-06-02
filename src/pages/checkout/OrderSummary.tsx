import axios from "axios";
import dayjs from "dayjs";
import {formatMoney} from "../../utils/money";
import DeliveryOptions from "./DeliveryOptions";

import type {
  CartItem,
  CartItemExpanded,
  DeliveryOptionExpanded,
  loadCartFn
} from "../../types/types";

type OrderSummaryProps = {
  cartItems: CartItemExpanded[];
  deliveryOptions: DeliveryOptionExpanded[];
  loadCart: loadCartFn;
};

export default function OrderSummary(props: OrderSummaryProps) {
  const {cartItems, deliveryOptions, loadCart} = props;

  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cartItems.map((cartItem: CartItemExpanded) => {
          const selectedDeliveryOption = deliveryOptions.find(
            (deliveryOption: DeliveryOptionExpanded) => {
              return deliveryOption.id === cartItem.deliveryOptionId;
            }
          );

          if (!selectedDeliveryOption) {
            return null;
          }

          const updateQuantity = async () => {
            const payload: Omit<CartItem, "productId"> = {
              deliveryOptionId: cartItem.deliveryOptionId,
              quantity: cartItem.quantity + 1
            };

            await axios.put<void>(
              `/api/cart-items/${cartItem.productId}`,
              payload
            );
            await loadCart();
          };

          const deleteCartItem = async () => {
            await axios.delete<void>(`/api/cart-items/${cartItem.productId}`);
            await loadCart();
          };

          return (
            <div key={cartItem.productId} className="cart-item-container">
              <div className="delivery-date">
                Delivery date:{" "}
                {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
                  "dddd, MMMM D"
                )}
              </div>

              <div className="cart-item-details-grid">
                <img className="product-image" src={cartItem.product.image} />

                <div className="cart-item-details">
                  <div className="product-name">{cartItem.product.name}</div>
                  <div className="product-price">
                    {formatMoney(cartItem.product.priceCents)}
                  </div>
                  <div className="product-quantity">
                    <span>
                      Quantity:{" "}
                      <span className="quantity-label">
                        {cartItem.quantity}
                      </span>
                    </span>
                    <span
                      className="update-quantity-link link-primary"
                      onClick={updateQuantity}
                    >
                      Update
                    </span>
                    <span
                      className="delete-quantity-link link-primary"
                      onClick={deleteCartItem}
                    >
                      Delete
                    </span>
                  </div>
                </div>

                <DeliveryOptions
                  deliveryOptions={deliveryOptions}
                  cartItem={cartItem}
                  loadCart={loadCart}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
