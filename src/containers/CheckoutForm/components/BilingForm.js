import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate  } from "react-router-dom";

const BilingForm = () => {
    let navigate = useNavigate();

    const shipment = (e) => {
        e.preventDefault()
        navigate("/shipmentForm")
    }
        
        return(
            <>
                <div className="flex my-3">
                    <p className="p-1 px-2 border-2">1</p>
                    <p className="px-2 py-1 text-lg font-semibold">Billing Information</p>
                </div>
                <div className="border bg-slate-50 my-12 ">
                    <div className="md:flex md:my-4">
                        <div className="px-4 my-4 md:my-0 md:w-full">
                            <label>First Name</label><br/>
                            <input className="w-full my-2 h-10 p-2 outline-none border-2 border-slate-300 rounded-sm"/>
                        </div>
                        <div className="md:w-full px-4">
                            <label>Last Name</label><br/>
                            <input className="w-full my-2 h-10 p-2 outline-none border-2 border-slate-300 rounded-sm"/>
                        </div>
                    </div>
                    <div className="px-4 ">
                        <label>Address</label><br/>
                        <input className="w-full my-2 h-10 p-2 outline-none border-2 border-slate-300 rounded-sm"/>
                        <input className="w-full my-2 h-10 p-2 outline-none border-2 border-slate-300 rounded-sm"/>
                    </div>
                    <div className="md:flex">
                        <div className="px-4 w-full">
                            <label>City</label><br/>
                            <input className="w-full my-2 h-10 p-2 outline-none border-2 border-slate-300 rounded-sm"/>
                        </div>
                        <div className="px-4 w-full">
                            <label>State/Province</label><br/>
                            <input className="w-full my-2 h-10 p-2 outline-none border-2 border-slate-300 rounded-sm"/>
                        </div>
                        <div className="px-4 w-full">
                            <label>Zip/Postal code</label><br/>
                            <input className="w-full my-2 h-10 p-2 outline-none border-2 border-slate-300 rounded-sm"/>
                        </div>
                    </div>
                    <div className="px-4 ">
                        <label>Telephone</label><br/>
                        <input className="w-full my-2 h-10 p-2 outline-none border-2 border-slate-300 rounded-sm"/>
                    </div>
                </div>
                <div>
                    <div className="flex">
                        <div><input  type="radio"/></div>
                        <p className="mx-2">Same Shipping Address</p>
                    </div>
                    <div className="flex my-2">
                        <div><input  type="radio"/></div>
                        <p className="mx-2">Different Shipping Address</p>
                    </div>
                    <button className="py-2 my-3 bg-indigo-800 text-white px-6 rounded-md" onClick={shipment}>
                        Continue
                        <FontAwesomeIcon icon={faArrowRight} className="px-2"/>
                    </button>
                    <div className="flex my-3">
                        <p className="p-1 px-2 border-2">2</p>
                        <p className="px-2 py-1 text-lg font-semibold">Shipping Information</p>
                    </div>
                    <div className="flex my-3">
                        <p className="p-1 px-2 border-2">3</p>
                        <p className="px-2 py-1 text-lg font-semibold">Shipping Method</p>
                    </div>
                    <div className="flex my-3">
                        <p className="p-1 px-2 border-2">4</p>
                        <p className="px-2 py-1 text-lg font-semibold">Payment Information</p>
                    </div>
                    <div className="flex my-3">
                        <p className="p-1 px-2 border-2">5</p>
                        <p className="px-2 py-1 text-lg font-semibold">Order Review</p>
                    </div>
                </div>
            </>
        )

}

export default BilingForm;