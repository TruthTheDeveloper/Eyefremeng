import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";

const Trends = () => {
  let navigate = useNavigate();

  const itemInfo = () => {
    navigate("/shopTrend");
  };

  return (
    <>
      <div className="text-center my-6" style={{ color: "#002365" }}>
        <h1 className="my-5 lg:text-5xl font-semibold text-4xl">
          Quality Assurance
        </h1>
        <p className="lg:text-2xl py-5 text-xl">
          We are committed to providing a Quality eyewear and a safe shopping
        </p>
      </div>
      <Carousel autoPlay={true} infiniteLoop={true}>
        <div className="flex md:flex-row md:mx-12 lg:mx-24">
          <div className="text-center">
            <img src="https://eyeframeng.com/wp-content/uploads/2020/12/Theo-WD9511.jpg" />
            <p>Eyeglasses Theo WD9511</p>
            <p className="text-orange-600 font-semibold py-2 text-xl">#5000</p>
          </div>
          <div className="text-center hidden md:block">
            <img src="https://eyeframeng.com/wp-content/uploads/2021/01/Mitch.jpg" />
            <p>Eyeglasses Mitch</p>
            <p className="text-orange-600 font-semibold py-2 text-xl">#15000</p>
          </div>
          <div className="text-center hidden md:block">
            <img src="https://eyeframeng.com/wp-content/uploads/2021/01/Zabel-C4.jpg" />
            <p>Eyeglasses Zabel-C4</p>
            <p className="text-orange-600 font-semibold py-2 text-xl">#10000</p>
          </div>
          <div className="text-center hidden md:block">
            <img src="https://eyeframeng.com/wp-content/uploads/2020/12/Eyeframeng-18.jpg" />
            <p>Eyeglasses Eyeframeng-18</p>
            <p className="text-orange-600 font-semibold py-2 text-xl">#20000</p>
          </div>
        </div>
        <div className="flex  md:flex-row md:mx-12 lg:mx-24">
          <div className="text-center">
            <img src="https://eyeframeng.com/wp-content/uploads/2020/12/Theo-WD9511.jpg" />
            <p>Eyeglasses Theo WD9511</p>
            <p className="text-orange-600 font-semibold py-2 text-xl">#5000</p>
          </div>
          <div className="text-center hidden md:block">
            <img src="https://eyeframeng.com/wp-content/uploads/2021/01/Mitch.jpg" />
            <p>Eyeglasses Mitch</p>
            <p className="text-orange-600 font-semibold py-2 text-xl">#15000</p>
          </div>
          <div className="text-center hidden md:block">
            <img src="https://eyeframeng.com/wp-content/uploads/2021/01/Zabel-C4.jpg" />
            <p>Eyeglasses Zabel-C4</p>
            <p className="text-orange-600 font-semibold py-2 text-xl">#10000</p>
          </div>
          <div className="text-center hidden md:block">
            <img src="https://eyeframeng.com/wp-content/uploads/2020/12/Eyeframeng-18.jpg" />
            <p>Eyeglasses Eyeframeng-18</p>
            <p className="text-orange-600 font-semibold py-2 text-xl">#20000</p>
          </div>
        </div>
        <div className="flex  md:flex-row md:mx-12 lg:mx-24">
          <div className="text-center">
            <img src="https://eyeframeng.com/wp-content/uploads/2020/12/Theo-WD9511.jpg" />
            <p>Eyeglasses Theo WD9511</p>
            <p className="text-orange-600 font-semibold py-2 text-xl">#5000</p>
          </div>
          <div className="text-center hidden md:block">
            <img src="https://eyeframeng.com/wp-content/uploads/2021/01/Mitch.jpg" />
            <p>Eyeglasses Mitch</p>
            <p className="text-orange-600 font-semibold py-2 text-xl">#15000</p>
          </div>
          <div className="text-center hidden md:block">
            <img src="https://eyeframeng.com/wp-content/uploads/2021/01/Zabel-C4.jpg" />
            <p>Eyeglasses Zabel-C4</p>
            <p className="text-orange-600 font-semibold py-2 text-xl">#10000</p>
          </div>
          <div className="text-center hidden md:block">
            <img src="https://eyeframeng.com/wp-content/uploads/2020/12/Eyeframeng-18.jpg" />
            <p>Eyeglasses Eyeframeng-18</p>
            <p className="text-orange-600 font-semibold py-2 text-xl">#20000</p>
          </div>
        </div>
      </Carousel>
      <div
        className="w-64 h-16 my-12 bg-red-500 text-white mx-auto rounded-md cursor-pointer"
        style={{ backgroundColor: "#002365" }}
        onClick={itemInfo}
      >
        <p className="text-center text-2xl pt-3">Shop Trends</p>
      </div>
    </>
  );
};

export default Trends;
