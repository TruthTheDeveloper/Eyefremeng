import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
const Dashboard = () => {

    return(
        <section className="py-24">
            <h1>Dashboard</h1>
            <div className="bg-white shadow-lg rounded-lg xl:mx-24 flex">
                <section className="bg-indigo-800 text-white basis-1/6">
                    <div className="flex py-6 justify-center">
                        <FontAwesomeIcon icon={faBagShopping} className="mx-4 text-2xl"/>
                        <h1>Orders</h1>
                    </div>
                    <div className="flex py-6 justify-center">
                        <FontAwesomeIcon icon={faGift} className="mx-4 text-2xl"/>
                        <h1>Products</h1>
                    </div>
                </section>
                <section className="w-full">
                    <div className=" flex justify-center">
                        <div className="border-2 mx-4 w-72">
                            <h1 className=" p-3 py-2">Total Orders</h1>
                            <div className="flex"><h1 className="p-2">200</h1>
                            <FontAwesomeIcon icon={faBagShopping} className="mx-4 text-3xl text-indigo-800"/></div>
                        </div>
                        <div className="border-2 mx-4 ">
                           <h1 className=" py-2">Total Delveries</h1>
                           <h1>100</h1>
                           <FontAwesomeIcon icon={faBagShopping} className="mx-4 text-3xl text-indigo-800"/>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )

}
export default Dashboard;