import { useState, useEffect } from "react";
import OrderServices from "../../firebase/services/order.services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import OrderCartDetail from "./OrderCartDetail";
import OrderItem from "./OrderItem";

const Order = () => {
  let navigate = useNavigate();

  const [order, setOrder] = useState([]);

  useEffect(() => {
    getUserOrder();
  }, []);

  const getUserOrder = async () => {
    const data = await OrderServices.getUserOrder(
      JSON.parse(localStorage.getItem("uid"))
    );
    setOrder(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <section className="py-24 mx-4 ">
      <div className="md:w-8/12 lg:mx-auto xl:w-6/12 ">
        <div className=" text-2xl py-2">
          <h1>My Orders</h1>
        </div>
        <div className="py-2">
          {order.length < 1 ? (
            <h1>No Orders Found</h1>
          ) : (
            order.map((item, index) => {
              return <OrderItem key={index} item={item.items} />;
            })
          )}
        </div>
        <button
          className="py-2 my-3  border border-2 px-6 rounded-md"
          onClick={() => navigate(-1)}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="px-2" />
          back
        </button>
      </div>
    </section>
  );
};

export default Order;
