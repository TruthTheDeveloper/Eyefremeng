import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faBiking } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// import DashboardHoc from '../../hoc/DashboardHoc';
import RightSideDrawer from "../../components/admin/RightSideDrawer";

import ProductServices from "../../firebase/services/product.services";
import OrderServices from "../../firebase/services/order.services";
import SubscribersDataService from "../../firebase/services/subscriber.services";
import UserDataService from "../../firebase/services/auth.services";

import {useState, useEffect} from 'react'


const Dashboard = () => {

    const [openRightSideDrawer, setOpenRightSideDrawer] = useState(false) 
    const [product, setProduct] = useState([])
    const [order, setOrder] = useState([])
    const [subscriber, setSubscriber] = useState([])
    const [user, setUser] = useState([])

    useEffect(() => {
        
        allData()
        
    },[])

    const allData = async () => {
        const orderData = await OrderServices.getAllOrder()
        setOrder(orderData.docs.map((doc) => ({...doc.data(), id:doc.id})))

        const productData = await ProductServices.getAllProduct()
        setProduct(productData.docs.map((doc) => ({...doc.data(), id:doc.id})))

        const subData = await SubscribersDataService.getAllSubscribers()
        setSubscriber(subData.docs.map((doc) => ({...doc.data(), id:doc.id})))

        const userData = await UserDataService.getAlluser()
        setUser(userData.docs.map((doc) => ({...doc.data(), id:doc.id})))
    }

    

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
                        <div className="flex  my-2"><h1 className="text-lg">{order.length}</h1>
                        <FontAwesomeIcon icon={faBagShopping} className="mx-4 text-3xl text-indigo-800 font-semibold"/></div>
                    </div>
                    <div className="border-2 mx-auto  xl:mx-4 w-72 m-12 p-5 shadow-lg rounded-lg cursor-pointer">
                        <h1 className=" py-2 text-xl">Users</h1>
                        <div className="flex my-2">
                            <h1 className="text-lg font-semibold">{user.length}</h1>
                            <FontAwesomeIcon icon={faBiking} className="mx-4 text-3xl text-indigo-800 font-semibold"/>
                        </div>
                    </div>
                    <div className="border-2 mx-auto  xl:mx-4 w-72 m-12 p-5 shadow-lg rounded-lg cursor-pointer">
                        <h1 className=" py-2 text-xl ">Subscribers</h1>
                        <div className="flex my-2">
                            <h1 className="text-lg font-semibold">{subscriber.length}</h1>
                            <FontAwesomeIcon icon={faMessage} className="mx-4 text-3xl text-indigo-800 font-semibold"/>
                        </div>
                    </div>
                    <div className="border-2  w-72 mx-auto  xl:mx-4  m-12   p-5 shadow-lg rounded-lg cursor-pointer">
                        <h1 className=" py-2 text-xl ">Products</h1>
                        <div className="flex my-2">
                            <h1 className="text-lg font-semibold">{product.length}</h1>
                            <FontAwesomeIcon icon={faGift} className="mx-4 text-3xl text-indigo-800 font-semibold"/>
                        </div>
                    </div>  
                </div>
                <RightSideDrawer open={openRightSideDrawer} close={closeOpenRight}/>
            </section>
            
    )

}
export default Dashboard;