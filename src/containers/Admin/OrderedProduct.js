import DashboardHoc from '../../hoc/Dashboard';
import OrderedProductDetail from '../../components/admin/OrderedProductDetail';
import { useNavigate  } from "react-router-dom";
const OrderedProduct = () => {
    const navigate = useNavigate();
    return(
        <DashboardHoc>
            <section className="">
                <OrderedProductDetail/>
                <button className="py-2 px-12 rounded-md bg-indigo-800 text-white mx-auto flex my-5" onClick={() => navigate(-1)}>Back</button>
            </section>
        </DashboardHoc>
    )

}
export default OrderedProduct;