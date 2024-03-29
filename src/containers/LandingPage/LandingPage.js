import React from "react";
import Header from "./components/Header";
import Guide from "./components/Guide";
import Trends from "./components/Trends";
import Mission from "./components/Mission";
import InfoGuide from "./components/InfoGuide";
import ContactUs from "./components/ContactUs";
import "react-toastify/dist/ReactToastify.css";

const LandingPage = () => {
  return (
    <>
      <section className="overflow-x-hidden">
        <Header />
        <Guide />
        <Trends />
        <Mission />
        <InfoGuide />
        <ContactUs />
      </section>
    </>
  );
};

export default LandingPage;
