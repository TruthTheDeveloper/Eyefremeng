import girl from '../../../assets/girl.png';
const Banner = () => {

    return(
        <section className="cart_banner h-[30rem] flex flex-col md:flex-row items-center">
            <div className="basis-1/2 lg:text-4xl text-2xl md:text-3xl mx-3 font-semibold ">
                <h1 className=" lg:ml-24 text-center mt-12 md:mt-5 lg:mt-0 text-slate-800 text-white">Pick A Frame and fill out the prescription to add a lens</h1>
            </div>
            <div className="mt-24 lg:mt-24 md:mt-44">
                <img src={girl}/>
            </div>
        </section>
    )
}

export default Banner;