import axios from "axios";
import type {CartItem, loadCartFn} from "../types/types.js";

export const addToCart = async (
  productId: string,
  quantity: number,
  loadCart: loadCartFn,
  setResponseStatus?: (status: number) => void
): Promise<void> => {
  const response = await axios.post<CartItem>("/api/cart-items", {
    productId: productId,
    quantity: quantity
  });
  await loadCart();

  setResponseStatus?.(response.status);

  setTimeout(() => {
    setResponseStatus?.(0);
  }, 5000);
};
