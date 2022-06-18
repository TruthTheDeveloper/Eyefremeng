import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth-context';
import { useNavigate } from 'react-router-dom';
import orderServices from '../../firebase/services/order.services';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PaymentForm = () => {
    let navigate = useNavigate()



    const [paymentMethod, setPaymentMethod] = useState('')
    const [paymentValidationError, setPaymentValidationError] = useState('')
    const {initialState, setInitialState} = useContext(AuthContext)

    const config = {
        public_key: 'FLWPUBK_TEST-0c42e13ec815f2e5ac5a6f338dd605a5-X',
        tx_ref: Date.now(),
        amount: 100,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: 'user@gmail.com',
          phonenumber: '07064586146',
          name: 'joel ugwumadu',
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

        console.log(initialState)

      },[initialState])
      

        const payOnDeliveryHandler = async () => {
            // setDisabledSecondInput(false)
            console.log('papa')
            if(paymentMethod === ''){
                console.log('payon delivery')
                setPaymentValidationError('Please select a payment method')
            }else{
                
                try{
                    await orderServices.addOrder(initialState)
                    console.log('tototot')
                    toast.success('🦄 Congratulations you succesfully place an order!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });

                    setInitialState({...initialState, 
                        items:[],
                        address:'',
                        subTotal:15000,
                        grandTotal:1500,
                        firstName:'',
                        lastName:'',
                        Address:'',
                        city:'',
                        state:'',
                        postalCode:'',
                        telephone:'',
                        withinLagos:null,
                        paymentMethod:''
                    })
                }catch(err){
                    toast.error('🦄 unable to place order, please contact support or try again', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });

                        setInitialState({...initialState, 
                            items:[],
                            address:'',
                            subTotal:15000,
                            grandTotal:1500,
                            firstName:'',
                            lastName:'',
                            Address:'',
                            city:'',
                            state:'',
                            postalCode:'',
                            telephone:'',
                            withinLagos:null,
                            paymentMethod:''
                        })
                }
            }
        }


        const payOnlineSelector = () => {
            setPaymentMethod("pay Online")
            setInitialState({...initialState, paymentMethod, date:today})
            
            
        }


        const paymentOnDeliverySelector = () => {
            setPaymentMethod("pay On Delivery")
            setInitialState({...initialState, paymentMethod, date:today})
            
        }

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
                    setInitialState({...initialState, 
                        items:[],
                        address:'',
                        subTotal:15000,
                        grandTotal:1500,
                        firstName:'',
                        lastName:'',
                        Address:'',
                        city:'',
                        state:'',
                        postalCode:'',
                        telephone:'',
                        withinLagos:null,
                        paymentMethod:''
                    })
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

                    setInitialState({...initialState, 
                        items:[],
                        address:'',
                        subTotal:15000,
                        grandTotal:1500,
                        firstName:'',
                        lastName:'',
                        Address:'',
                        city:'',
                        state:'',
                        postalCode:'',
                        telephone:'',
                        withinLagos:null,
                        paymentMethod:''
                    })
                console.log(err)
            }
            
            
        }

    return(
        <div>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    />
                    {/* Same as */}
                    <ToastContainer />
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
            <div className="flex my-12 border border-slate-300 p-5">
                <div>
                    <input type="radio" name="lense" onChange={paymentOnDeliverySelector} />
                </div>
                <div className="mx-3 ">
                    <h1>Pay On Delivery <span className="text-indigo-800">$0.00</span></h1>
                    <p>Post Parcel : Delivery date 10-45 days approximately, 2-4 weeks in average, estimated under normal circumstances, probably delayed during holidays or by some events e.g. COVID-19.</p>
                </div>
            </div>
            <div className="flex mt-12 mb-6  border border-slate-300 p-5">
                <div>
                    <input type="radio" name="lense" onChange={payOnlineSelector}/>
                </div>
                <div className="mx-3">
                    <h1>Pay Online <span className="text-indigo-800">$30.00</span></h1>
                    <p>Express : Delivery date 3-10 days approximately, excluding the custom clearance</p>
                </div>
            </div>
                {paymentMethod === "" ? <p className="text-red-500 text-sm">{paymentValidationError}</p> : null}
            <div>
                
                {paymentMethod === "pay Online" ? <button className="py-2 my-3 bg-indigo-800 text-white px-6 rounded-md" onClick={() => {
                        handleFlutterPayment({
                            callback: (response) => {
                            console.log(response);
                                paymentSuccesful()
                                closePaymentModal() // this will close the modal programmatically
                            },
                            onClose: () => {},
                        });

                        
                        }}
                >
                    Continue
                    <FontAwesomeIcon icon={faArrowRight} className="px-2"/>
                </button>:<button className="py-2 my-3 bg-indigo-800 text-white px-6 rounded-md" onClick={payOnDeliveryHandler}>
                    Continue
                    <FontAwesomeIcon icon={faArrowRight} className="px-2"/>
                </button>}
                <button className="py-2 my-3 border-2 border-slate-300 px-6 rounded-md mx-3" onClick={() => navigate(-1)}>
                    back
                    <FontAwesomeIcon icon={faArrowLeft} className="px-2" />
                </button>
            </div>
        </div>
    )
}

export default PaymentForm;