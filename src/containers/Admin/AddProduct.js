import Form from '../../components/admin/Form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { useState } from 'react';

const AddProduct = () => {

    // const [] = useState()

    return(
            <section className="w-full my-6 mx-6 h-[35rem]  overflow-y-auto">
                <div className="md:mx-12 mx-5 my-8">
                    <FontAwesomeIcon icon={faBars} className="text-indigo-800 text-2xl lg:hidden"/>
                </div>
                <Form formText={'Add Product'}/>
            </section>
    )
}

export default AddProduct;