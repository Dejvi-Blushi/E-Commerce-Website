import axios from "axios";
import {useEffect, useState} from "react";
import OrdersList from "./OrdersList.js";

import type {OrderExpanded, loadCartFn} from "../../types/types.js";

export default function OrdersPage({loadCart}: {loadCart: loadCartFn}) {
  const [orders, setOrders] = useState<OrderExpanded[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get<OrderExpanded[]>(
        "/api/orders?expand=products"
      );
      setOrders(response.data);
    };

    fetchOrders();
  }, []);

  return (
    <>
      <title>Orders</title>

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersList orders={orders} loadCart={loadCart} />
      </div>
    </>
  );
}
