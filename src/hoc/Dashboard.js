import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';

import { useNavigate  } from "react-router-dom";


const Dashboard = ({children}) => {
    let navigate = useNavigate();

    const dashboardNav = (e) => {
        e.preventDefault()
        navigate("/dashboard")
    }

    const orderNav = (e) => {
        e.preventDefault()
        navigate("/dashboard/orders")
    }

    const productNav = (e) => {
        e.preventDefault()
        navigate("/dashboard/product")
    }

    const subscriberNav = (e) => {
        e.preventDefault()
        navigate("/dashboard/subscriber")
    }

    return(
        <section className="py-24">
            <h1 className="text-center md:text-2xl text-xl text-indigo-800">Welcome to the Admin Panel</h1>
                <div className="bg-white shadow-lg rounded-lg xl:mx-24 flex z-50">
                <section className="bg-indigo-800 text-white basis-1/6 hidden lg:block">
                    <div className="flex py-3  text-center  cursor-pointer mx-3" onClick={dashboardNav}>
                        <div className="bg-white text-indigo-800 flex p-3 w-full">
                            <FontAwesomeIcon icon={faDashboard} className="mx-4 text-2xl"/>
                            <h1>Dashboard</h1>
                        </div>
                    </div>
                    <div className="flex py-3 text-center  cursor-pointer mx-3">
                        <div className="flex p-3 w-full hover:bg-white hover:text-indigo-800 " onClick={orderNav}>
                            <FontAwesomeIcon icon={faBagShopping} className="mx-4 text-2xl"/>
                            <h1 className="">Orders</h1>
                            <div className="bg-red-400 px-2 mx-2 text-lg rounded-full text-white">3</div>
                        </div>
                    </div>
                    <div className="flex py-3  text-center  cursor-pointer mx-3">
                        <div className="flex p-3 w-full hover:bg-white hover:text-indigo-800" onClick={productNav}>
                            <FontAwesomeIcon icon={faGift} className="mx-4 text-2xl"/>
                            <h1>Products</h1>
                        </div>
                    </div>
                    <div className="flex py-3   cursor-pointer mx-3">
                        <div className="flex p-3 w-full hover:bg-white hover:text-indigo-800" onClick={subscriberNav}>
                            <FontAwesomeIcon icon={faMessage} className="mx-4 text-2xl hover:bg-white hover:text-indigo-800"/>
                            <h1>Subscribers</h1>
                        </div>
                    </div>
                </section>
                {children}
            </div>
        </section>
    )

}
export default Dashboard;