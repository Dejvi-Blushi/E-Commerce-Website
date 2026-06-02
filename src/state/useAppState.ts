import {useEffect, useState} from "react";
import axios from "axios";
import type {Product, CartItemExpanded} from "../types/types";

export function useAppState() {
  const [cartItems, setCartItems] = useState<CartItemExpanded[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [searchedProduct, setSearchedProduct] = useState("");

  const loadCart = async () => {
    const response = await axios.get<CartItemExpanded[]>(
      "/api/cart-items?expand=product"
    );
    setCartItems(response.data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  return {
    cartItems,
    setCartItems,
    products,
    setProducts,
    searchedProduct,
    setSearchedProduct,
    loadCart
  };
}
