import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import AuthContext from "../../context/auth-context";
import ReviewItem from "./components/ReviewItem";

const OrderReviewForm = () => {
  const { initialState, setInitialState } = useContext(AuthContext);
  const navigate = useNavigate();

  const navigationHandler = () => {
    navigate("/checkoutForm/paymentMethod");
  };

  return (
    <section>
      <div>
        <div className="flex my-3">
          <p className="p-1 px-2 border-2">1</p>
          <p className="px-2 py-1 text-lg font-semibold">Billing Information</p>
        </div>
        <div className="flex my-3">
          <p className="p-1 px-2 border-2">2</p>
          <p className="px-2 py-1 text-lg font-semibold">Shipping Method</p>
        </div>
        <div className="flex my-3">
          <p className="p-1 px-2 border-2">3</p>
          <p className="px-2 py-1 text-lg font-semibold">Order Review</p>
        </div>
      </div>
      {initialState.items.map((item) => {
        return (
          <ReviewItem
            productImage={item.productImage}
            productName={item.productName}
            price={item.productPrice}
            qty={item.qty}
          />
        );
      })}
      <div>
        <button
          className="py-2 my-3 bg-indigo-800 text-white px-6 rounded-md"
          onClick={navigationHandler}
        >
          Continue to Payment
          <FontAwesomeIcon icon={faArrowRight} className="px-2" />
        </button>
        <button
          className="py-2 my-3 border-2 border-slate-300 px-6 rounded-md mx-3"
          onClick={() => navigate(-1)}
        >
          back
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="px-2"
            onClick={() => navigate(-1)}
          />
        </button>
      </div>
      <div className="flex my-3">
        <p className="p-1 px-2 border-2">4</p>
        <p className="px-2 py-1 text-lg font-semibold">Make Payment</p>
      </div>
    </section>
  );
};

export default OrderReviewForm;
