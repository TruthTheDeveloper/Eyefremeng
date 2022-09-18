import React, { useState, useContext, useEffect } from "react";
import { uploadAFile } from "../../firebase/utils/uploadFile";

// import LensForm from "./LensForm";
import AuthContext from "../../context/auth-context";
import MiniCartDetailAdd from "./components/MiniCartAddDetail";
import { v4 } from "uuid";
import PrescriptionDetailForm from "./components/otherVision/PrescriptionDetailForm";
import BifocalVisionLensForm from "./components/otherVision/BifocalVisionLensForm";
import {
  formatToCurrency,
  formatPriceToNumber,
} from "../../utilities/priceFormatter";
import { useNavigate } from "react-router-dom";

const Bifocal = ({
  productImage,
  productName,
  productDescription,
  productPrice,
  data,
}) => {
  let navigate = useNavigate();
  const { initialState, setInitialState } = useContext(AuthContext);

  const [selectedRightOdOption, setSelectedRightOdOption] = useState({
    value: null,
  });
  const [
    selectedRightOdOptionValidationError,
    setSelectedRightOdOptionValidationError,
  ] = useState(false);

  const [selectedRightAxisOption, setSelectedRightAxisOption] = useState({
    value: null,
  });
  const [
    selectedRightAxisOptionValidationError,
    setSelectedRightAxisOptionValidationError,
  ] = useState(false);

  const [selectedRightCylinderOption, setSelectedRightCylinderOption] =
    useState({ value: null });
  const [
    selectedRightCylinderOptionValidationError,
    setSelectedRightCylinderOptionValidationError,
  ] = useState(false);

  const [selectedLeftOdOption, setSelectedLeftOdOption] = useState({
    value: null,
  });
  const [
    selectedLeftOdOptionValidationError,
    setSelectedLeftOdOptionValidationError,
  ] = useState(false);

  const [selectedLeftAxisOption, setSelectedLeftAxisOdOption] = useState({
    value: null,
  });
  const [
    selectedLeftAxisOptionValidationError,
    setSelectedLeftAxisOdOptionValidationError,
  ] = useState(false);

  const [selectedLeftCylinderOption, setSelectedLeftCylinderOption] = useState({
    value: null,
  });
  const [
    selectedLeftCylinderOptioValidationError,
    setSelectedLeftCylinderOptionValidationError,
  ] = useState(false);

  const [singlePD, setSinglePd] = useState({ value: null });
  const [singlePDValidationError, setSinglePdValidationError] = useState(false);

  const [firstPd, setFirstPd] = useState({ value: null });
  const [firstPdValidationError, setFirstPdValidationError] = useState(false);

  const [secondPd, setSecondPd] = useState({ value: null });
  const [secondPdValidationError, setSecondPdValidationError] = useState(false);

  const [usageOption, setUsageOption] = useState({ value: null });
  const [usageOptionValidationError, setUsageOptionValidationError] =
    useState(false);

  const [selectedRightADD, setSelectedRightADD] = useState({ value: null });
  const [selectedRightADDValidationError, setSelectedRightADDValidationError] =
    useState(false);

  const [selectedLeftADD, setSelectedLeftADD] = useState({ value: null });
  const [selectedLeftADDValidationError, setSelectedLeftADDValidationError] =
    useState(false);

  const [twoSinglePD, setTwoSinglePd] = useState(false);

  const [inputValid, setInputValid] = useState(false);
  const [qty, setQty] = useState(1);

  const [lenseType, setlensType] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [remark, setRemark] = useState("");
  const [image, setImage] = useState(null);
  const [clicked, setClicked] = useState(false);

  const [totalPrice, setTotalPrice] = useState(productPrice);
  const [lensePrice, setLensePrice] = useState(null);
  const [unitPrice, setUnitPrice] = useState(totalPrice);

  useEffect(() => {
    setTotalPrice(formatPriceToNumber(productPrice));
  }, []);

  //////////////UPDATE////////////////////////

  const [selectedDataRightOdOption, setSelectedDataRightOdOption] = useState({
    value: data?.rightOD.sphere || null,
  });

  const [selectedDataRightAxisOption, setSelectedDataRightAxisOption] =
    useState({ value: data?.rightOD.axis || null });

  const [selectedDataRightCylinderOption, setSelectedDataRightCylinderOption] =
    useState({ value: data?.rightOD.cylinder || null });

  const [selectedDataLeftOdOption, setSelectedDataLeftOdOption] = useState({
    value: data?.leftOD.sphere || null,
  });

  const [selectedDataLeftAxisOption, setSelectedDataLeftAxisOdOption] =
    useState({ value: data?.leftOD.axis || null });

  const [selectedDataLeftCylinderOption, setSelectedDataLeftCylinderOption] =
    useState({ value: data?.leftOD.cylinder || null });

  const [singlePDData, setSinglePdData] = useState({ value: data?.pD || null });

  const [firstPdData, setFirstPdData] = useState({ value: data?.pDD || null });

  const [secondPdData, setSecondPdData] = useState({
    value: data?.pDD || null,
  });

  const [usageOptionData, setUsageOptionData] = useState({
    value: data?.usageOption || null,
  });

  const [remarkData, setRemarkData] = useState({ value: data?.remark || "" });

  const [twoSinglePDData, setTwoSinglePdData] = useState(data?.twoSinglePd);

  const [dataQty, setDataQty] = useState(data?.qty);
  const [inputValidData, setInputValidData] = useState(false);

  const [selectedDataRightADD, setSelectedDataRightADD] = useState({
    value: data?.rightOD.add,
  });

  const [selectedDataLeftADD, setSelectedDataLeftADD] = useState({
    value: data?.leftOD.add,
  });

  useEffect(() => {
    if (inputValidData && lenseType !== "" && clicked) {
      const remove = initialState.items.filter((el) => el.id !== data?.id);
      setInitialState({ ...initialState, items: remove });
      navigate("/cart");
    }
    setClicked(false);
  }, [
    data?.id,
    initialState,
    inputValid,
    inputValidData,
    lenseType,
    navigate,
    setInitialState,
    clicked,
  ]);

  useEffect(() => {
    if (inputValid && lenseType !== "" && clicked) {
      navigate("/cart");
    }
    setClicked(false);
  }, [inputValid, lenseType, navigate, clicked]);

  useEffect(() => {
    setUnitPrice(totalPrice);
  }, [totalPrice]);

  const addToCartTwoPD = async () => {
    const file = image ? await uploadAFile(image) : null;

    const prescription = {
      id: v4(),
      productImage: productImage,
      productName: productName,
      productDescription: productDescription,
      productPrice: totalPrice,
      prescriptionType: "Bifocal(with line)",
      rightOD: {
        sphere: selectedRightOdOption.value,
        cylinder: selectedRightCylinderOption.value,
        axis: selectedRightAxisOption.value,
        add: selectedRightADD.value,
      },
      leftOD: {
        sphere: selectedLeftAxisOption.value,
        cylinder: selectedLeftCylinderOption.value,
        axis: selectedLeftAxisOption.value,
        add: selectedLeftADD.value,
      },
      pDD: {
        first: firstPd.value.first,
        second: secondPd.value.second,
      },
      usageOption: usageOption.value,
      qty: qty,
      unitPrice: unitPrice,
      amount: 15000,
      subTotal: 15000,
      grandTotal: 15000,
      pdType: "double",
      twoSinglePd: twoSinglePD,
      Add: true,
      lenseType: lenseType,
      remark: remark,
      file: file,
      lensePrice: lensePrice,
    };

    setInputValid(true);

    if (lenseType !== "") {
      initialState.items.push(prescription);
    }
    setClicked(true);
  };

  const addToCartOnePD = async () => {
    const file = image ? await uploadAFile(image) : null;
    const prescription = {
      id: v4(),
      productImage: productImage,
      productName: productName,
      productDescription: productDescription,
      productPrice: totalPrice,
      prescriptionType: "Bifocal(with line)",
      rightOD: {
        sphere: selectedRightOdOption.value,
        cylinder: selectedRightCylinderOption.value,
        axis: selectedRightAxisOption.value,
        add: selectedRightADD.value,
      },
      leftOD: {
        sphere: selectedLeftAxisOption.value,
        cylinder: selectedLeftCylinderOption.value,
        axis: selectedLeftAxisOption.value,
        add: selectedLeftADD.value,
      },
      pD: singlePD.value,
      usageOption: usageOption.value,
      qty: qty,
      unitPrice: unitPrice,
      amount: "",
      subTotal: "",
      grandTotal: "",
      pdType: "single",
      twoSinglePd: twoSinglePD,
      lenseType: lenseType,
      Add: true,
      remark: remark,
      file: file,
      lensePrice: lensePrice,
    };
    setInputValid(true);

    if (lenseType !== "") {
      initialState.items.push(prescription);
    }
    setClicked(true);
  };

  const validateInput = () => {
    selectedRightOdOption.value === null &&
      setSelectedRightOdOptionValidationError(true);
    selectedRightAxisOption.value === null &&
      setSelectedRightAxisOptionValidationError(true);
    selectedRightCylinderOption.value === null &&
      setSelectedRightCylinderOptionValidationError(true);
    selectedLeftOdOption.value === null &&
      setSelectedLeftOdOptionValidationError(true);
    selectedLeftAxisOption.value === null &&
      setSelectedLeftAxisOdOptionValidationError(true);
    selectedLeftCylinderOption.value === null &&
      setSelectedLeftCylinderOptionValidationError(true);
    singlePD.value === null && setSinglePdValidationError(true);
    firstPd.value === null && setFirstPdValidationError(true);
    secondPd.value === null && setSecondPdValidationError(true);
    usageOption.value === null && setUsageOptionValidationError(true);
    selectedRightADD.value === null && setSelectedRightADDValidationError(true);
    selectedLeftADD.value === null && setSelectedLeftADDValidationError(true);

    if (twoSinglePD === true) {
      selectedRightOdOption.value !== null &&
        selectedRightAxisOption.value !== null &&
        selectedRightCylinderOption.value !== null &&
        selectedLeftOdOption.value !== null &&
        selectedLeftAxisOption.value !== null &&
        selectedLeftCylinderOption.value !== null &&
        selectedRightADD.value !== null &&
        selectedLeftADD.value !== null &&
        firstPd.value !== null &&
        secondPd.value !== null &&
        usageOption.value !== null &&
        addToCartTwoPD();
    } else {
      selectedRightOdOption.value !== null &&
        selectedRightAxisOption.value !== null &&
        selectedRightCylinderOption.value !== null &&
        selectedLeftOdOption.value !== null &&
        selectedLeftAxisOption.value !== null &&
        selectedLeftCylinderOption.value !== null &&
        selectedRightADD.value !== null &&
        selectedLeftADD.value !== null &&
        singlePD.value !== null &&
        usageOption.value !== null &&
        addToCartOnePD();
    }
  };

  const updateToCartTwoPD = async () => {
    const file = image ? await uploadAFile(image) : null;
    const prescription = {
      id: v4(),
      productImage: productImage,
      productName: productName,
      productDescription: productDescription,
      productPrice: totalPrice,
      prescriptionType: "Bifocal(with line)",
      rightOD: {
        sphere: selectedDataRightOdOption.value,
        cylinder: selectedDataRightCylinderOption.value,
        axis: selectedDataRightAxisOption.value,
        add: selectedDataLeftADD.value,
      },
      leftOD: {
        sphere: selectedDataLeftAxisOption.value,
        cylinder: selectedDataLeftCylinderOption.value,
        axis: selectedDataLeftAxisOption.value,
        add: selectedDataRightADD.value,
      },
      pDD: {
        first: firstPdData.value.first,
        second: secondPdData.value.second,
      },
      usageOption: usageOptionData.value,
      qty: qty,
      unitPrice: unitPrice,
      amount: "",
      subTotal: "",
      grandTotal: "",
      pdType: "double",
      twoSinglePd: twoSinglePDData,
      lenseType: lenseType,
      Add: true,
      remark: remark,
      file: file,
      lensePrice: lensePrice,
    };

    setInputValidData(true);

    if (lenseType !== "") {
      initialState.items.push(prescription);
    }
    setClicked(true);
  };

  const updateToCartOnePD = async () => {
    const file = image ? await uploadAFile(image) : null;

    const prescription = {
      id: v4(),
      productImage: productImage,
      productName: productName,
      productDescription: productDescription,
      productPrice: totalPrice,
      prescriptionType: "Bifocal(with line)",
      rightOD: {
        sphere: selectedDataRightOdOption.value,
        cylinder: selectedDataRightCylinderOption.value,
        axis: selectedDataRightAxisOption.value,
        add: selectedDataRightADD.value,
      },
      leftOD: {
        sphere: selectedDataLeftAxisOption.value,
        cylinder: selectedDataLeftCylinderOption.value,
        axis: selectedDataLeftAxisOption.value,
        add: selectedDataLeftADD.value,
      },
      pD: singlePDData.value,
      doublePd: "",
      usageOption: usageOptionData.value,
      qty: qty,
      unitPrice: unitPrice,
      amount: 15000,
      subTotal: 15000,
      grandTotal: 15000,
      pdType: "single",
      Add: true,
      lenseType: lenseType,
      remark: remark,
      file: file,
      twoSinglePd: twoSinglePDData,
      lensePrice: lensePrice,
    };

    setInputValidData(true);
    if (lenseType !== "") {
      initialState.items.push(prescription);
    }
    setClicked(true);
  };

  const validateUpdate = () => {
    selectedDataRightOdOption.value === null &&
      setSelectedRightOdOptionValidationError(true);
    selectedDataRightAxisOption.value === null &&
      setSelectedRightAxisOptionValidationError(true);
    selectedDataRightCylinderOption.value === null &&
      setSelectedRightCylinderOptionValidationError(true);
    selectedDataLeftOdOption.value === null &&
      setSelectedLeftOdOptionValidationError(true);
    selectedDataLeftAxisOption.value === null &&
      setSelectedLeftAxisOdOptionValidationError(true);
    selectedDataLeftCylinderOption.value === null &&
      setSelectedLeftCylinderOptionValidationError(true);
    singlePDData.value === null && setSinglePdValidationError(true);
    firstPdData.value === null && setFirstPdValidationError(true);
    secondPdData.value === null && setSecondPdValidationError(true);
    usageOptionData.value === null && setUsageOptionValidationError(true);
    selectedDataRightADD.value === null &&
      setSelectedRightADDValidationError(true);
    selectedDataLeftADD.value === null &&
      setSelectedLeftADDValidationError(true);

    if (twoSinglePDData === true) {
      selectedDataRightOdOption.value !== null &&
        selectedDataRightAxisOption.value !== null &&
        selectedDataRightCylinderOption.value !== null &&
        selectedDataLeftOdOption.value !== null &&
        selectedDataLeftAxisOption.value !== null &&
        selectedDataLeftCylinderOption.value !== null &&
        selectedDataRightADD.value !== null &&
        selectedDataLeftADD.value !== null &&
        firstPdData.value !== null &&
        secondPdData.value !== null &&
        usageOptionData.value !== null &&
        updateToCartTwoPD();
    } else {
      selectedDataRightOdOption.value !== null &&
        selectedDataRightAxisOption.value !== null &&
        selectedDataRightCylinderOption.value !== null &&
        selectedDataLeftOdOption.value !== null &&
        selectedDataLeftAxisOption.value !== null &&
        selectedDataLeftCylinderOption.value !== null &&
        selectedDataRightADD.value !== null &&
        selectedDataLeftADD.value !== null &&
        singlePDData.value !== null &&
        usageOptionData.value !== null &&
        updateToCartOnePD();
    }
  };

  const incrementQty = (e) => {
    e.preventDefault();
    setQty((prev) => prev + 1);
    setTotalPrice((prev) => prev * 2);
  };

  const decrementQty = (e) => {
    e.preventDefault();

    if (qty > 1) {
      setQty((prev) => prev - 1);
      setTotalPrice((prev) => prev / 2);
    }
  };

  const lenseTypeHandler = (select, price) => {
    setlensType(select);
    setLensePrice(price);
    const amount = formatPriceToNumber(productPrice);
    setTotalPrice(amount + price);
  };

  const confirmedHandler = () => {
    setConfirmed(false);
  };

  let prescriptionFormSummary = (
    <PrescriptionDetailForm
      selectedRightOdOption={selectedRightOdOption.value}
      selectedRightOdOptionValidationError={
        selectedRightOdOptionValidationError
      }
      selectedRightAxisOption={selectedRightAxisOption.value}
      selectedRightAxisOptionValidationError={
        selectedRightAxisOptionValidationError
      }
      selectedRightCylinderOption={selectedRightCylinderOption.value}
      selectedRightCylinderOptionValidationError={
        selectedRightCylinderOptionValidationError
      }
      setSelectedRightAxisOption={setSelectedRightAxisOption}
      setSelectedRightOdOption={setSelectedRightOdOption}
      setSelectedRightCylinderOption={setSelectedRightCylinderOption}
      selectedLeftOdOption={selectedLeftOdOption.value}
      selectedLeftOdOptionValidationError={selectedLeftOdOptionValidationError}
      selectedLeftAxisOption={selectedLeftAxisOption.value}
      selectedLeftAxisOptionValidationError={
        selectedLeftAxisOptionValidationError
      }
      selectedLeftCylinderOption={selectedLeftCylinderOption.value}
      selectedLeftCylinderOptioValidationError={
        selectedLeftCylinderOptioValidationError
      }
      setSelectedLeftAxisOdOption={setSelectedLeftAxisOdOption}
      setSelectedLeftOdOption={setSelectedLeftOdOption}
      setSelectedLeftCylinderOption={setSelectedLeftCylinderOption}
      singlePD={singlePD.value}
      singlePDValidationError={singlePDValidationError}
      setSinglePd={setSinglePd}
      secondPd={secondPd?.value?.second}
      setSecondPd={setSecondPd}
      secondPdValidationError={secondPdValidationError}
      twoSinglePD={twoSinglePD}
      setTwoSinglePd={setTwoSinglePd}
      firstPd={firstPd?.value?.first}
      setFirstPd={setFirstPd}
      firstPdValidationError={firstPdValidationError}
      selectedRightADD={selectedRightADD.value}
      selectedRightADDValidationError={selectedRightADDValidationError}
      setSelectedRightADD={setSelectedRightADD}
      selectedLeftADD={selectedLeftADD.value}
      setSelectedLeftADD={setSelectedLeftADD}
      selectedLeftADDValidationError={selectedLeftADDValidationError}
      usageOption={usageOption.value}
      setUsageOption={setUsageOption}
      usageOptionValidationError={usageOptionValidationError}
      remark={remark}
      setRemark={setRemark}
    />
  );

  if (data) {
    prescriptionFormSummary = (
      <PrescriptionDetailForm
        selectedRightOdOption={selectedDataRightOdOption.value}
        selectedRightOdOptionValidationError={
          selectedRightOdOptionValidationError
        }
        selectedRightAxisOption={selectedDataRightAxisOption.value}
        selectedRightAxisOptionValidationError={
          selectedRightAxisOptionValidationError
        }
        selectedRightCylinderOption={selectedDataRightCylinderOption.value}
        selectedRightCylinderOptionValidationError={
          selectedRightCylinderOptionValidationError
        }
        setSelectedRightAxisOption={setSelectedDataRightAxisOption}
        setSelectedRightOdOption={setSelectedDataRightOdOption}
        setSelectedRightCylinderOption={setSelectedDataRightCylinderOption}
        selectedLeftOdOption={selectedDataLeftOdOption.value}
        selectedLeftOdOptionValidationError={
          selectedLeftOdOptionValidationError
        }
        selectedLeftAxisOption={selectedDataLeftAxisOption.value}
        selectedLeftAxisOptionValidationError={
          selectedLeftAxisOptionValidationError
        }
        selectedLeftCylinderOption={selectedDataLeftCylinderOption.value}
        selectedLeftCylinderOptioValidationError={
          selectedLeftCylinderOptioValidationError
        }
        setSelectedLeftAxisOdOption={setSelectedDataLeftAxisOdOption}
        setSelectedLeftOdOption={setSelectedDataLeftOdOption}
        setSelectedLeftCylinderOption={setSelectedDataLeftCylinderOption}
        singlePD={singlePDData.value}
        singlePDValidationError={singlePDValidationError}
        setSinglePd={setSinglePdData}
        secondPd={secondPdData?.value?.second}
        setSecondPd={setSecondPdData}
        secondPdValidationError={secondPdValidationError}
        twoSinglePD={twoSinglePDData}
        setTwoSinglePd={setTwoSinglePdData}
        firstPd={firstPdData?.value?.first}
        setFirstPd={setFirstPdData}
        firstPdValidationError={firstPdValidationError}
        selectedRightADD={selectedDataRightADD.value}
        selectedRightADDValidationError={selectedRightADDValidationError}
        setSelectedRightADD={setSelectedDataRightADD}
        selectedLeftADD={selectedDataLeftADD.value}
        setSelectedLeftADD={setSelectedDataLeftADD}
        selectedLeftADDValidationError={selectedLeftADDValidationError}
        usageOption={usageOptionData.value}
        setUsageOption={setUsageOptionData}
        usageOptionValidationError={usageOptionValidationError}
        remark={remarkData.value}
        setRemrk={setRemarkData}
      />
    );
  }

  if (confirmed && data) {
    if (twoSinglePDData === true) {
      prescriptionFormSummary = (
        <MiniCartDetailAdd
          pdType={"double"}
          leftSphere={selectedDataLeftOdOption.value}
          leftAxis={selectedDataLeftAxisOption.value}
          leftCylinder={selectedDataLeftCylinderOption.value}
          leftAdd={selectedDataLeftADD.value}
          rightSphere={selectedDataRightOdOption.value}
          rightCylinder={selectedDataRightCylinderOption.value}
          rightAxis={selectedDataRightAxisOption.value}
          rightAdd={selectedDataRightADD.value}
          pD={""}
          firstPd={firstPdData.value.first}
          secondPd={secondPdData.value.second}
          setConfirm={confirmedHandler}
        />
      );
    } else {
      prescriptionFormSummary = (
        <MiniCartDetailAdd
          pdType={"single"}
          leftSphere={selectedDataLeftAxisOption.value}
          leftAxis={selectedDataLeftAxisOption.value}
          leftCylinder={selectedLeftCylinderOption.value}
          leftAdd={selectedDataLeftADD.value}
          rightSphere={selectedDataRightOdOption.value}
          rightCylinder={selectedDataRightCylinderOption.value}
          rightAxis={selectedDataRightAxisOption.value}
          rightAdd={selectedDataRightADD.value}
          pD={singlePDData.value}
          setConfirm={confirmedHandler}
        />
      );
    }
  } else if (confirmed) {
    if (twoSinglePD === true) {
      prescriptionFormSummary = (
        <MiniCartDetailAdd
          pdType={"double"}
          leftSphere={selectedLeftOdOption.value}
          leftAxis={selectedLeftAxisOption.value}
          leftCylinder={selectedLeftCylinderOption.value}
          leftAdd={selectedLeftADD.value}
          rightSphere={selectedRightOdOption.value}
          rightCylinder={selectedRightCylinderOption.value}
          rightAxis={selectedRightAxisOption.value}
          rightAdd={selectedRightADD.value}
          pD={""}
          firstPd={firstPd.value.first}
          secondPd={secondPd.value.second}
          setConfirm={confirmedHandler}
        />
      );
    } else {
      prescriptionFormSummary = (
        <MiniCartDetailAdd
          pdType={"single"}
          leftSphere={selectedLeftOdOption.value}
          leftAxis={selectedLeftAxisOption.value}
          leftCylinder={selectedLeftCylinderOption.value}
          leftAdd={selectedLeftADD.value}
          rightSphere={selectedRightOdOption.value}
          rightCylinder={selectedRightCylinderOption.value}
          rightAxis={selectedRightAxisOption.value}
          rightAdd={selectedRightADD.value}
          pD={singlePD.value}
          setConfirm={confirmedHandler}
        />
      );
    }
  }

  const prescriptionSummary = (e) => {
    e.preventDefault();

    setConfirmed(true);
  };

  const decrementDataQty = (e) => {
    e.preventDefault();

    if (dataQty > 1) {
      setDataQty((prev) => prev - 1);
      setTotalPrice((prev) => prev / 2);
    }
  };

  const incrementDataQty = (e) => {
    e.preventDefault();
    setTotalPrice((prev) => prev * 2);
    setDataQty((prev) => prev + 1);
  };

  return (
    <>
      {prescriptionFormSummary}

      <div className="px-3 border-2 py-3">
        <label>Prescription Paper(Optional)</label>
        <br />
        <input
          type="file"
          className="my-3"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <p className="text-red-500 text-xs">
          Supported File Types:jpeg, jpeg, .gif, png, pdf
        </p>
        <p className="text-red-500 text-xs">Max file size:16M</p>
        <p className="text-xs my-2">
          Although it's optional, we highly suggest you uploading the
          prescription paper for double checking.
        </p>
        <button
          className="my-6 border-2  py-2 px-6  rounded"
          onClick={(e) => prescriptionSummary(e)}
        >
          Confirm
        </button>
      </div>

      {confirmed && (
        <BifocalVisionLensForm
          validateInput={validateInput}
          inputValid={inputValid}
          qty={qty}
          incrementQty={incrementQty}
          decrementQty={decrementQty}
          lenseType={lenseType}
          lenseTypeHandler={lenseTypeHandler}
          data={data}
          dataQty={dataQty}
          validateUpdate={validateUpdate}
          decrementDataQty={decrementDataQty}
          incrementDataQty={incrementDataQty}
          inputValidData={inputValidData}
          productPrice={totalPrice}
        />
      )}
    </>
  );
};
export default Bifocal;
