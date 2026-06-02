import "./TrackingPage.css";
import {Link, useLocation, useSearchParams} from "react-router";
import dayjs from "dayjs";

type LocationState = {
  productImage: string;
  productDeliveryTime: number;
};

type ProductQuery = {
  name: string;
  quantity: string;
};

export default function TrackingPage() {
  const [searchParams] = useSearchParams();

  const query: ProductQuery = {
    name: searchParams.get("name") || "",
    quantity: searchParams.get("quantity") || ""
  };

  const location = useLocation();

  const {productImage, productDeliveryTime} = location.state as LocationState;

  return (
    <>
      <title>Tracking</title>

      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>

          <div className="delivery-date">
            Arriving on {dayjs(productDeliveryTime).format("MMMM D")}
          </div>

          <div className="product-info">{query.name}</div>

          <div className="product-info">Quantity: {query.quantity}</div>

          <img className="product-image" src={productImage} />

          <div className="progress-labels-container">
            <div className="progress-label">Preparing</div>
            <div className="progress-label current-status">Shipped</div>
            <div className="progress-label">Delivered</div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>
    </>
  );
}
