import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { useNavigate, Outlet  } from "react-router-dom";

import { useState, useEffect } from "react";


const DashboardHoc = ({children}) => {

    const [active, setActive] = useState({
        dashboard:true,
        orders:false,
        products:false,
        subscribers:false,
        users:false

    })


    let navigate = useNavigate();

    const dashboardNav = (e) => {
        e.preventDefault()
        navigate("/dashboard")

    

        setActive({...active, dashboard:true, orders:false, products:false, subscribers:false, users:false})
    }

    const orderNav = (e) => {
        e.preventDefault()
        navigate("/dashboard/orders")

        const updatedState = {
            ...active,
            dashboard:false,
             orders:true,
              products:false, 
              subscribers:false,
              users:false
        }
        setActive(updatedState)
    }

    const productNav = (e) => {
        e.preventDefault()
        navigate("/dashboard/product")

        setActive({...active, dashboard:false, orders:false, products:true, subscribers:false, users:false})
    }

    const subscriberNav = (e) => {
        e.preventDefault()
        navigate("/dashboard/subscriber")

        setActive({...active, dashboard:false, orders:false, products:false, subscribers:true, users:false})
    }


    // const usersNav = (e) => {
    //     e.preventDefault()
    //     navigate("/dashboard/user")
    //     setActive({...active, dashboard:false, orders:false, products:false, subscribers:false, users:true})
    // }

    return(
        <section className="py-24 ">
            <h1 className="text-center md:text-2xl text-xl text-indigo-800">Welcome to the Admin Panel</h1>
                <div className="bg-white shadow-lg rounded-lg xl:mx-24 flex z-50">
                <section className="bg-indigo-800 text-white basis-1/6 hidden lg:block">
                    <div className="flex py-3  text-center  cursor-pointer mx-3" onClick={dashboardNav}>
                        <div className = {active.dashboard ? 'bg-white text-indigo-800 flex p-3 w-full ' : ' hover:text-indigo-800 text-white flex hover:bg-white p-3 w-full'}>
                            <FontAwesomeIcon icon={faDashboard} className="mx-4 text-2xl"/>
                            <h1>Dashboard</h1>
                        </div>
                    </div>
                    <div className="flex py-3 text-center  cursor-pointer mx-3">
                        <div className={active.orders ? 'flex p-3 w-full bg-white text-indigo-800' : 'flex p-3 w-full hover:bg-white hover:text-indigo-800' } onClick={orderNav}>
                            <FontAwesomeIcon icon={faBagShopping} className="mx-4 text-2xl"/>
                            <h1 className="">Orders</h1>
                            {/* <div className="bg-red-400 px-2 mx-2 text-lg rounded-full text-white">3</div> */}
                        </div>
                    </div>
                    <div className="flex py-3  text-center  cursor-pointer mx-3">
                        <div className={active.products? 'flex p-3 w-full bg-white text-indigo-800' : 'flex p-3 w-full hover:bg-white hover:text-indigo-800' } onClick={productNav}>
                            <FontAwesomeIcon icon={faGift} className="mx-4 text-2xl"/>
                            <h1>Products</h1>
                        </div>
                    </div>
                    <div className="flex py-3   cursor-pointer mx-3">
                        <div className={active.subscribers ? 'flex p-3 w-full bg-white text-indigo-800' : 'flex p-3 w-full hover:bg-white hover:text-indigo-800' } onClick={subscriberNav}>
                            <FontAwesomeIcon icon={faMessage} className="mx-4 text-2xl hover:bg-white hover:text-indigo-800"/>
                            <h1>Subscribers</h1>
                        </div>
                    </div>
                    {/* <div className="flex py-3   cursor-pointer mx-3">
                        <div className={active.users ? 'flex p-3 w-full bg-white text-indigo-800' : 'flex p-3 w-full hover:bg-white hover:text-indigo-800' } onClick={usersNav}>
                            <FontAwesomeIcon icon={faUser} className="mx-4 text-2xl hover:bg-white hover:text-indigo-800"/>
                            <h1>Users</h1>
                        </div>
                    </div> */}
                </section>
                <Outlet/>
            </div>
        </section>
    )

}
export default DashboardHoc;