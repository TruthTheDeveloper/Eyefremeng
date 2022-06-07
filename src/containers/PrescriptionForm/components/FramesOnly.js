import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate  } from "react-router-dom";
const FramesOnly = () => {
    let navigate = useNavigate();

    const CheckOut = (e) => {
        e.preventDefault()
        navigate("/checkoutForm")
    }
    
    return(
        <div className="my-4">
                <p className="my-8 text-2xl font-semibold text-indigo-800">#15,000</p>
                <div className="flex">
                    <button className="border py-1 px-4 lg:text-2xl font-semibold">-</button>
                    <button className="border border-black py-1 px-4 lg:text-2xl mx-2">1</button>
                    <button className="border py-1 px-4 lg:text-2xl font-semibold">+</button>
                    <button className="flex bg-indigo-800 text-white  py-2 px-4 mx-2" onClick={CheckOut}>
                        <FontAwesomeIcon icon={faCartShopping} className="md:mr-2 pt-1 md:pt-0 lg:text-2xl"/>
                        <p>Add to Cart</p>
                    </button>
                </div>
            </div>
    )

}

export default FramesOnly;