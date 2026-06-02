export type Product = {
  id: string;
  image: string;
  name: string;
  rating: {
    stars: number;
    count: number;
  };
  priceCents: number;
  keywords: string[];
};

export type CartItem = {
  productId: string;
  quantity: number;
  deliveryOptionId: string;
};

export type CartItemExpanded = CartItem & {
  product: Product;
};

export type DeliveryOption = {
  id: string;
  deliveryDays: number;
  priceCents: number;
};

export type DeliveryOptionExpanded = DeliveryOption & {
  estimatedDeliveryTimeMs: number;
};

export type Order = {
  id: string;
  orderTimeMs: number;
  totalCostCents: number;
};

export type OrderExpanded = Order & {
  products: OrderProductExpanded[];
};

export type OrderProduct = {
  productId: string;
  quantity: number;
  estimatedDeliveryTimeMs: number;
};

export type OrderProductExpanded = OrderProduct & {
  product: Product;
};

export type PaymentSummary = {
  totalItems: number;
  productCostCents: number;
  shippingCostCents: number;
  totalCostBeforeTaxCents: number;
  taxCents: number;
  totalCostCents: number;
};

export type loadCartFn = () => Promise<void>;
