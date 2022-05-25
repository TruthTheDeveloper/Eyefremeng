import React from 'react';

const ContactUs = () => {

    return(
        <section className="lg:w-7/12 w-11/12 md:w-9/12  mx-auto text-center my-24" style={{color:'#002365'}}>
            <div className="my-8">
                <h1 className="lg:text-6xl text-4xl md:text-5xl py-5 font-semibold">Stay in touch</h1>
                <p className="text-xl">Keep up to date with our exclusive offer</p>
            </div>
            <div className="lg:w-8/12 md:6/12 w-full mx-auto my-3">
                <input placeholder="Email Address" className="w-full h-12 outline-none pl-2 border-2 border-indigo-800"/>
            </div>
            <button className="my-4 text-white w-8/12 py-3 font-semibold rounded-md text-xl" style={{backgroundColor:'#002365'}}>Join Us</button>
        </section>
    )
}

export default ContactUs;