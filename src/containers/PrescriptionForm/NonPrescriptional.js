import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth-context";
import { v4 } from "uuid";

import { useNavigate } from "react-router-dom";
import NonPrescriptionalVisionLensForm from "./components/otherVision/NonPrescriptionalVisionLensForm";
import {
  formatPriceToNumber,
} from "../../utilities/priceFormatter";

const NonPrescriptional = ({
  productImage,
  productName,
  productDescription,
  productPrice,
  data,
}) => {
  let navigate = useNavigate();

  const { initialState, setInitialState } = useContext(AuthContext);

  const [inputValid, setInputValid] = useState(false);

  const [qty, setQty] = useState(1);
  const [lenseType, setlensType] = useState("");

  const [dataQty, setDataQty] = useState(data?.qty);
  const [clicked, setClicked] = useState(false);
  const [totalPrice, setTotalPrice] = useState(productPrice);
  const [lensePrice, setLensePrice] = useState(null);

 

  useEffect(() => {
    if (lenseType !== "" && clicked) {
      const remove = initialState.items.filter((el) => el.id !== data?.id);
      setInitialState({ ...initialState, items: remove });
      navigate("/cart");
    }
    setClicked(false);
  }, [
    data?.id,
    initialState,
    inputValid,
    lenseType,
    navigate,
    clicked,
    setInitialState,
  ]);

  useEffect(() => {
    setTotalPrice(formatPriceToNumber(productPrice));
  }, [])

  useEffect(() => {
    if (inputValid && lenseType !== "" && clicked) {
      navigate("/cart");
    }
    setClicked(false);
  }, [inputValid, lenseType, navigate, clicked]);

  const incrementQty = (e) => {
    e.preventDefault();
    setQty((prev) => prev + 1);
  };

  const decrementQty = (e) => {
    e.preventDefault();

    if (qty > 1) {
      setQty((prev) => prev - 1);
    }
  };

  const lenseTypeHandler = (select, price) => {
    setlensType(select);
    setLensePrice(price);
    const amount = formatPriceToNumber(productPrice);
    setTotalPrice(amount + price);
  };

  const validateInput = () => {
    const prescription = {
      id: v4(),
      productImage: productImage,
      productName: productName,
      productDescription: productDescription,
      productPrice: totalPrice,
      prescriptionType: "Non Prescriptional",
      qty: qty,
      unitPrice: 5000,
      amount: 15000,
      subTotal: 15000,
      grandTotal: 15000,
      pdType: "single",
      lenseType: lenseType,
      twoSinglePd: null,
      lensePrice: lensePrice,
    };
    setInputValid(true);

    if (lenseType !== "") {
      initialState.items.push(prescription);
    }
    setClicked(true);
  };

  const validateUpdate = () => {
    const prescription = {
      id: v4(),
      productImage: productImage,
      productName: productName,
      productDescription: productDescription,
      productPrice: totalPrice,
      prescriptionType: "Non Prescriptional",
      qty: dataQty,
      unitPrice: 5000,
      amount: 15000,
      subTotal: 15000,
      grandTotal: 15000,
      pdType: "single",
      lenseType: lenseType,
      twoSinglePd: null,
      lensePrice: lensePrice,
    };
    setInputValid(true);

    if (lenseType !== "") {
      initialState.items.push(prescription);
    }
    setClicked(true);
  };

  const decrementDataQty = (e) => {
    e.preventDefault();

    if (dataQty > 1) {
      setDataQty((prev) => prev - 1);
    }
  };

  const incrementDataQty = (e) => {
    e.preventDefault();

    setDataQty((prev) => prev + 1);
  };

  return (
    <>
      <NonPrescriptionalVisionLensForm
        validateInput={validateInput}
        validateUpdate={validateUpdate}
        inputValid={inputValid}
        qty={qty}
        incrementQty={incrementQty}
        decrementQty={decrementQty}
        lenseType={lenseType}
        lenseTypeHandler={lenseTypeHandler}
        data={data}
        dataQty={dataQty}
        decrementDataQty={decrementDataQty}
        incrementDataQty={incrementDataQty}
        productPrice={totalPrice}
      />
    </>
  );
};
export default NonPrescriptional;
