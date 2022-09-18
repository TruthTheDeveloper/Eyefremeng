import WomenItem from "./components/WomenItem";
import Banner from "./components/Banner";
import { useState, useEffect } from "react";
import ProductServices from "../../firebase/services/product.services";
import { TailSpin } from "react-loader-spinner";

const WomenCart = () => {
  const [womenProduct, setWomenProduct] = useState([]);
  const [loadData, setLoadData] = useState([]);

  useEffect(() => {
    result()
  },[])

  const result = async () => {
    const data = await ProductServices.getWomenCart();
    setLoadData(data);
    setWomenProduct(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const loadMore = async (payload) => {
    const lastVisible = payload.docs[payload.docs.length - 1];

    const data = await ProductServices.getMenCart(lastVisible);
    setLoadData(data);
    const ans = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setWomenProduct((prev) => [...prev, ...ans]);
  };

  return (
    <section className="py-12 overflow-x-hidden  lg:py-16 lg:mx-24 mx-0 px-0">
      <Banner />
      {womenProduct.length === 0 && (
        <div className="mx-auto my-24 flex justify-center">
          <TailSpin color="#3730A3" height={80} width={80} />
        </div>
      )}
      {/* <div className="bg-orange-300 text-center font-semibold text-lg py-6 lg:py-3 lg:text-2xl">
                <h1>WomenCart</h1>
            </div> */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 m-5">
        {womenProduct.map((item, index) => {
          return (
            <WomenItem
              key={item.id}
              id={item.id}
              name={item.productName}
              frontView={item.frontView}
              leftView={item.leftView}
              rightView={item.rightView}
              price={item.productPrice}
            />
          );
        })}
      </div>
      {loadData.length >= 9 && (
        <button
          className="bg-orange-300 py-4 px-8 flex mt-12 mx-auto rounded-md text-lg"
          onClick={() => loadMore(loadData)}
        >
          Load More
        </button>
      )}
    </section>
  );
};

export default WomenCart;
