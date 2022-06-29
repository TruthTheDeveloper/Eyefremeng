import React from 'react';

import deliver from '../../../assets/deliver.png';
import eyeglass from '../../../assets/eye-glass.png';
import eyeTreatment from '../../../assets/eye-treatment.png';
import file from '../../../assets/file.png';
import lens from '../../../assets/hyperopia.png';

const Guide = () => {

    return(
        <section>
            <h1 className="text-center  my-12 mx-3 lg:text-5xl font-semibold text-4xl" style={{color:'#002365'}}>How to order your prescription glasses</h1>
            <div className="flex flex-col md:flex-row justify-center my-16 md:mx-6 lg:mx-32 ">
                <div className="lg:w-36 w-36 mx-auto">
                    <img src="https://eyeframeng.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-05-31-at-12.15.31-AM-1.jpeg"/>
                    <p className="text-center   text-lg my-6" style={{color:'#002365'}}>1. select your prefered glass and frame</p>
                </div>
                <div className="lg:w-36 w-36 mx-auto my-6 md:my-0">
                    <img src="https://eyeframeng.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-05-31-at-12.15.33-AM.jpeg"/>
                    <p className="text-center py-4   text-lg my-6" style={{color:'#002365'}}>2. Enter your prescription</p>
                </div>
                <div className="lg:w-36 w-36 mx-auto mb-6 md:my-0">
                    <img src="https://eyeframeng.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-05-31-at-12.15.32-AM.jpeg"/>
                    <p className="text-center   text-lg my-6" style={{color:'#002365'}}>3. Select the lens based on the prescription</p>
                </div>
                <div className="lg:w-36 w-36 mx-auto">
                    <img src="https://eyeframeng.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-05-31-at-12.15.34-AM.jpeg"/>
                    <p className="text-center   text-lg my-6" style={{color:'#002365'}}>4. Place an order and Waiting for receive the package</p>
                </div>
            </div>
        </section>
    )
}

export default Guide;