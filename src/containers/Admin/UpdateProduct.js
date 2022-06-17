import Form from '../../components/admin/Form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import ProductServices from '../../firebase/services/product.services';
import { useNavigate } from 'react-router-dom';


const UpdateProduct = () => {

    let navigate = useNavigate()

    const [productDetail, setProductDetail] = useState({})

    useEffect(() => {

        getProductDetail()

    },[])



    const getProductDetail = async () => {
        const data = await ProductServices.getProduct(JSON.parse(localStorage.getItem('id')))
        setProductDetail(data.data())
    }

    const deleteHandler = (e) => {
        e.preventDefault()

        ProductServices.deleteProduct(JSON.parse(localStorage.getItem('id')))

        navigate('/dashboard/product')
        
    }

    return(
            <section className="w-full my-6 mx-6 h-[35rem]  overflow-y-auto">
                <div className="md:mx-12 mx-5 my-8">
                    <FontAwesomeIcon icon={faBars} className="text-indigo-800 text-2xl lg:hidden"/>
                </div>
                {/* <Modal/> */}
                <button className="py-2 px-6 bg-red-500 flex ml-auto text-white rounded-md mb-6 mr-8" onClick={deleteHandler}>Delete</button>
                <Form formText={'Update Product'} product={productDetail} price={productDetail.productPrice}/>
                
            </section>
    )
}

export default UpdateProduct;