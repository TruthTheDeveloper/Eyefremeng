import React from 'react';
import Layout from './Layout/Layout';
import LandingPage from './containers/LandingPage/LandingPage';
import WomenCart from './containers/WomenCart/WomenCart';
import MenCart from './containers/MenCart/MenCart';
import PrescriptionForm from './containers/PrescriptionForm/PrescriptionForm';
import Cart from './containers/Cart/Cart';
import CheckoutForm from './containers/CheckoutForm/CheckoutForm';

// Tips and Link Route
import FaceShape from './containers/TipsLink/FaceShape';
import FrameSize from './containers/TipsLink/FrameSize';
import Pd from './containers/TipsLink/Pd';

// About Us
import ContactUs from './containers/AboutUs/ContactUs';
import PrivacyPolicy from './containers/AboutUs/PrivacyPolicy';
import ReturnExchange from './containers/AboutUs/ReturnExchange';
import TermsUse from './containers/AboutUs/TermsUse';

import { Routes, Route} from "react-router-dom";

const App = () => {

  return( 
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/womencart" element={<WomenCart />} />
        <Route path="/mencart" element={<MenCart />} />
        <Route path="/prescriptionForm" element={<PrescriptionForm/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkoutForm" element={<CheckoutForm/>} />

        {/* Tips and Link Route */}
        <Route path="/faceshape" element={<FaceShape/>} />
        <Route path="/framesize" element={<FrameSize/>} />
        <Route path="/pd" element={<Pd/>} />

        {/* About US */}
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
        <Route path="/returnexchange" element={<ReturnExchange/>} />
        <Route path="/termsuse" element={<TermsUse/>} />
      </Routes>
    </Layout>
  )
}

export default App;