import React from 'react';
import Layout from './Layout/Layout';
import LandingPage from './containers/LandingPage/LandingPage';
import WomenCart from './containers/WomenCart/WomenCart';
import MenCart from './containers/MenCart/MenCart';
import PrescriptionForm from './containers/PrescriptionForm/PrescriptionForm';
import Cart from './containers/Cart/Cart';
import CheckoutForm from './containers/CheckoutForm/Hoc/CheckoutForm';
import ShopTrend from './containers/ShopTrend/ShopTrend';
import PaymentForm from './containers/CheckoutForm/PaymentForm';
import BilingForm from './containers/CheckoutForm/BilingForm';
import ShipmentMethodForm from './containers/CheckoutForm/ShipmentMethodForm';
import OrderReviewForm from './containers/CheckoutForm/OrderReviewForm';

import Register from './containers/Auth/Register';
import Login from './containers/Auth/Login';

// Tips and Link Route
import FaceShape from './containers/TipsLink/FaceShape';
import FrameSize from './containers/TipsLink/FrameSize';
import Pd from './containers/TipsLink/Pd';

// About Us
import ContactUs from './containers/AboutUs/ContactUs';
import PrivacyPolicy from './containers/AboutUs/PrivacyPolicy';
import ReturnExchange from './containers/AboutUs/ReturnExchange';
import TermsUse from './containers/AboutUs/TermsUse';


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
import { useEffect,useState } from 'react';

import AuthContext from './context/auth-context';


const App = () => {

  const [initialState, setInitialState] = useState({
    items:[],
    address:'',
    subTotal:15000,
    grandTotal:1500,
    firstName:'',
    lastName:'',
    Address:'',
    productName:'',
    city:'',
    state:'',
    postalCode:'',
    telephone:'',
    withinLagos:null,
    paymentMethod:'',
    date:null
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
  const checkoutForm = <AuthContext.Provider value={{initialState, setInitialState}}>
    <CheckoutForm/>
  </AuthContext.Provider>

  const shipmentMethod = <AuthContext.Provider value={{initialState, setInitialState}}>
    <ShipmentMethodForm/>
  </AuthContext.Provider>

  const paymentForm = <AuthContext.Provider value={{initialState, setInitialState}}>
    <PaymentForm/>
  </AuthContext.Provider>

  const billingForm = <AuthContext.Provider value={{initialState, setInitialState}}>
    <BilingForm/>
  </AuthContext.Provider>

  const reviewOrder = <AuthContext.Provider value={{initialState, setInitialState}}>
    <OrderReviewForm/>
  </AuthContext.Provider>


  return( 

        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="/" element={<LandingPage/>}/>
              <Route path="womencart" element={<WomenCart />} />
              <Route path="mencart" element={<MenCart/>} />
              <Route path="prescriptionForm" element={prescriptionForm} />
              <Route path="cart" element={cart} />

              <Route path="/checkoutForm" element={checkoutForm}>
                <Route path="shipmentMethod" element={shipmentMethod} />
                <Route path="paymentMethod" element={paymentForm} />
                <Route path="bilingForm" element={billingForm}/>
                <Route path="review" element={reviewOrder}/>
              </Route>

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


              <Route path="/register" element={<Register/>} />
              <Route path="/login" element={<Login/>}/>
            

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

              <Route path="prescriptionForm/" element={prescriptionForm}>
                <Route path=":formId" element={prescriptionForm}/>
              </Route>
            </Route>
        </Routes>
  )
  
}

export default App;