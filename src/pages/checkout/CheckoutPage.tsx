import axios from "axios";
import "./checkout-header.css";
import "./CheckoutPage.css";
import {Link} from "react-router";
import {useEffect, useState} from "react";
import OrderSummary from "./OrderSummary";
import PaymentSummaryC from "./PaymentSummary";

import type {
  CartItemExpanded,
  PaymentSummary,
  DeliveryOptionExpanded,
  loadCartFn
} from "../../types/types";

type CheckoutPageProps = {
  cartItems: CartItemExpanded[];
  loadCart: loadCartFn;
};

function CheckoutPage({cartItems, loadCart}: CheckoutPageProps) {
  const [deliveryOptions, setDeliveryOptions] = useState<
    DeliveryOptionExpanded[]
  >([]);
  const [paymentSummary, setPaymentSummary] = useState<PaymentSummary | null>(
    null
  );

  useEffect(() => {
    const fetchPaymentSummary = async () => {
      const response = await axios.get<PaymentSummary>("/api/payment-summary");
      setPaymentSummary(response.data);
    };
    fetchPaymentSummary();
  }, [cartItems]);

  useEffect(() => {
    const fetchDeliveryOptions = async () => {
      const response = await axios.get<DeliveryOptionExpanded[]>(
        "/api/delivery-options?expand=estimatedDeliveryTime"
      );
      setDeliveryOptions(response.data);
    };
    fetchDeliveryOptions();
  }, []);

  return (
    <>
      <title>Checkout</title>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="/">
              <img className="logo" src="images/logo.png" />
              <img className="mobile-logo" src="images/mobile-logo.png" />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <Link className="return-to-home-link" to="/">
              {paymentSummary && paymentSummary.totalItems} items
            </Link>
            )
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary
            cartItems={cartItems}
            deliveryOptions={deliveryOptions}
            loadCart={loadCart}
          />

          <PaymentSummaryC
            paymentSummary={paymentSummary}
            loadCart={loadCart}
          />
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;
