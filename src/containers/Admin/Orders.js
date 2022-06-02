import DashboardHoc from '../../hoc/Dashboard';
import { useNavigate  } from "react-router-dom";

const Orders = () => {

    let navigate = useNavigate();

    const ordersRouteHandler = () => {
        navigate("/dashboard/orderedProduct")
    }
    
    return(
        <DashboardHoc>
            <section className="w-full overflow-x-auto  ">
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
                <div className="grid grid-cols-7 justify-center my-6 text-center border mx-4 rounded-lg cursor-pointer w-[68rem]">
                    <div className=" font-semibold p-2">
                        Zucci Daniel
                    </div>
                    <div className=" font-semibold  p-2">
                        swiss eyeglass
                    </div>
                    <div className=" font-semibold  p-2">
                        3
                    </div>
                    <div className=" font-semibold  p-2">
                        12th may 2022
                    </div>
                    <div className=" font-semibold  p-2">
                        50000
                    </div>
                    <div className=" font-semibold p-2">
                        Online Payment
                    </div>
                    <div className=" font-semibold p-2 text-red-400">
                        Cancelled
                    </div>
                </div>
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
                <div className="grid grid-cols-7 justify-center my-6 text-center border mx-4 rounded-lg w-[68rem]">
                    <div className=" font-semibold p-2">
                        Zucci Daniel
                    </div>
                    <div className=" font-semibold  p-2">
                        swiss eyeglass
                    </div>
                    <div className=" font-semibold  p-2">
                        3
                    </div>
                    <div className=" font-semibold  p-2">
                        12th may 2022
                    </div>
                    <div className=" font-semibold  p-2">
                        50000
                    </div>
                    <div className=" font-semibold p-2">
                        Online Payment
                    </div>
                    <div className=" font-semibold p-2 text-red-400">
                        Cancelled
                    </div>
                </div>
                </section>
        </DashboardHoc>
    )
}

export default Orders