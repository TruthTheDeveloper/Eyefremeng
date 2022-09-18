import MenItem from "./components/MenItem";
import Banner from "./components/Banner";

import ProductServices from "../../firebase/services/product.services";

import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";

const MenCart = () => {
  const [menProduct, setMenProduct] = useState([]);
  const [loadData, setLoadData] = useState([]);

  useEffect(() => {
    result()
  },[])

  const result = async () => {
    const data = await ProductServices.getMenCart();
    setLoadData(data);
    setMenProduct(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const loadMore = async (payload) => {
    const lastVisible = payload.docs[payload.docs.length - 1];

    const data = await ProductServices.getMenCart(lastVisible);
    setLoadData(data);

    const ans = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setMenProduct((prev) => [...prev, ...ans]);
  };

  return (
    <section className="py-12 lg:py-16 lg:mx-24">
      <Banner />
      {menProduct.length === 0 && (
        <div className="mx-auto my-24 flex justify-center">
          <TailSpin color="#3730A3" height={80} width={80} />
        </div>
      )}
      <div className="grid md:grid-cols-2 m-5 lg:grid-cols-3 gap-5">
        {menProduct.map((item, index) => {
          return (
            <MenItem
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
export default MenCart;
