import AuthContext from '../../context/auth-context';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useContext,useState } from 'react';

import orderServices from '../../firebase/services/order.services';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeliverySummary = () => {

    let navigate = useNavigate()
    
    const {initialState, setInitialState} = useContext(AuthContext)
    const [transactionId, setTransactionId] = useState('TENSUSA-6500')

    const config = {
        public_key: 'FLWPUBK-4eba292c06879c74ecdfe47c09fe8ac2-X',
        tx_ref: Date.now(),
        amount: initialState.grandTotal,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: `${initialState.email}`,
          phonenumber: `${initialState.telephone}`,
          name: `${initialState.firstName} ${initialState.lastName}`,
        },
        customizations: {
          title: `Pay for ${initialState.items[0]?.productName} and others `,
          description: 'Payment for items in cart',
          logo: "https://eyeframeng.com/wp-content/uploads/2020/11/cropped-eyeframeng-logo-1-1536x460-1.png",
        },
      };

      const sendOrderEmail = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;

        axios.post('https://eyefremeng-nodemailer.herokuapp.com/sendMessage',{
        name:'Eyefremeng',
        title:`Order for the purchase of ${initialState.items[0].productName} and more`,
        content:'Thank you for shopping with us ur order have been placed',
        emails:'henrysempire111@gmail.com, tolaniogunfuyi45@gmail.com',
        productName:initialState.items[0].productName,
        date:today,
        payload:initialState,
        transactionId:transactionId

    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  }
    const handleFlutterPayment = useFlutterwave(config);

      const paymentSuccesfull = async () => {

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
        <>
            <section className="py-12 p-5 bg-gray-200 my-8">
            <div className="flex justify-between text-xs md:text-sm">
                    <h1 className="">CUSTOMER DELIVERY DETAILS</h1>
                    <h1 onClick={() => navigate('/checkoutForm/review')} className="text-indigo-800 cursor-pointer font-semibold">EDIT</h1>
                </div>
                <div className="flex justify-between bg-slate-100 my-6 p-8 text-sm md:text-base">
                    <div className="">
                        <h1>{initialState.firstName} {initialState.lastName}- {initialState.email}</h1>
                        <h1>{initialState.state}</h1>
                        <h1>{initialState.telephone}</h1>
                    </div>
                </div>
                <div className="flex justify-between text-xs md:text-sm">
                    <h1 onClick={() => navigate('/checkoutForm/review')}>ORDER SUMMARY</h1>
                    <h1 className="text-indigo-800 cursor-pointer font-semibold">SEE DETAILS</h1>
                </div>
                <div className="flex justify-between bg-slate-100 my-6 p-8 text-sm md:text-base">
                    <h1>TOTAL TO PAY</h1>
                    <h1>₦{initialState.grandTotal}</h1>
                </div>
                <button className="py-4 px-6 bg-indigo-800 flex mx-auto text-white rounded-md" onClick={paymentSuccesfull}>PAY NOW: ₦{initialState.grandTotal}</button>
                <p className="text-sm text-center py-3">By tapping "PAY NOW" i accept eyefremeng <a href="#">Payment Terms & Conditions, General Terms and Conditions</a> and Privacy and Cookie Notice</p>

                <p className="text-sm text-center py-1">Please note: eyefremeng will never ask you for your password, PIN, CVV or full card details over the phone or via email. Need help? Contact us on <a href="https://www.eShop.com.ng/contact/"> https://www.eyefremeng.com/contactus/</a></p>
                
            </section>
        </>
    )

}

export default DeliverySummary;