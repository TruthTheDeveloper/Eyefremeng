import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import Item from '../../components/admin/Item';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { useNavigate  } from "react-router-dom";
import Pagination from "../../components/Pagination";
import ProductServices from "../../firebase/services/product.services";
import { useEffect, useState } from "react";


const Product = () => {

    let navigate = useNavigate();

    const [allproduct, setAllProduct] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(9)

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
;
    const currentPosts = allproduct.slice(indexOfFirstPost, indexOfLastPost)

    // useEffect(() => {
    //     if(allproduct.length >= 1){
            
    //     }
    // },[allproduct, indexOfFirstPost, indexOfLastPost])

    

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    useEffect(() => {
        result()
    },[])


    useEffect(() => {
        
        console.log(currentPosts, 'current')
    },[currentPosts])

    const result = async () => {
        const data = await ProductServices.getAllProduct()
        console.log(data.docs.map((doc) => ({...doc.data(), id:doc.id})), ': data')
        setAllProduct(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    }

    const addProductHandler = () => {
        console.log('add')
        navigate('/dashboard/addProduct')
    }

    const updateProductHandler = () => {
        navigate("/dashboard/updateproduct")
    }



    return(
            <section className="md:pr-5 h-[35rem]  overflow-y-auto">
                <div className="md:mx-12 mx-5 my-8">
                    <FontAwesomeIcon icon={faBars} className="text-indigo-800 text-2xl lg:hidden"/>
                </div>
                <div className=" flex justify-center md:justify-end">
                    <button className="bg-indigo-800 py-2 rounded-md px-6  text-white " onClick={addProductHandler}>Add Product <FontAwesomeIcon icon={faAdd} className="p-1 mx-1"/></button>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 ">
                    {currentPosts.map((item) => {
                        return(
                            <Item
                                key={item.id}
                                id={item.id}
                                name={item.productName}
                                image={item.image}
                                price={item.productPrice}
                            />
                        )
                    })}
                </div>
                <div className="flex justify-center">
                        <Pagination  postsPerPage={postsPerPage} totalPosts={allproduct.length} paginate={paginate}/>
                    </div>
            </section>
    )

}
export default Product;