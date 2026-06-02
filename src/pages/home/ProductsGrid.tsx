import ProductCard from "./Product";
import type {Product, loadCartFn} from "../../types/types.js";

type ProductsGridProps = {
  products: Product[];
  loadCart: loadCartFn;
};

export default function ProductsGrid({products, loadCart}: ProductsGridProps) {
  return (
    <div className="products-grid">
      {products.map((product) => {
        return (
          <ProductCard key={product.id} product={product} loadCart={loadCart} />
        );
      })}
    </div>
  );
}
