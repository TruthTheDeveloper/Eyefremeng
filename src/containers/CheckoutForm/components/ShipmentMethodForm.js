import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

const ShipmentMethodForm = () => {

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

    return(
        <div>
            <div>
                <div className="flex my-3">
                    <p className="p-1 px-2 border-2">1</p>
                    <p className="px-2 py-1 text-lg font-semibold">Billing Information</p>
                </div>
                <div className="flex my-3">
                    <p className="p-1 px-2 border-2">2</p>
                    <p className="px-2 py-1 text-lg font-semibold">Shipping Information</p>
                </div>
                <div className="flex my-3">
                    <p className="p-1 px-2 border-2">3</p>
                    <p className="px-2 py-1 text-lg font-semibold">Shipping Method</p>
                </div>
            </div>
            <div className="flex my-12 border border-slate-300 p-5">
                <div>
                    <input type="radio" />
                </div>
                <div className="mx-3 ">
                    <h1>Economic Shipping <span className="text-indigo-800">$0.00</span></h1>
                    <p>Post Parcel : Delivery date 10-45 days approximately, 2-4 weeks in average, estimated under normal circumstances, probably delayed during holidays or by some events e.g. COVID-19.</p>
                </div>
            </div>
            <div className="flex my-12 border border-slate-300 p-5">
                <div>
                    <input type="radio" />
                </div>
                <div className="mx-3">
                    <h1>Expedited Shipping <span className="text-indigo-800">$30.00</span></h1>
                    <p>Express : Delivery date 3-10 days approximately, excluding the custom clearance</p>
                </div>
            </div>
            <div>
                <button className="py-2 my-3 bg-indigo-800 text-white px-6 rounded-md" onClick={() => {
                        handleFlutterPayment({
                            callback: (response) => {
                            console.log(response);
                                closePaymentModal() // this will close the modal programmatically
                            },
                            onClose: () => {},
                        });
                        }}
                >
                    Continue
                    <FontAwesomeIcon icon={faArrowRight} className="px-2"/>
                </button>
                <button className="py-2 my-3 border-2 border-slate-300 px-6 rounded-md mx-3">
                    back
                    <FontAwesomeIcon icon={faArrowLeft} className="px-2"/>
                </button>
            </div>
            <div className="flex my-3">
                <p className="p-1 px-2 border-2">4</p>
                <p className="px-2 py-1 text-lg font-semibold">Make Payment</p>
            </div>
            <div className="flex my-3">
                <p className="p-1 px-2 border-2">5</p>
                <p className="px-2 py-1 text-lg font-semibold">Order Review</p>
            </div>
        </div>
    )
}

export default ShipmentMethodForm;