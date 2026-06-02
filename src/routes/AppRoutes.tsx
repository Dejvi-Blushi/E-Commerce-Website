import {Routes, Route} from "react-router";
import Layout from "../layouts/Layout";
import HomePage from "../pages/home/HomePage";
import CheckoutPage from "../pages/checkout/CheckoutPage";
import OrdersPage from "../pages/orders/OrdersPage";
import TrackingPage from "../pages/tracking/TrackingPage";
import type {CartItemExpanded, Product, loadCartFn} from "../types/types";

type AppRoutesProps = {
  cartItems: CartItemExpanded[];
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  searchedProduct: string;
  setSearchedProduct: React.Dispatch<React.SetStateAction<string>>;
  loadCart: loadCartFn;
};

export default function AppRoutes(props: AppRoutesProps) {
  const {
    cartItems,
    products,
    setProducts,
    searchedProduct,
    setSearchedProduct,
    loadCart
  } = props;

  return (
    <Routes>
      <Route
        element={
          <Layout
            cartItems={cartItems}
            setSearchedProduct={setSearchedProduct}
          />
        }
      >
        <Route
          index
          element={
            <HomePage
              loadCart={loadCart}
              products={products}
              setProducts={setProducts}
              searchedProduct={searchedProduct}
              setSearchedProduct={setSearchedProduct}
            />
          }
        />
        <Route path="orders" element={<OrdersPage loadCart={loadCart} />} />
        <Route path="tracking" element={<TrackingPage />} />
      </Route>

      <Route
        path="checkout"
        element={<CheckoutPage cartItems={cartItems} loadCart={loadCart} />}
      />
    </Routes>
  );
}
