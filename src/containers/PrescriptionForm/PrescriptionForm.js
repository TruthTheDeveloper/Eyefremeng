import Form from "./Form";
import Item from "./components/Item";

import { useEffect, useState } from "react";
import ProductServices from "../../firebase/services/product.services";
import { useParams } from "react-router-dom";
import GlassReview from "./components/GlassReview";

import { TailSpin } from "react-loader-spinner";
import ReactImageMagnify from "@blacklab/react-image-magnify";

//images
import LensWidth from "../../assets/lens-width.jpeg";
import LensHeight from "../../assets/lens-height.jpeg";
import BridgeWidth from "../../assets/bridge-width.jpeg";
import TempleWidth from "../../assets/temple-length.jpeg";

const PrescriptionForm = () => {
  const [productDetail, setProductDetail] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);

  const [relatedProductClick, setRelatedProductClick] = useState(false);
  const [view, setView] = useState();

  const formId = useParams();

  useEffect(() => {
    getProductDetail();
    result();
  }, [formId]);

  useEffect(() => {
    setView(productDetail.frontView);
  }, [productDetail]);

  const result = async () => {
    if (JSON.parse(localStorage.getItem("cart")) === "men") {
      const data = await ProductServices.getMenCart();
      setRelatedProduct(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    } else {
      const data = await ProductServices.getWomenCart();
      setRelatedProduct(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    }
  };

  const getProductDetail = async () => {
    const data = await ProductServices.getProduct(
      JSON.parse(localStorage.getItem("id"))
    );
    setProductDetail(data.data());
  };

  const relatedProductClickHandler = () => {
    setRelatedProductClick((prev) => !prev);
  };

  const setRightView = () => {
    setView(productDetail.rightView);
  };

  const setLeftView = () => {
    setView(productDetail.leftView);
  };

  const setFrontView = () => {
    setView(productDetail.frontView);
  };

  return (
    // <img src={view} className=" h-72" alt="glass"/>

    <section className=" pt-16 overflow-x-hidden">
      <div className=" lg:grid grid-cols-2">
        <div className="">
          <div className="flex justify-center">
            {productDetail.frontView ? (
              <ReactImageMagnify
                imageProps={{
                  alt: "image",
                  src: view,
                  //   height: "36vw",
                  //   width: "36vw",
                }}
                magnifiedImageProps={{
                  height: 500,
                  src: view,
                  width: 1000,
                }}
                magnifyContainerProps={{
                  height: "100%",
                  width: "120%",
                }}
                onActivationChanged={function noRefCheck() {}}
                onDetectedEnvironmentChanged={function noRefCheck() {}}
                onPositionChanged={function noRefCheck() {}}
                portalProps={{
                  horizontalOffset: 10,
                  id: "portal-test-id",
                }}
              />
            ) : (
              <div className="py-12">
                <TailSpin color="#3730A3" height={80} width={80} />
              </div>
            )}
          </div>
          <div className="flex justify-center">
            <div
              className="h-12 w-16  rounded-full m-2 cursor-pointer"
              onClick={() => setLeftView()}
            >
              <img
                className="w-full"
                src={productDetail.leftView}
                alt="left view"
              />
            </div>
            <div
              className="h-12 w-16  rounded-full m-2 cursor-pointer"
              onClick={() => setFrontView()}
            >
              <img
                className="w-full"
                src={productDetail.frontView}
                alt="front view"
              />
            </div>
            <div
              className="h-12 w-16  rounded-full m-2 cursor-pointer"
              onClick={() => setRightView()}
            >
              <img
                className="w-full"
                src={productDetail.rightView}
                alt="right view"
              />
            </div>
          </div>
          {/* <div className="flex justify-center">
                    <div className="h-12 w-16   rounded-full m-2 cursor-pointer" onClick={() => setLeftView()}>
                        </div>
                        <div className="h-12 w-16  rounded-full m-2 cursor-pointer" onClick={() => setFrontView()} >
                        </div>
                        <div className="h-12 w-16  rounded-full m-2 cursor-pointer" onClick={() => setRightView()}>
                        </div>
                    </div> */}

          <div className="text-xl font-semibold ml-5 md:text-center md:text-2xl mt-3 text-indigo-800">
            <div>{/* <h1>{productDetail.description}</h1> */}</div>
          </div>
          <div className="hidden lg:block">
            <Form
              productName={productDetail?.productName}
              productDescription={productDetail?.description}
              productPrice={productDetail?.productPrice}
              productImage={productDetail?.frontView}
            />
            <GlassReview relatedProductClick={relatedProductClick} />
            {/* <LensForm/> */}
          </div>
        </div>
        <div className="w-full mx-3 md:mx-32  lg:pt-16">
          <h1 className="text-indigo-800 text-3xl ">
            {productDetail?.productName}
          </h1>
          <p className="text-indigo-800  text-2xl font-semibold my-6">
            ₦ {productDetail?.productPrice}
          </p>
          <h1 className="font-semibold text-xl lg:text-2xl py-3">
            Description
          </h1>
          <p className="text-sm lg:text-base text-slate-800  w-full">
            {productDetail?.description}
          </p>
          <ul className="my-6">
            <li className="my-1">Frame Size: {productDetail?.framesize}</li>
          </ul>
          <div className="flex ">
            <img src={LensWidth} alt="lens width" className="w-[150px]" />
            <p className="ml-4 capitalize">
              <span className="text-blue-400 font-bold">
                {productDetail?.lensWidth}
              </span>{" "}
            </p>
          </div>
          <div className="flex my-2">
            <img src={LensHeight} className="w-[150px]" alt="lens Height" />
            <p className="ml-4 capitalize">
              <span className="text-blue-400 font-bold">
                {productDetail?.lensHeight}
              </span>
            </p>
          </div>
          <div className="flex my-2">
            <img src={BridgeWidth} alt="Bridge width" className="w-[150px]" />
            <p className="ml-4 capitalize">
              <span className="text-blue-400 font-bold">
                {productDetail?.bridgeWidth}
              </span>
            </p>
          </div>
          <div className="flex my-2">
            <img src={TempleWidth} alt="Temple Width" className="w-[150px]" />
            <p className="ml-4 capitalize">
              <span className="text-blue-400 font-bold">
                {productDetail?.templeWidth}
              </span>
            </p>
          </div>
          <div className="block w-[90%] lg:hidden">
            <Form
              productName={productDetail?.productName}
              productDescription={productDetail?.description}
              productPrice={productDetail?.productPrice}
              productImage={productDetail?.frontView}
            />
            <GlassReview relatedProductClick={relatedProductClick} />
            {/* <LensForm/> */}
          </div>
        </div>
      </div>
      <div>
        <h1 className="ml-6 mt-8 md:ml-0 md:text-center text-2xl font-semibold">
          Related Product
        </h1>
        {relatedProduct?.length === 0 && (
          <div className="mx-auto my-24 flex justify-center">
            <TailSpin color="#3730A3" height={80} width={80} />
          </div>
        )}
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3">
          {relatedProduct?.map((item, index) => {
            return (
              <Item
                key={item?.id}
                id={item?.id}
                name={item?.productName}
                frontView={item?.frontView}
                leftView={item?.leftView}
                rightView={item?.rightView}
                price={item?.productPrice}
                relatedProductClickHandler={relatedProductClickHandler}
              />
            );
          })}
        </div>
      </div>
      {/* <Modal/> */}
      {/* <ReviewModal openReview={openReview} closeReviewHandler={closeReviewHandler}/> */}
    </section>
  );
};

export default PrescriptionForm;
