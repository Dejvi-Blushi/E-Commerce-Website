import {useEffect} from "react";
import axios from "axios";
import ProductsGrid from "./ProductsGrid.js";
import {useSearchParams} from "react-router";
import "./HomePage.css";

import type {Product, loadCartFn} from "../../types/types.js";

type HomePageProps = {
  loadCart: loadCartFn;
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  searchedProduct: string;
  setSearchedProduct: React.Dispatch<React.SetStateAction<string>>;
};

export default function HomePage(props: HomePageProps) {
  const {loadCart, products, setProducts, searchedProduct, setSearchedProduct} =
    props;

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    if (search) {
      setSearchedProduct(search);
    }
  }, [search]);

  const searchedData = products.filter((product) =>
    product.name.toLowerCase().includes(searchedProduct.toLowerCase())
  );

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get<Product[]>("/api/products");
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <title>E-Commerce Website</title>

      <div className="home-page">
        <ProductsGrid products={searchedData} loadCart={loadCart} />
      </div>
    </>
  );
}
