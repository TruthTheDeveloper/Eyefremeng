import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faBiking } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// import DashboardHoc from '../../hoc/DashboardHoc';
import RightSideDrawer from "../../components/admin/RightSideDrawer";

import {useState} from 'react'



const Dashboard = () => {

    const [openRightSideDrawer, setOpenRightSideDrawer] = useState(false)

    const closeOpenRight = () => {
        setOpenRightSideDrawer(false)
      }

    return(
            
            <section className="w-full h-[35rem]  overflow-y-auto">
                <div className="md:mx-12 mx-5 my-8" onClick={() => setOpenRightSideDrawer(true)}>
                    <FontAwesomeIcon icon={faBars} className="text-indigo-800 text-2xl lg:hidden"/>
                </div>
                <div className=" md:grid lg:mx-0 lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 md:grid-rows-2">
                    <div className="border-2 mx-auto  xl:mx-4 w-72 my-12 p-5 shadow-lg rounded-lg cursor-pointer">
                        <h1 className="py-2 text-xl ">Orders</h1>
                        <div className="flex  my-2"><h1 className="text-lg">200</h1>
                        <FontAwesomeIcon icon={faBagShopping} className="mx-4 text-3xl text-indigo-800 font-semibold"/></div>
                    </div>
                    <div className="border-2 mx-auto  xl:mx-4 w-72 m-12 p-5 shadow-lg rounded-lg cursor-pointer">
                        <h1 className=" py-2 text-xl">Deliveries</h1>
                        <div className="flex my-2">
                            <h1 className="text-lg font-semibold">100</h1>
                            <FontAwesomeIcon icon={faBiking} className="mx-4 text-3xl text-indigo-800 font-semibold"/>
                        </div>
                    </div>
                    <div className="border-2 mx-auto  xl:mx-4 w-72 m-12 p-5 shadow-lg rounded-lg cursor-pointer">
                        <h1 className=" py-2 text-xl ">Subscribers</h1>
                        <div className="flex my-2">
                            <h1 className="text-lg font-semibold">500</h1>
                            <FontAwesomeIcon icon={faMessage} className="mx-4 text-3xl text-indigo-800 font-semibold"/>
                        </div>
                    </div>
                    <div className="border-2  w-72 mx-auto  xl:mx-4  m-12   p-5 shadow-lg rounded-lg cursor-pointer">
                        <h1 className=" py-2 text-xl ">Products</h1>
                        <div className="flex my-2">
                            <h1 className="text-lg font-semibold">3000</h1>
                            <FontAwesomeIcon icon={faGift} className="mx-4 text-3xl text-indigo-800 font-semibold"/>
                        </div>
                    </div>  
                </div>
                <RightSideDrawer open={openRightSideDrawer} close={closeOpenRight}/>
            </section>
            
    )

}
export default Dashboard;