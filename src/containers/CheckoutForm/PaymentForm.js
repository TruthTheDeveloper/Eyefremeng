import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";

const PaymentForm = () => {
  let navigate = useNavigate();

  // 'FLWPUBK-4eba292c06879c74ecdfe47c09fe8ac2-X'

  return (
    <div>
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
        <div className="flex my-3">
          <p className="p-1 px-2 border-2">4</p>
          <p className="px-2 py-1 text-lg font-semibold">Make Payment</p>
        </div>
      </div>
      <div className="flex mt-12 mb-6  border border-slate-300 p-5">
        <div className="mx-3">
          <h1>
            Pay Online <span className="text-indigo-800">$30.00</span>
          </h1>
          <p>
            Express : Delivery date 3-10 days approximately, excluding the
            custom clearance
          </p>
        </div>
      </div>
      <div>
        <button
          className="py-2 my-3 bg-indigo-800 text-white px-6 rounded-md"
          onClick={() => navigate("/checkoutForm/deliverySummary")}
        >
          Continue
          <FontAwesomeIcon icon={faArrowRight} className="px-2" />
        </button>
        <button
          className="py-2 my-3 border-2 border-slate-300 px-6 rounded-md mx-3"
          onClick={() => navigate(-1)}
        >
          back
          <FontAwesomeIcon icon={faArrowLeft} className="px-2" />
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;
