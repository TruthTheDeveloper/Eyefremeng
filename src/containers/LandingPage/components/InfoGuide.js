import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used



const InfoGuide = () => {

    return(
        <section className="flex">
            <div>
                <FontAwesomeIcon icon={brands('twitter')} />
                <h1>Nigeria Shipping</h1>
                <p>We currently ship to the whole state in Nigeria</p>
            </div>
            <div>
                <h1>Best Offer</h1>
                <p>Best frames for the best price</p>
            </div>
            <div>
                <h1>Secure Payment</h1>
                <p>Our website is completely encripted for your confidence that every payment is 100% secure.</p>
            </div>
        </section>
    )
}
export default InfoGuide;