import Subscriber from '../../components/admin/Subscriber';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Subscribers = () => {

    return (
            <section className="w-full overflow-x-auto  h-[35rem]  overflow-y-auto">
                <div className="md:mx-12 mx-5 my-8">
                    <FontAwesomeIcon icon={faBars} className="text-indigo-800 text-2xl lg:hidden"/>
                </div>
                <div className="grid grid-cols-1 justify-center my-6 text-center shadow-md border mx-auto rounded-lg w-[38rem]">
                    <div className=" font-semibold p-2">
                        Email
                    </div>
                </div>
                <Subscriber/>
                <Subscriber/>
                <Subscriber/>
                <Subscriber/>
                <Subscriber/>
            </section>
    )

}
export default Subscribers;