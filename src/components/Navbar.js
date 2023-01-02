// Assets
import cart from "../assets/carts.png";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; // <-- import styles to be used
import { faClose } from "@fortawesome/free-solid-svg-icons";

//React Components
import { useState } from "react";

//React router
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [closeNav, setCloseNav] = useState(true);

  return (
    <nav className=" fixed bg-white w-full z-50">
      <div className="flex  my-4 md:my-2 lg:my-0 lg:py-0">
        <div className="w-36 md:w-40 lg:w-44 my-1 lg:my-3 mx-4 ">
          <NavLink to="/">
            <img
              src="https://eyeframeng.com/wp-content/uploads/2020/11/cropped-eyeframeng-logo-1-1536x460-1.png"
              alt="logo"
            />
          </NavLink>
        </div>
        <div className="flex  ml-auto mr-2 lg:hidden ">
          <NavLink to="/cart">
            <img
              src={cart}
              className="w-10 my-1 cursor-pointer h-10 mx-4"
              alt="cart"
            />
          </NavLink>
          {closeNav ? (
            <div
              className="bg-orange-400 px-4 rounded-full"
              onClick={() => setCloseNav(false)}
            >
              <FontAwesomeIcon icon={faBars} className=" text-2xl my-3 m" />
            </div>
          ) : (
            <div
              className=" px-4 rounded-full"
              onClick={() => setCloseNav(true)}
            >
              <FontAwesomeIcon icon={faClose} className=" text-3xl my-2 " />
            </div>
          )}
        </div>
        <ul
          className="ml-auto my-5 mr-10 text-base font-semibold hidden lg:flex "
          style={{ color: "#002265" }}
        >
          <li className="mx-4">
            <NavLink
              className={(navData) =>
                `${navData.isActive ? "text-inActive" : "bg-active text-black"}`
              }
              to="/"
              exact="true"
            >
              Home
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink
              to="/mencart"
              className={(navData) =>
                `${navData.isActive ? "text-inActive pb-2 border-b-2" : "bg-active text-black"}`
              }
              exact="true"
            >
              Men's Glasses
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink
              to="/womencart"
              className={(navData) =>
                `${navData.isActive ? "text-inActive pb-2 border-b-2" : "bg-active text-black"}`
              }
              exact="true"
            >
              Women's Glasses
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink
              className={(navData) =>
                `${navData.isActive ? "text-inActive pb-2 border-b-2" : "bg-active text-black"}`
              }
              to="/childrencart"
              exact
            >
              Children Glasses
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <img
                src={cart}
                className="w-10 mx-4 cursor-pointer"
                alt="cart icon"
              />
            </NavLink>
          </li>
        </ul>
      </div>
      {!closeNav ? (
        <div>
          <ul
            className=" flex flex-col ml-auto my-3 mr-10 text-lg font-semibold text-md lg:hidden "
            style={{ color: "#002265" }}
          >
            <li className="my-1 ml-4" onClick={() => setCloseNav(true)}>
              <NavLink to="/" exact="true">
                Home
              </NavLink>
            </li>
            <li className="my-1 ml-4" onClick={() => setCloseNav(true)}>
              <NavLink to="/mencart" exact="true">
                Men's Glasses
              </NavLink>
            </li>
            <li className="my-1 ml-4" onClick={() => setCloseNav(true)}>
              <NavLink to="/womencart">Women's Glasses</NavLink>
            </li>
            <li className="my-1 ml-4" onClick={() => setCloseNav(true)}>
              <NavLink to="/childrencart" exact>
                Children Glasses
              </NavLink>
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
};
export default Navbar;
