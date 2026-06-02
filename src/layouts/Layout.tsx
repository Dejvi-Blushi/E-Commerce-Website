import {Outlet} from "react-router";
import Header from "../components/Header";
import type {CartItem} from "../types/types";

type LayoutProps = {
  cartItems: CartItem[];
  setSearchedProduct: React.Dispatch<React.SetStateAction<string>>;
};

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Header {...props} />
      <Outlet />
    </>
  );
}
