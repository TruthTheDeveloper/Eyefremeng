import React from "react";

// import deliver from "../../../assets/deliver.png";
// import eyeglass from "../../../assets/eye-glass.png";
// import eyeTreatment from "../../../assets/eye-treatment.png";
// import file from "../../../assets/file.png";
// import lens from "../../../assets/hyperopia.png";

import Search from "../../../assets/search.jpeg";
import Prescription from "../../../assets/prescription.jpeg";
import Lens from "../../../assets/lens.jpeg";
import Order from "../../../assets/order.jpeg";


const Guide = () => {
  return (
    <section>
      <h1
        className="text-center  my-12 mx-3 lg:text-5xl font-semibold text-4xl"
        style={{ color: "#002365" }}
      >
        How to order your prescription glasses
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 my-16 md:mx-6 lg:mx-32 ">
        <div className=" w-36 mx-auto">
          <img
            className="w-20 mx-auto"
            src={Search}
            alt="select your glasses"
          />
          <p className="text-center   my-6" style={{ color: "#002365" }}>
            1. select your preferred glass and frame
          </p>
        </div>
        <div className="w-36 mx-auto my-6 md:my-0">
          <img className="w-20 mx-auto" src={Prescription} alt="prescription" />
          <p className="text-center py-4   my-6" style={{ color: "#002365" }}>
            2. Enter your prescription
          </p>
        </div>
        <div className="w-36  mx-auto mb-6 md:my-0">
          <img className="w-20 mx-auto" src={Lens} alt="Select your lens" />
          <p className="text-center   my-6" style={{ color: "#002365" }}>
            3. Select the lens based on the prescription
          </p>
        </div>
        <div className="w-36 mx-auto">
          <img
            className="w-20 mx-auto"
            src={Order}
            alt='order'
          />
          <p className="text-center  my-6" style={{ color: "#002365" }}>
            4. Place an order and Waiting for receive the package
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guide;
