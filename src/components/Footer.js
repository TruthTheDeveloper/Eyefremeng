import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwit } from '@fortawesome/free-regular-svg-icons';
// import { faFacebook } from '@fortawesome/free-solid-svg-icons';// <-- import styles to be used
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    return(
        <footer className="py-6" style={{backgroundColor:"#D7D7D7", color:'#002365'}}>
            <div className="flex flex-col lg:flex-row justify-center lg:mx-16 xl:mx-28 mb-12 py-6">
                <div className="basis-1/4 mx-4 lg:mx-8">
                    <h1 className="text-2xl font-semibold my-4">SHOP</h1>
                    <ul className=" font-semibold">
                        <li>MEN'S GLASSES</li>
                        <li>WOMEN'S GLASSES</li>
                        <li>SUNGLASSES</li>
                        <li>CHILDREN'S GLASSES</li>
                    </ul>
                </div>
                <div className="basis-1/4 mx-4 lg:mx-8">
                    <h2 className="text-2xl font-semibold my-4">TIPS AND SELF-HELP</h2>
                    <ul className=" font-semibold">
                        <li>WHAT'S MY FACE SHAPE?</li>
                        <li>HOW TO MEASURE YOUR PUPILLARY DISTANCE(PD)</li>
                        <li>HOW TO FIND YOUR EYEGLASEES FRAMES SIZE</li>
                    </ul>
                </div>
                <div className="basis-1/4 mx-4 lg:mx-8">
                    <h1 className="text-2xl font-semibold my-4">ABOUT</h1>
                    <ul className=" font-semibold">
                        <li>Contact Us</li>
                        <li>Return and Exchange</li>
                        <li>Privacy Policy</li>
                        <li>Terms and Condition of Use</li>
                    </ul>
                </div>
                <div className="flex lg:justify-center justify-start mx-4 basis-1/4" style={{color:"white"}}>
                    <div  className="mx-2">
                        <FontAwesomeIcon icon={faTwitter} className=" text-4xl mt-16 px-4 py-2 rounded-lg" style={{backgroundColor:"#002365"}}/>
                    </div>
                    <div  className="mx-2">
                        <FontAwesomeIcon icon={faInstagram} className=" text-4xl mt-16 px-4 py-2 rounded-lg" style={{backgroundColor:"#002365"}}/>
                    </div>
                    <div  className="mx-2">
                        <FontAwesomeIcon icon={faFacebook} className=" text-4xl mt-16 px-4 py-2 rounded-lg" style={{backgroundColor:"#002365"}}/>
                    </div>
                </div>
            </div>
            <div>
                <hr className="w-full " style={{border:"0.5px solid #002365"}}/>
                <p className="text-center font-semibold pt-6" style={{color:"#002365"}}>Copyright @2022| Eyefremeng</p>
            </div>
        </footer>
    )
}

export default Footer;