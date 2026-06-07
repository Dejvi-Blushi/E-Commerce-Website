import {Outlet} from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type {CartItem} from "../types/types";

type LayoutProps = {
  cartItems: CartItem[];
  setSearchedProduct: React.Dispatch<React.SetStateAction<string>>;
};

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Header {...props} />
      <section style={{flex: 1}}>
        <Outlet />
      </section>
      <Footer />
    </>
  );
}
