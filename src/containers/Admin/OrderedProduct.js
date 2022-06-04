import OrderedProductDetail from '../../components/admin/OrderedProductDetail';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate  } from "react-router-dom";
const OrderedProduct = () => {
    const navigate = useNavigate();
    return(
            <section className="">
                <div className="md:mx-12 mx-5 my-8">
                    <FontAwesomeIcon icon={faBars} className="text-indigo-800 text-2xl lg:hidden"/>
                </div>
                <OrderedProductDetail/>
                <button className="py-2 px-12 rounded-md bg-indigo-800 text-white mx-auto flex my-5" onClick={() => navigate(-1)}>Back</button>
            </section>
    )

}
export default OrderedProduct;