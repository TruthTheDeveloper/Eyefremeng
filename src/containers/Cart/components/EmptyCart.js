import { useNavigate } from "react-router";

const EmptyCart = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div className="lg:mx-32 my-16 mx-4">
      <h1 className="text-3xl py-4">Shopping Cart is Empty</h1>
      <p className="text-xl py-2">you have no items in your shop cart</p>
      <p>
        Click{" "}
        <a className="text-indigo-500 cursor-pointer" onClick={navigateHome}>
          here
        </a>{" "}
        to continue
      </p>
    </div>
  );
};

export default EmptyCart;
