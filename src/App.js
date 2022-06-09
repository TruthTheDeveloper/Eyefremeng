import React from 'react';
import Layout from './Layout/Layout';
import LandingPage from './containers/LandingPage/LandingPage';
import WomenCart from './containers/WomenCart/WomenCart';
import MenCart from './containers/MenCart/MenCart';
import PrescriptionForm from './containers/PrescriptionForm/PrescriptionForm';
import Cart from './containers/Cart/Cart';
import CheckoutForm from './containers/CheckoutForm/CheckoutForm';
import ShopTrend from './containers/ShopTrend/ShopTrend';

// Tips and Link Route
import FaceShape from './containers/TipsLink/FaceShape';
import FrameSize from './containers/TipsLink/FrameSize';
import Pd from './containers/TipsLink/Pd';

// About Us
import ContactUs from './containers/AboutUs/ContactUs';
import PrivacyPolicy from './containers/AboutUs/PrivacyPolicy';
import ReturnExchange from './containers/AboutUs/ReturnExchange';
import TermsUse from './containers/AboutUs/TermsUse';
import ShipmentForm from './containers/CheckoutForm/ShipmentForm';


//Admin
import Dashboard from './containers/Admin/Dashboard';
import AddProduct from './containers/Admin/AddProduct';
import OrderedProduct from './containers/Admin/OrderedProduct';
import Orders from './containers/Admin/Orders';
import Product from './containers/Admin/Product';
import Subscriber from './containers/Admin/Subscriber';
import UpdateProduct from './containers/Admin/UpdateProduct';
import DashboardHoc from './hoc/DashboardHoc'

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';

import { useState } from 'react';
import AuthContext from './context/auth-context';

const App = () => {

  const [initialState, setInitialState] = useState({
    items:[]
  })

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  const prescriptionForm = <AuthContext.Provider value={{initialState, setInitialState}}>
      <PrescriptionForm/>
  </AuthContext.Provider>

  const cart = <AuthContext.Provider value={{initialState, setInitialState}}>
    <Cart/>
  </AuthContext.Provider>

  return( 

        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="womencart" element={<WomenCart />} />
            <Route path="mencart" element={<MenCart/>} />
            <Route path="prescriptionForm" element={prescriptionForm} />
            <Route path="cart" element={cart} />
            <Route path="checkoutForm" element={<CheckoutForm/>} />
            <Route path="shipmentform" element={<ShipmentForm/>} />
            <Route path="shopTrend" element={<ShopTrend/>}/>

            {/* Tips and Link Route */}
            <Route path="faceshape" element={<FaceShape/>} />
            <Route path="framesize" element={<FrameSize/>} />
            <Route path="pd" element={<Pd/>} />

            {/* About US */}
            <Route path="contactus" element={<ContactUs/>} />
            <Route path="privacypolicy" element={<PrivacyPolicy/>} />
            <Route path="returnexchange" element={<ReturnExchange/>} />
            <Route path="termsuse" element={<TermsUse/>} />

            {/*admin */}
            <Route path="/" element={<DashboardHoc/>}>
              <Route path="dashboard" element={<Dashboard/>}/>
              <Route path="dashboard/addProduct" element={<AddProduct/>}/>
              <Route path="dashboard/orderedProduct" element={<OrderedProduct/>}/>
              <Route path="dashboard/orders" element={<Orders/>} />
              <Route path="dashboard/product" element={<Product/>}/>
              <Route path="dashboard/subscriber" element={<Subscriber/>}/>
              <Route path="dashboard/updateproduct" element={<UpdateProduct/>}/>
            </Route>
          </Route>
          
        </Routes>
  )
  
}

export default App;