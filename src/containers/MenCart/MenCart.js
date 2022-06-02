import MenItem from "./components/MenItem";
import Banner from "./components/Banner";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
const MenCart = () => {
    return(
        <section className="py-12 lg:py-16 lg:mx-24">
            <Banner/>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                <MenItem/>
                <MenItem/>
                <MenItem/>
                <MenItem/>
                <MenItem/>
                <MenItem/>
                <MenItem/>
                <MenItem/>
                <MenItem/>
            </div>
            <button className="bg-orange-300 py-4 px-8 flex mt-12 mx-auto rounded-md text-lg">Load More</button>
        </section>
    )
}
export default MenCart;