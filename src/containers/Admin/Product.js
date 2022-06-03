import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import DashboardHoc from '../../hoc/Dashboard';
import Item from '../../components/admin/Item';

import { useNavigate  } from "react-router-dom";

const Product = () => {

    let navigate = useNavigate();

    const addProductHandler = () => {
        console.log('add')
        navigate('/dashboard/addProduct')
    }

    const updateProductHandler = () => {
        navigate("/dashboard/updateproduct")
    }


    return(
        <DashboardHoc>
            <section className="md:pr-5">
                <button className="bg-indigo-800 py-2 rounded-md px-6 text-white  m-5 mx-auto md:mx-0  md:ml-auto text-center flex" onClick={addProductHandler}>Add Product <FontAwesomeIcon icon={faAdd} className="p-1 mx-1"/></button>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 ">
                    <div className="text-center cursor-pointer border hover:shadow-lg m-5" onClick={updateProductHandler}>
                        <img src="https://eyeframeng.com/wp-content/uploads/2020/12/Theo-WD9511.jpg" />
                        <p>Eyeglasses Mitch</p>
                        <p className="text-indigo-800 font-semibold py-2 text-xl">#15000</p>
                    </div>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                </div>
                <div className="flex justify-center">
                        <div className="flex py-8 justify-center  text-white">
                            {/* <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/> */}
                            <button  className="py-2 px-4 rounded-md mx-2 bg-indigo-800 text-white" >1</button> 
                        </div>
                        <div className="flex py-8 justify-center  text-white">
                            {/* <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/> */}
                            <button  className="py-2 px-4 rounded-md mx-2 bg-indigo-800 text-white" >2</button> 
                        </div>
                        <div className="flex py-8 justify-center  text-white">
                            {/* <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/> */}
                            <button  className="py-2 px-4 rounded-md mx-2 bg-indigo-800 text-white" >3</button> 
                        </div>
                        <div className="flex py-8 justify-center  text-white">
                            {/* <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/> */}
                            <button  className="py-2 px-4 rounded-md mx-2 bg-indigo-800 text-white" >4</button> 
                        </div>
                    </div>
            </section>
        </DashboardHoc>
    )

}
export default Product;