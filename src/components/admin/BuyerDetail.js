import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BuyerDetail = ({
  id,
  firstName,
  lastName,
  productName,
  qty,
  address,
  state,
  postalcode,
  phoneNumber,
  price,
  paymentType,
  date,
}) => {
  const [delivered, setDelivered] = useState(false);

  const navigate = useNavigate();

  const changeStatus = () => {
    setDelivered(true);
  };

  const orderInfo = () => {
    localStorage.setItem("id", JSON.stringify(id));
    navigate("/dashboard/orderedProduct");
  };

  return (
    <div
      className="grid grid-cols-6 justify-center my-6 text-center border mx-4 rounded-lg cursor-pointer  w-[68rem] "
      onClick={orderInfo}
    >
      <div className=" font-semibold p-2">
        {firstName} {lastName}
      </div>
      <div className=" font-semibold  p-2">{date}</div>
      <div className=" font-semibold  p-2">{price}</div>
      <div className=" font-semibold  p-2">{phoneNumber}</div>
      <div className=" font-semibold p-2">{paymentType}</div>
      <div
        className=" font-semibold p-2 text-yellow-400"
        onClick={changeStatus}
      >
        pending
      </div>
    </div>
  );
};
export default BuyerDetail;
