import React from 'react';
import Layout from './Layout/Layout';
import LandingPage from './containers/LandingPage/LandingPage';
import WomenCart from './containers/WomenCart/WomenCart';
import MenCart from './containers/MenCart/MenCart';
import PrescriptionForm from './containers/PrescriptionForm/PrescriptionForm';
import Cart from './containers/Cart/Cart';
import CheckoutForm from './containers/'

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
      </Routes>
    </Layout>
  )
}

export default App;