import axios from "axios";
import dayjs from "dayjs";
import {formatMoney} from "../../utils/money";

import type {
  DeliveryOptionExpanded,
  CartItem,
  loadCartFn
} from "../../types/types";

type DeliveryOptionsProps = {
  deliveryOptions: DeliveryOptionExpanded[];
  cartItem: CartItem;
  loadCart: loadCartFn;
};

type UpdateCartItemReq = {
  deliveryOptionId: string;
};

export default function DeliveryOptions({
  deliveryOptions,
  cartItem,
  loadCart
}: DeliveryOptionsProps) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>
      {deliveryOptions.map((deliveryOption) => {
        let priceString = "FREE Shipping";

        if (deliveryOption.priceCents > 0) {
          priceString = `${formatMoney(deliveryOption.priceCents)} - Shipping`;
        }

        const updateDeliveryOption = async () => {
          await axios.put<UpdateCartItemReq>(
            `/api/cart-items/${cartItem.productId}`,
            {
              deliveryOptionId: deliveryOption.id
            }
          );
          await loadCart();
        };

        return (
          <div
            key={deliveryOption.id}
            className="delivery-option"
            onClick={updateDeliveryOption}
          >
            <input
              type="radio"
              checked={deliveryOption.id === cartItem.deliveryOptionId}
              onChange={() => {}}
              className="delivery-option-input"
              name={`delivery-option-${cartItem.productId}`}
            />
            <div>
              <div className="delivery-option-date">
                {dayjs(deliveryOption.estimatedDeliveryTimeMs).format(
                  "dddd, MMMM D"
                )}
              </div>
              <div className="delivery-option-price">{priceString}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
