import TrendCart from "./components/TrendCart";
import { useNavigate  } from "react-router-dom";

const ShopTrend = () => {
    let navigate = useNavigate();

    const itemInfo = () => {
        console.log('psis')
        navigate("/prescriptionForm")
    }

    return(
        <section className="py-12 lg:py-16 lg:mx-24">
            {/* <Banner/> */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                <TrendCart/>
                <TrendCart/>
                <TrendCart/>
                <TrendCart/>
                <TrendCart/>
                <TrendCart/>
                <TrendCart/>
                <TrendCart/>
                <TrendCart/>
            </div>
            <button className="bg-orange-300 py-4 px-8 flex mt-12 mx-auto rounded-md text-lg">Load More</button>
        </section>
    )

}

export default ShopTrend;