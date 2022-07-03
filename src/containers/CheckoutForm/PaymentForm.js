import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth-context';
import { useNavigate } from 'react-router-dom';
import orderServices from '../../firebase/services/order.services';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const PaymentForm = () => {
    let navigate = useNavigate()



    const {initialState, setInitialState} = useContext(AuthContext)

    const config = {
        public_key: 'FLWPUBK-4eba292c06879c74ecdfe47c09fe8ac2-X',
        tx_ref: Date.now(),
        amount: initialState.grandTotal,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: 'user@gmail.com',
          phonenumber: '07064586146',
          name: `${initialState.firstName} ${initialState.lastName}`,
        },
        customizations: {
          title: 'my Payment Title',
          description: 'Payment for items in cart',
          logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
      };
    
        const handleFlutterPayment = useFlutterwave(config);

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;

      useEffect(() => {

        console.log(initialState, 'initial')
        

      },[initialState])


      const sendOrderEmail = () => {
        axios.post('http://localhost:5000/sendMessage',{
            name:'Eyefremeng',
            title:`Order for the purchase of ${initialState.items[0].productName}`,
            content:'Thank you for shopping with us',
            emails:'henrysempire111@gmail.com',
            html: `<div>
                <h1 style={{'color':'black', 'fontSize':'2rem'}}> Congratulation You Succesfully place An Order for ${initialState.items[0].productName}</h1>
                <img style={{'height':'10rem', 'width':'15rem'}} src=${initialState.items[0].productImage}/>
            </div>`

        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
      }
      



    


        // const paymentOnDeliverySelector = () => {
        //     setPaymentMethod("pay On Delivery")
        //     setInitialState({...initialState, paymentMethod, date:today})
            
        // }

        const paymentSuccesful = async () => {

            try{
                await orderServices.addOrder(initialState)
                toast.success('🦄 Congratulations you succesfully place an order!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });

                    sendOrderEmail()
                    // setInitialState({...initialState, 
                    //     items:[],
                    //     address:'',
                    //     subTotal:15000,
                    //     grandTotal:1500,
                    //     firstName:'',
                    //     lastName:'',
                    //     Address:'',
                    //     city:'',
                    //     state:'',
                    //     postalCode:'',
                    //     telephone:'',
                    //     withinLagos:null,
                    //     paymentMethod:''
                    // })
            }catch(err){
                toast.error('🦄 unable to place order please contact support or try again', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });

                    // setInitialState({...initialState, 
                    //     items:[],
                    //     address:'',
                    //     subTotal:15000,
                    //     grandTotal:1500,
                    //     firstName:'',
                    //     lastName:'',
                    //     Address:'',
                    //     city:'',
                    //     state:'',
                    //     postalCode:'',
                    //     telephone:'',
                    //     withinLagos:null,
                    //     paymentMethod:''
                    // })
                console.log(err)
            }
            
            
        }

    return(
        <div>
            <div>
                <div className="flex my-3">
                    <p className="p-1 px-2 border-2">1</p>
                    <p className="px-2 py-1 text-lg font-semibold">Billing Information</p>
                </div>
                <div className="flex my-3">
                    <p className="p-1 px-2 border-2">2</p>
                    <p className="px-2 py-1 text-lg font-semibold">Shipping Method</p>
                </div>
                <div className="flex my-3">
                    <p className="p-1 px-2 border-2">3</p>
                    <p className="px-2 py-1 text-lg font-semibold">Order Review</p>
                </div>
                <div className="flex my-3">
                    <p className="p-1 px-2 border-2">4</p>
                    <p className="px-2 py-1 text-lg font-semibold">Make Payment</p>
                </div>
            </div>
            {/* <div className="flex my-12 border border-slate-300 p-5">
                <div>
                    <input type="radio" name="lense" onChange={paymentOnDeliverySelector} />
                </div>
                <div className="mx-3 ">
                    <h1>Pay On Delivery <span className="text-indigo-800">$0.00</span></h1>
                    <p>Post Parcel : Delivery date 10-45 days approximately, 2-4 weeks in average, estimated under normal circumstances, probably delayed during holidays or by some events e.g. COVID-19.</p>
                </div>
            </div> */}
            <div className="flex mt-12 mb-6  border border-slate-300 p-5">
                <div className="mx-3">
                    <h1>Pay Online <span className="text-indigo-800">$30.00</span></h1>
                    <p>Express : Delivery date 3-10 days approximately, excluding the custom clearance</p>
                </div>
            </div>
            <div>
                
            <button className="py-2 my-3 bg-indigo-800 text-white px-6 rounded-md" onClick={paymentSuccesful}
                >
                    Continue
                    <FontAwesomeIcon icon={faArrowRight} className="px-2"/>
                </button>
                <button className="py-2 my-3 border-2 border-slate-300 px-6 rounded-md mx-3" onClick={() => navigate(-1)}>
                    back
                    <FontAwesomeIcon icon={faArrowLeft} className="px-2" />
                </button>
            </div>
        </div>
    )
}

export default PaymentForm;

