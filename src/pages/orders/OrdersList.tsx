import dayjs from "dayjs";
import {formatMoney} from "../../utils/money";
import {Fragment} from "react";
import "./OrdersPage.css";
import {Link} from "react-router";
import type {OrderExpanded, loadCartFn} from "../../types/types";
import {addToCart} from "../../utils/cartHelpers";

type OrdersProps = {
  orders: OrderExpanded[];
  loadCart: loadCartFn;
};

export default function OrdersList({orders, loadCart}: OrdersProps) {
  return (
    <div className="orders-grid">
      {orders.length > 0 &&
        orders.map((order: OrderExpanded) => {
          return (
            <div key={order.id} className="order-container">
              <div className="order-header">
                <div className="order-header-left-section">
                  <div className="order-date">
                    <div className="order-header-label">Order Placed:</div>
                    <div>{dayjs(order.orderTimeMs).format("MMMM D")}</div>
                  </div>
                  <div className="order-total">
                    <div className="order-header-label">Total:</div>
                    <div>{formatMoney(order.totalCostCents)}</div>
                  </div>
                </div>

                <div className="order-header-right-section">
                  <div className="order-header-label">Order ID:</div>
                  <div>{order.id}</div>
                </div>
              </div>

              <div className="order-details-grid">
                {order.products.map((orderProduct) => {
                  const addToCartCall = async () => {
                    await addToCart(
                      orderProduct.product.id,
                      orderProduct.quantity,
                      loadCart
                    );
                  };

                  return (
                    <Fragment key={orderProduct.product.id}>
                      <div className="product-image-container">
                        <img src={orderProduct.product.image} />
                      </div>
                      <div className="product-details">
                        <div className="product-name">
                          {orderProduct.product.name}
                        </div>
                        <div className="product-delivery-date">
                          Arriving on:{" "}
                          {dayjs(orderProduct.estimatedDeliveryTimeMs).format(
                            "MMMM D"
                          )}
                        </div>
                        <div className="product-quantity">
                          Quantity: {orderProduct.quantity}
                        </div>
                        <button
                          className="buy-again-button button-primary"
                          onClick={addToCartCall}
                        >
                          <img
                            className="buy-again-icon"
                            src="images/icons/buy-again.png"
                          />
                          <span className="buy-again-message">Add to Cart</span>
                        </button>
                      </div>
                      <div className="product-actions">
                        <Link
                          to={`/tracking?name=${orderProduct.product.name}&quantity=${orderProduct.quantity}`}
                          state={{
                            productImage: orderProduct.product.image,
                            productDeliveryTime:
                              orderProduct.estimatedDeliveryTimeMs
                          }}
                        >
                          <button className="track-package-button button-secondary">
                            Track package
                          </button>
                        </Link>
                      </div>
                    </Fragment>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
}
