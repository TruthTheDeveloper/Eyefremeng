import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
const Dashboard = () => {

    return(
        <section className="py-24">
            <h1>Dashboard</h1>
            <div className="bg-white shadow-2xl xl:mx-32">
                <section className="">
                    <div className="w-36 md:w-40 lg:w-44 my-1 mx-4">
                        <img src="https://eyeframeng.com/wp-content/uploads/2020/11/cropped-eyeframeng-logo-1-1536x460-1.png"/>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faBagShopping}/>
                        <h1>Orders</h1>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faGift}/>
                        <h1>Products</h1>
                    </div>
                </section>
                <section>
                    
                </section>
            </div>
        </section>
    )

}
export default Dashboard;