import "./footer.css";
import {Link} from "react-router";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <p className="footer-tagline">
            Quality products delivered fast. Shop with confidence.
          </p>
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <span className="footer-column-title">Shop</span>
            <Link className="footer-link" to="/">
              All Products
            </Link>
          </div>

          <div className="footer-column">
            <span className="footer-column-title">Orders</span>
            <Link className="footer-link" to="/orders">
              My Orders
            </Link>
          </div>

          <div className="footer-column">
            <span className="footer-column-title">About Us</span>
            <Link className="footer-link" to="/about">
              Information
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">
          &copy; {currentYear} E-Commerce Website. All rights reserved.
        </span>
        <div className="footer-bottom-links">
          <Link className="footer-bottom-link" to="/">
            Privacy Policy
          </Link>
          <Link className="footer-bottom-link" to="/">
            Terms of Service
          </Link>
          <Link className="footer-bottom-link" to="/">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
