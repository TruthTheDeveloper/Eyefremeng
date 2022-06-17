import BuyerDetail from '../../components/admin/BuyerDetail';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate  } from "react-router-dom";
import OrderServices from '../../firebase/services/order.services';
import { useEffect, useState } from 'react';
import Pagination from '../../components/Pagination';

const Orders = () => {

    let navigate = useNavigate();

    const [allOrder, setAllOrder] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(9)

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
;
    const currentPosts = allOrder.slice(indexOfFirstPost, indexOfLastPost)

    const ordersRouteHandler = () => {
        navigate("/dashboard/orderedProduct")
    }

    useEffect(() => {
        result()
    },[])

    const result = async () => {
        const data = await OrderServices.getAllOrder()
        console.log(data.docs.map((doc) => ({...doc.data(), id:doc.id})), ': data')
        setAllOrder(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    
    return(
       
            <section className="w-full overflow-x-auto  h-[35rem]   overflow-y-auto">
                <div className="md:mx-12 mx-5 my-8">
                    <FontAwesomeIcon icon={faBars} className="text-indigo-800 text-2xl lg:hidden"/>
                </div>
                <div className="grid grid-cols-6 justify-center my-6 text-center shadow-md border mx-4 rounded-lg w-[68rem]">
                    <div className=" font-semibold p-2">
                        Full Name
                    </div>
                    <div className=" font-semibold  p-2">
                        Purchase On
                    </div>
                    <div className=" font-semibold  p-2">
                        Amount
                    </div>
                    <div className=" font-semibold  p-2">
                        phonenumber
                    </div>
                    <div className=" font-semibold p-2">
                        Payment Type
                    </div>
                    <div className=" font-semibold p-2">
                        Status
                    </div>
                </div>
                
                {currentPosts.map((item) => {
                    return(
                        <BuyerDetail
                            key={item.id}
                            id={item.id}
                            firstName={item.firstName}
                            lastName={item.lastName}
                            productName={item.productName}
                            qty={item.qty}
                            price={item.grandTotal}
                            paymentType={item.paymentMethod}
                            date={item.date}
                            phoneNumber={item.phoneNumber}
                            
                        />
                    )
                })}
                <div className="justify-center flex">
                    <Pagination  postsPerPage={postsPerPage} totalPosts={allOrder.length} paginate={paginate}/>
                </div>
                </section>
    )
}

export default Orders