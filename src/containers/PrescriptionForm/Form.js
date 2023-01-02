import React, { useState, useContext } from "react";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons"; // <-- import styles to be used
import { category } from "./options/options";

import SingleVision from "./SingleVision";
import Bifocal from "./Bifocal";
import Progressive from "./Progressive";
import NonPrescriptional from "./NonPrescriptional";
import FramesOnly from "./FramesOnly";

import { useParams } from "react-router-dom";

import AuthContext from "../../context/auth-context";

const Form = ({
  productName,
  productDescription,
  productPrice,
  productImage,
}) => {
  const { initialState,  } = useContext(AuthContext);

  let { formId } = useParams();

  let formEditDetail = null;

  const remove = initialState.items.filter((el) => el.id === formId);
  formEditDetail = remove;

  const [selectedPrescriptionOption, setSelectedPrescriptionOption] = useState({
    value: null,
  });

  let formDetail = null;

  if (selectedPrescriptionOption.value === "Single Vision") {
    formDetail = (
      <SingleVision
        productImage={productImage}
        productName={productName}
        productDescription={productDescription}
        productPrice={productPrice}
      />
    );
  } else if (selectedPrescriptionOption.value === "Bifocal(with line)") {
    formDetail = (
      <Bifocal
        productImage={productImage}
        productName={productName}
        productDescription={productDescription}
        productPrice={productPrice}
      />
    );
  } else if (selectedPrescriptionOption.value === "Progressive") {
    formDetail = (
      <Progressive
        productImage={productImage}
        productName={productName}
        productDescription={productDescription}
        productPrice={productPrice}
      />
    );
  } else if (selectedPrescriptionOption.value === "Non Prescription") {
    formDetail = (
      <NonPrescriptional
        productImage={productImage}
        productName={productName}
        productDescription={productDescription}
        productPrice={productPrice}
      />
    );
  } else if (selectedPrescriptionOption.value === "Frames Only") {
    formDetail = (
      <FramesOnly
        productImage={productImage}
        productName={productName}
        productDescription={productDescription}
        productPrice={productPrice}
      />
    );
  } else if (formEditDetail[0]?.prescriptionType === "Single Vision") {
    formDetail = (
      <SingleVision
        productImage={productImage}
        productName={productName}
        productDescription={productDescription}
        productPrice={productPrice}
        data={formEditDetail[0]}
      />
    );
  } else if (formEditDetail[0]?.prescriptionType === "Bifocal(with line)") {
    formDetail = (
      <Bifocal
        productImage={productImage}
        productName={productName}
        productDescription={productDescription}
        productPrice={productPrice}
        data={formEditDetail[0]}
      />
    );
  } else if (formEditDetail[0]?.prescriptionType === "Progressive") {
    formDetail = (
      <Progressive
        productImage={productImage}
        productName={productName}
        productDescription={productDescription}
        productPrice={productPrice}
        data={formEditDetail[0]}
      />
    );
  } else if (formEditDetail[0]?.prescriptionType === "Non Prescriptional") {
    formDetail = (
      <NonPrescriptional
        productName={productName}
        productDescription={productDescription}
        productPrice={productPrice}
        data={formEditDetail[0]}
      />
    );
  } else if (formEditDetail[0]?.prescriptionType === "Frames Only") {
    formDetail = (
      <FramesOnly
        productImage={productImage}
        productName={productName}
        productDescription={productDescription}
        productPrice={productPrice}
        data={formEditDetail[0]}
      />
    );
  }

  return (
    <div className="mx-1 lg:mx-16 w-full">
      <div className="flex text-xl my-3 font-semibold bg-indigo-900 py-3 px-3">
        <FontAwesomeIcon
          icon={faEdit}
          className="text-orange-400 mr-2 text-2xl"
        />
        <h1 className="text-white">Add a Prescription</h1>
      </div>
      {formEditDetail ? (
        <div className="px-3 border-2 py-3">
          <Select
            placeholder={formEditDetail[0]?.prescriptionType}
            defaultValue={formEditDetail[0]?.prescriptionType}
            onChange={setSelectedPrescriptionOption}
            options={category}
          />
        </div>
      ) : (
        <div className="px-3 border-2 py-3">
          <Select
            placeholder={"--- Please Select --"}
            defaultValue={selectedPrescriptionOption.value}
            onChange={setSelectedPrescriptionOption}
            options={category}
          />
        </div>
      )}
      {formDetail}
    </div>
  );
};
export default Form;
