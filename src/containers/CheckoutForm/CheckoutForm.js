import BilingForm from "./components/BilingForm";
import ShipmentMethodForm from "./components/ShipmentMethodForm";
import SuccessTransaction from "./components/SuccessTransaction";

const CheckoutForm = () => {

    return(
        <section className="py-24 mx-4 ">
            <div className="md:w-8/12 lg:mx-auto xl:w-6/12 ">
                <div className=" text-2xl ">
                    <h1>CheckOut</h1>
                </div>
                {/* <BilingForm/> */}
                <ShipmentMethodForm/>
            </div>
             
                {/* <SuccessTransaction/> */}
               
        </section>
    )

}
export default CheckoutForm;