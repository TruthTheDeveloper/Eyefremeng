import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwit } from '@fortawesome/free-regular-svg-icons';
// import { faFacebook } from '@fortawesome/free-solid-svg-icons';// <-- import styles to be used
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

//React router
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="py-6"
      style={{ backgroundColor: "#D7D7D7", color: "#002365" }}
    >
      <div className="flex flex-col lg:flex-row justify-center lg:mx-16 xl:mx-28 mb-12 py-6">
        <div className="basis-1/4 mx-4 lg:mx-8">
          <h1 className="text-2xl font-semibold my-4">SHOP</h1>
          <ul className=" font-semibold">
            <li>
              <NavLink to="/mencart" exact="true">
                Men's Glasses
              </NavLink>
            </li>
            <li>
              <NavLink to="/womencart" exact="true">
                Women's Glasses
              </NavLink>
            </li>
            <li>
              <NavLink to="/" exact="true">
                Children Glasses
              </NavLink>
            </li>
            <li>
              <NavLink to="/" exact="true">
                Sunglasses
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="basis-1/4 mx-4 lg:mx-8">
          <h2 className="text-2xl font-semibold my-4">TIPS AND SELF-HELP</h2>
          <ul className=" font-semibold">
            <li>
              <NavLink to="/faceshape" yle={{ color: "red" }} exact="true">
                Whats my Face Shape?
              </NavLink>
            </li>
            <li>
              <NavLink to="/pd" exact="true">
                How to measure your pupilary distance(Pd)
              </NavLink>
            </li>
            <li>
              <NavLink to="/framesize" exact="true">
                How to find your eyeglasses frame size
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="basis-1/4 mx-4 lg:mx-8">
          <h1 className="text-2xl font-semibold my-4">ABOUT</h1>
          <ul className=" font-semibold">
            <li>
              <NavLink to="/contactus" exact="true">
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/returnexchange" exact="true">
                Return and Exchange
              </NavLink>
            </li>
            <li>
              <NavLink to="/shippingpolicy" exact="true">
                Shipping Policy
              </NavLink>
            </li>
            {/* <li>
                            <NavLink to="/privacypolicy" exact='true'>
                                Privacy Policy
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/termsuse" exact='true'>
                                Terms and Condition of Use
                            </NavLink>
                        </li> */}
          </ul>
        </div>
        <div className="mt-2 lg:mt-0">
          <h1 className="text-2xl hidden lg:block font-semibold whitespace-pre">
            {" "}
            Connect with us{" "}
          </h1>
          <div
            className="flex justify-center basis-1/4"
            style={{ color: "white" }}
          >
            <div className="mx-2">
              <a href="">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className=" text-2xl mt-8  p-2 rounded-lg"
                  style={{ backgroundColor: "#002365" }}
                />
              </a>
            </div>
            <div className="mx-2">
              <a href="https://www.instagram.com/eyeframeng/">
                {" "}
                <FontAwesomeIcon
                  icon={faInstagram}
                  className=" text-2xl mt-8 p-2 rounded-lg"
                  style={{ backgroundColor: "#002365" }}
                />
              </a>
            </div>
            <div className="mx-2">
              <a href="https://web.facebook.com/eyeframeng">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className=" text-2xl mt-8 p-2 rounded-lg"
                  style={{ backgroundColor: "#002365" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center font-semibold">
        <hr className="w-full " style={{ border: "0.5px solid #002365" }} />
        <p className=" pt-6" style={{ color: "#002365" }}>
          2019-2020 (c) Eyeframeng
        </p>
        <NavLink to="/privacypolicy" exact="true">
          Privacy Policy
        </NavLink>
        <br />
        <NavLink to="/termsuse" exact="true">
          Terms and Condition of Use
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
