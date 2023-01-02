import React, { useState, useEffect } from "react";
import subscriberServices from "../../../firebase/services/subscriber.services";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [subscriber, setSubscriber] = useState({
    email: "",
  });
  const [subscriberValidationError, setSubscribersValidationError] =
    useState("");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (
      subscriberValidationError === "" &&
      subscriber.email !== "" &&
      clicked
    ) {
      addNewSubscribers();
    }

    setClicked(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subscriberValidationError, clicked]);

  const subscribersHandler = async () => {
    setClicked(true);

    !subscriber.email.includes("@") && !subscriber.email.includes(".")
      ? setSubscribersValidationError("Please input a valid email")
      : setSubscribersValidationError("");
  };

  const addNewSubscribers = async () => {
    try {
      await subscriberServices.addSubscribers(subscriber);
      toast.success(
        "🦄 Congratulations you succesfully subscribe to our service",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    } catch (err) {
      toast.error("unable to subscribe please contact support or try again", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(err);
    }
  };

  return (
    <section
      className="lg:w-7/12 w-11/12 md:w-9/12  mx-auto text-center my-24"
      style={{ color: "#002365" }}
    >
      <div className="my-8">
        <h1 className="lg:text-5xl text-4xl text-4xl py-5 font-semibold">
          Stay in touch
        </h1>
        <p className="text-xl">Keep up to date with our exclusive offer</p>
      </div>
      <div className="lg:w-8/12 md:6/12 w-full mx-auto my-3">
        <input
          placeholder="Email Address"
          onChange={(e) =>
            setSubscriber({ ...subscriber, email: e.target.value })
          }
          className="w-full h-12 outline-none pl-2 border-2 border-indigo-800"
        />
      </div>
      {subscriberValidationError && (
        <p className="text-red-500 text-base font-semibold">
          {subscriberValidationError}
        </p>
      )}
      <button
        className="my-4 text-white w-8/12 py-3 font-semibold rounded-md text-xl"
        style={{ backgroundColor: "#002365" }}
        onClick={subscribersHandler}
      >
        Join Us
      </button>
    </section>
  );
};

export default ContactUs;
