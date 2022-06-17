import Subscriber from '../../components/admin/Subscriber';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SubscriberServices from '../../firebase/services/subscriber.services';
import Pagination from '../../components/Pagination';
import { useEffect, useState } from 'react';

const Subscribers = () => {

    const [subscribers, setSubscribers] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(9)

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
;
    const currentPosts = subscribers.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    useEffect(() => {
        result()
    },[])

    const result = async () => {
        const data = await SubscriberServices.getAllSubscribers()

        console.log(data.docs.map((doc) => ({...doc.data(), id:doc.id})), 'sub')

        setSubscribers(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
        
    }

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
                {currentPosts.map((item) => {
                    return(
                        <Subscriber
                            key={item.id}
                            email={item.email}
                        />
                    )
                })}

                    <div className="flex justify-center">
                        <Pagination  postsPerPage={postsPerPage} totalPosts={subscribers.length} paginate={paginate}/>
                    </div>
            </section>

            
    )

}
export default Subscribers;