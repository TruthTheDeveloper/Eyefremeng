import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import MiniCartDetailPd from "./MiniCartDetailPd";
import MiniCartDetailAdd from "./MiniCartDetailAdd";
import AuthContext from "../../../context/auth-context";
import { formatToCurrency } from "../../../utilities/priceFormatter";

const CartDetail = ({
  id,
  lenseType,
  productImage,
  productName,
  productPrice,
  productDescription,
  prescriptionType,
  leftSphere,
  leftAxis,
  leftCylinder,
  leftAdd,
  rightSphere,
  rightAxis,
  rightCylinder,
  rightAdd,
  subTotal,
  unitPrice,
  usageOption,
  pdType,
  pD,
  qty,
  Add,
  remark,
  pDD,
}) => {
  const navigate = useNavigate();
  const { cartId } = useParams();

  const { initialState, setInitialState } = useContext(AuthContext);

  useEffect(() => {
    !cartId &&
      setInitialState({
        ...initialState,
        grandTotal: initialState?.grandTotal + productPrice,
        subTotal: initialState?.subTotal + productPrice,
      });
  }, [setInitialState]);

  let displayPrescriptionDetail = null;

  if (Add) {
    displayPrescriptionDetail = (
      <MiniCartDetailAdd
        pdType={pdType}
        leftSphere={leftSphere}
        leftAxis={leftAxis}
        leftCylinder={leftCylinder}
        leftAdd={leftAdd}
        rightAdd={rightAdd}
        rightSphere={rightSphere}
        rightCylinder={rightCylinder}
        rightAxis={rightAxis}
        pD={pD}
        pDD={pDD}
      />
    );
  } else if (Add === false) {
    displayPrescriptionDetail = (
      <MiniCartDetailPd
        pdType={pdType}
        leftSphere={leftSphere}
        leftAxis={leftAxis}
        leftCylinder={leftCylinder}
        rightSphere={rightSphere}
        rightCylinder={rightCylinder}
        rightAxis={rightAxis}
        pD={pD}
        pDD={pDD}
      />
    );
  } else {
    displayPrescriptionDetail = null;
  }

  const deleteItem = () => {
    const remove = initialState.items.filter((el) => el.id !== id);
    setInitialState({ ...initialState, items: remove });
  };

  const editItem = () => {
    navigate(`/prescriptionForm/${id}`);
  };

  return (
    <>
      <div className=" ">
        <div className="md:grid grid-cols-2">
          <div className="text-center py-4 text-indigo-800">
            <img src={productImage} />
            <h1>{productName}</h1>
            <p>{productDescription}</p>
          </div>
          <div>
            <div className="py-4 border border-2">
              <p className="px-4">-Color:None</p>
            </div>
            <div className="py-4 border border-2">
              <p className="px-4">-lenseType:{lenseType}</p>
            </div>
            <div className="py-4 border border-2">
              <p className="px-4">-{prescriptionType}</p>
            </div>
            <div className="py-4 border border-2">
              <p className="px-4">-Usage:{usageOption}</p>
            </div>
          </div>
        </div>
        {displayPrescriptionDetail}
        <div className="">
          <div className="grid grid-cols-3 font-semibold py-6 border text-center">
            <div>
              <p>Q'TY</p>
            </div>
            <div>
              <p>Unit Price</p>
            </div>
            <div>
              <p>Amount</p>
            </div>
          </div>
          <div className="grid grid-cols-3 border my-3 py-6 text-center">
            <div className="">
              <p className="border-2 p-2 mx-4 text-center ">{qty}</p>
            </div>
            <div>
              <p className="text-indigo-800 font-semibold text-center my-2">
                ₦{formatToCurrency(unitPrice)}
              </p>
            </div>
            <div>
              <p className="text-orange-500 font-semibold text-center my-2">
                ₦{formatToCurrency(productPrice)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm my-3">{remark}</p>
      </div>
      <div className="flex justify-end border py-4 pr-4  lg:mb-24">
        <button
          className="flex border border-sky-500 py-1 px-4 mx-1 rounded-md"
          onClick={editItem}
        >
          <FontAwesomeIcon
            icon={faPencil}
            className="text-sky-500 my-1 mr-2 text-lg"
          />
          <p>Edit</p>
        </button>
        <button
          className="border border-red-500 py-1 px-4 flex mx-1 rounded-md"
          onClick={deleteItem}
        >
          <FontAwesomeIcon
            icon={faTrash}
            className="text-red-500 mr-2 my-1  text-lg"
          />
          <p>Delete</p>
        </button>
      </div>
    </>
  );
};
export default CartDetail;
