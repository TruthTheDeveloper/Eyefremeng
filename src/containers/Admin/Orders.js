import BuyerDetail from '../../components/admin/BuyerDetail';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate  } from "react-router-dom";

const Orders = () => {

    let navigate = useNavigate();

    const ordersRouteHandler = () => {
        navigate("/dashboard/orderedProduct")
    }
    
    return(
       
            <section className="w-full overflow-x-auto  h-[35rem]  overflow-y-auto">
                <div className="md:mx-12 mx-5 my-8">
                    <FontAwesomeIcon icon={faBars} className="text-indigo-800 text-2xl lg:hidden"/>
                </div>
                <div className="grid grid-cols-7 justify-center my-6 text-center shadow-md border mx-4 rounded-lg w-[68rem]">
                    <div className=" font-semibold p-2">
                        Full Name
                    </div>
                    <div className=" font-semibold  p-2">
                        Product
                    </div>
                    <div className=" font-semibold  p-2">
                        Qty
                    </div>
                    <div className=" font-semibold  p-2">
                        Purchase On
                    </div>
                    <div className=" font-semibold  p-2">
                        Amount
                    </div>
                    <div className=" font-semibold p-2">
                        Payment Type
                    </div>
                    <div className=" font-semibold p-2">
                        Status
                    </div>
                </div>
                <div className="grid grid-cols-7 justify-center my-6 text-center border mx-4 rounded-lg cursor-pointer w-[68rem]" onClick={ordersRouteHandler}>
                    <div className=" font-semibold p-2">
                        Joshua Henry
                    </div>
                    <div className=" font-semibold  p-2">
                        banana eyeglass
                    </div>
                    <div className=" font-semibold  p-2">
                        1
                    </div>
                    <div className=" font-semibold  p-2">
                        5th may 2022
                    </div>
                    <div className=" font-semibold  p-2">
                        20000
                    </div>
                    <div className=" font-semibold p-2">
                        pay on Delivery
                    </div>
                    <div className=" font-semibold p-2 text-green-500">
                        Delivered
                    </div>
                </div>
                <BuyerDetail/>
                <div className="grid grid-cols-7 justify-center my-6 text-center border mx-4 rounded-lg cursor-pointer w-[68rem]">
                    <div className=" font-semibold p-2">
                        Joshua Henry
                    </div>
                    <div className=" font-semibold  p-2">
                        banana eyeglass
                    </div>
                    <div className=" font-semibold  p-2">
                        1
                    </div>
                    <div className=" font-semibold  p-2">
                        5th may 2022
                    </div>
                    <div className=" font-semibold  p-2">
                        20000
                    </div>
                    <div className=" font-semibold p-2">
                        pay on Delivery
                    </div>
                    <div className=" font-semibold p-2 text-green-500">
                        Delivered
                    </div>
                </div>
                <div className="grid grid-cols-7 justify-center my-6 text-center border mx-4 rounded-lg w-[68rem]">
                    <div className=" font-semibold p-2">
                        Joshua Henry
                    </div>
                    <div className=" font-semibold  p-2">
                        banana eyeglass
                    </div>
                    <div className=" font-semibold  p-2">
                        1
                    </div>
                    <div className=" font-semibold  p-2">
                        5th may 2022
                    </div>
                    <div className=" font-semibold  p-2">
                        20000
                    </div>
                    <div className=" font-semibold p-2">
                        pay on Delivery
                    </div>
                    <div className=" font-semibold p-2 text-green-500">
                        Delivered
                    </div>
                </div>
                <BuyerDetail/>
                </section>
    )
}

export default Orders