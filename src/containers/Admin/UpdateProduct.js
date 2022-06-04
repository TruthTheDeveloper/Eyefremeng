import Form from '../../components/admin/Form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

const UpdateProduct = () => {

    return(
            <section className="w-full my-6 mx-6 ">
                <div className="md:mx-12 mx-5 my-8">
                    <FontAwesomeIcon icon={faBars} className="text-indigo-800 text-2xl lg:hidden"/>
                </div>
                {/* <Modal/> */}
                <button className="py-2 px-6 bg-red-500 flex ml-auto text-white rounded-md mb-6">Delete</button>
                <Form formText={'Update Product'}/>
                
            </section>
    )
}

export default UpdateProduct;