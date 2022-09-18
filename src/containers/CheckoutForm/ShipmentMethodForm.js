import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import AuthContext from "../../context/auth-context";
import { useNavigate } from "react-router-dom";

const ShipmentMethodForm = () => {
  let navigate = useNavigate();

  const [shipmentLocation, setShipmentLocation] = useState("");
  const [shipmentValidationError, setShipmentValidationError] = useState("");
  const { initialState, setInitialState } = useContext(AuthContext);

  const shipmentLocationHandler = () => {
    setShipmentLocation(true);

    setInitialState({ ...initialState, withinLagos: true });
  };

  const shipmentLocationHandlerTwo = () => {
    setShipmentLocation(false);
    setInitialState({ ...initialState, withinLagos: false });
  };

  const navigationHandler = () => {
    if (shipmentLocation === "") {
      setShipmentValidationError("Please select a shipment location");
      setInitialState({
        ...initialState,
        grandTotal: initialState.grandTotal + 2500,
        subTotal: initialState.subTotal + 2500,
      });
    } else {
      setShipmentValidationError("");
      setInitialState({
        ...initialState,
        grandTotal: initialState.grandTotal + 4000,
        subTotal: initialState.subTotal + 4000,
      });
      navigate("/checkoutForm/review");
    }
  };

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
      </div>
      <div className="flex my-12 border border-slate-300 p-5">
        <div>
          <input type="radio" name="lense" onChange={shipmentLocationHandler} />
        </div>
        <div className="mx-3 ">
          <h1>
            Shipmment within lagos{" "}
            <span className="text-indigo-800">₦2,500</span> Estimated date
            within 1-2 days exclude Sundays.
          </h1>
        </div>
      </div>
      <div className="flex mt-12 mb-6 border border-slate-300 p-5">
        <div>
          <input
            type="radio"
            name="lense"
            onChange={shipmentLocationHandlerTwo}
          />
        </div>
        <div className="mx-3">
          <p>
            Shipment outside Lagos/others states in Nigeria:{" "}
            <span className="text-indigo-800">₦4,000</span> . Estimated date
            within 2- 4 day, exclude Sundays.{" "}
          </p>
        </div>
      </div>
      <div className="flex mt-12 mb-6 border border-slate-300 p-5">
        <div className="mx-3">
          <p className="text-indigo-800 my-2">
            Please read our shipping policy below
          </p>
          <p className="my-2">
            Shipping Policy : <br />
            Orders placed on the eyeframeng.com site can be shipped to the
            nationwide Nigeria and most international countries.
          </p>
          <p className="my-2">Please allow 1-10 days to receive your order.</p>
          <p className="my-2">
            Orders placed before 1pm WAT Monday-Saturday will be shipped same
            day. Orders placed after 1pm WAT will be shipped the following day,
            excluding Sundays.
          </p>
        </div>
      </div>
      {shipmentLocation === "" ? (
        <p className="text-red-500 text-sm">{shipmentValidationError}</p>
      ) : null}
      <div>
        <button
          className="py-2 my-3 bg-indigo-800 text-white px-6 rounded-md"
          onClick={navigationHandler}
        >
          Continue
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
        <p className="p-1 px-2 border-2">3</p>
        <p className="px-2 py-1 text-lg font-semibold">Order Review</p>
      </div>
      <div className="flex my-3">
        <p className="p-1 px-2 border-2">4</p>
        <p className="px-2 py-1 text-lg font-semibold">Make Payment</p>
      </div>
    </div>
  );
};

export default ShipmentMethodForm;
