import WomenItem from "./components/WomenItem";
import Banner from "./components/Banner";

const WomenCart = () => {

    return(
        <section className="py-12 lg:py-16 lg:mx-24">
            <Banner/>
            {/* <div className="bg-orange-300 text-center font-semibold text-lg py-6 lg:py-3 lg:text-2xl">
                <h1>WomenCart</h1>
            </div> */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                <WomenItem/>
                <WomenItem/>
                <WomenItem/>
                <WomenItem/>
                <WomenItem/>
                <WomenItem/>
                <WomenItem/>
                <WomenItem/>
                <WomenItem/>
            </div>
            <button className="bg-orange-300 py-4 px-8 flex mt-12 mx-auto rounded-md text-lg">Load More</button>
        </section>
    )
}

export default WomenCart;