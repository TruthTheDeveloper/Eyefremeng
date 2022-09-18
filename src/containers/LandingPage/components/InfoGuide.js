import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons"; // <-- import styles to be used
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";

const InfoGuide = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center lg:mx-24 my-12 text-center">
      <div className=" basis-1/3 border mx-4   rounded-md shadow-lg hover:shadow-2xl">
        <FontAwesomeIcon
          icon={faTruck}
          className="text-orange-400 text-6xl my-2 mt-16"
        />
        <div className="pb-16 px-3" style={{ color: "#002365" }}>
          <h1 className="text-2xl font-semibold my-2">Nigeria Shipping</h1>
          <p className="text-lg">
            We currently ship to the whole state in Nigeria
          </p>
        </div>
      </div>
      <div className=" basis-1/3 border mx-4 shadow-lg hover:shadow-2xl">
        <FontAwesomeIcon
          icon={faGift}
          className="text-orange-400 text-6xl my-2 mt-16"
        />
        <div className="pb-16 px-3" style={{ color: "#002365" }}>
          <h1 className="text-2xl font-semibold my-2">Best Offer</h1>
          <p className="text-lg">Best frames for the best price</p>
        </div>
      </div>
      <div className=" basis-1/3 border mx-4 shadow-lg hover:shadow-2xl">
        <FontAwesomeIcon
          icon={faShieldAlt}
          className="text-orange-400 text-6xl my-2 mt-16"
        />
        <div className="pb-16 px-3" style={{ color: "#002365" }}>
          <h1 className="text-2xl font-semibold my-2">Secure Payment</h1>
          <p className="text-lg">
            Our website is completely encripted for your confidence that every
            payment is 100% secure.
          </p>
        </div>
      </div>
    </section>
  );
};
export default InfoGuide;
