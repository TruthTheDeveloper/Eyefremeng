import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import Item from "../../components/admin/Item";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";
import Pagination from "../../components/Pagination";
import ProductServices from "../../firebase/services/product.services";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";

const Product = () => {
  let navigate = useNavigate();

  const [allproduct, setAllProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allproduct.slice(indexOfFirstPost, indexOfLastPost);

  // useEffect(() => {
  //     if(allproduct.length >= 1){

  //     }
  // },[allproduct, indexOfFirstPost, indexOfLastPost])

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    result();
  }, []);

  useEffect(() => {}, [currentPosts]);

  const result = async () => {
    const data = await ProductServices.getAllProduct();
    setAllProduct(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const addProductHandler = () => {
    navigate("/dashboard/addProduct");
  };

  return (
    <section className="md:pr-5 h-[35rem]  overflow-y-auto w-full">
      <div className="md:mx-12 mx-5 my-8">
        <FontAwesomeIcon
          icon={faBars}
          className="text-indigo-800 text-2xl lg:hidden"
        />
      </div>
      <div className=" flex justify-center md:justify-end">
        <button
          className="bg-indigo-800 py-2 rounded-md px-6  text-white "
          onClick={addProductHandler}
        >
          Add Product <FontAwesomeIcon icon={faAdd} className="p-1 mx-1" />
        </button>
      </div>
      {allproduct.length === 0 && (
        <div className="  mx-auto my-24 flex justify-center w-full ">
          <TailSpin color="#3730A3" height={80} width={80} />
        </div>
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 ">
        {currentPosts.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.productName}
              image={item.frontView}
              price={item.productPrice}
            />
          );
        })}
      </div>
      <div className="flex justify-center">
        {allproduct.length !== 0 && (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={allproduct.length}
            paginate={paginate}
          />
        )}
      </div>
    </section>
  );
};
export default Product;
