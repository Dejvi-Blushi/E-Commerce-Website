import "./header.css";
import {Link, useNavigate} from "react-router";
import type {CartItem} from "../types/types";
import {useState} from "react";

type HeaderProps = {
  cartItems: CartItem[];
  setSearchedProduct: React.Dispatch<React.SetStateAction<string>>;
};

export default function Header({cartItems, setSearchedProduct}: HeaderProps) {
  const [search, setSearch] = useState<string>("");

  const navigate = useNavigate();

  let totalQuantity = 0;
  cartItems.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });

  const searchProduct = () => {
    if (search !== "") {
      navigate(`/?search=${search}`);
    }
  };

  const clearSearchProduct = () => {
    setSearchedProduct("");
    setSearch("");
  };

  return (
    <>
      <div className="header">
        <div className="left-section">
          <Link to="/" className="header-link" onClick={clearSearchProduct}>
            <img className="logo" src="images/icons/back-icon.png" />
          </Link>
        </div>

        <div className="middle-section">
          <input
            className="search-bar"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
          />

          <button className="search-button" onClick={searchProduct}>
            <img className="search-icon" src="images/icons/search-icon.png" />
          </button>
        </div>

        <div className="right-section">
          <Link
            className="orders-link header-link"
            to="/orders"
            onClick={clearSearchProduct}
          >
            <span className="orders-text">Orders</span>
          </Link>

          <Link
            className="cart-link header-link"
            to="/checkout"
            onClick={clearSearchProduct}
          >
            <img className="cart-icon" src="images/icons/cart-icon.png" />
            <div className="cart-quantity">{totalQuantity}</div>
            <div className="cart-text">Cart</div>
          </Link>
        </div>
      </div>
    </>
  );
}
