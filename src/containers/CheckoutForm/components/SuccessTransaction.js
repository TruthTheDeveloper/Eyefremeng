import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const SuccessTransaction = () => {

    return (
        <section className="my-12 md:w-8/12 lg:w-6/12 mx-auto">
            <div class=" border-2 border-indigo-800 rounded-sm mx-auto text-center p-5">
                <h1 className="font-semibold my-4 text-2xl">Transaction was successfull</h1>
                <FontAwesomeIcon icon={faCircleCheck} className="text-6xl my-6 text-green-500"/>
                {/* <i className="fa-solid fa-circle-check text-green-500 text-6xl my-6"></i> */}
                <p className="my-4 font-semibold my-4">Thank you for shopping with us</p>
                <p className="my-3">Your receive an email with details of item purchase</p>
            </div>

            <button className="py-2 my-3 border-2 bg-indigo-800 mt-12 text-white px-6 rounded-md flex mx-auto">
                continue shopping
                <FontAwesomeIcon icon={faArrowRight} className="px-2 pt-2"/>
            </button>
        </section>
    )
}
export default SuccessTransaction;