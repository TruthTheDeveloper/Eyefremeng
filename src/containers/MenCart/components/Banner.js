import man from "../../../assets/man.png";
const Banner = () => {
  return (
    <section className="cart_banne_man h-[30rem] flex flex-col md:flex-row items-center">
      <div className="basis-1/2 lg:text-4xl text-2xl mx-3 font-semibold text-black">
        <h1 className="lg:ml-24 text-center mt-12 text-white">
          Pick A Frame and fill out the prescription to add a lens
        </h1>
      </div>
      <div className="mt-24 lg:mt-24 md:mt-44">
        <img src={man} />
      </div>
    </section>
  );
};

export default Banner;
