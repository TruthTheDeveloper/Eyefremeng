import React from 'react';

import deliver from '../../../assets/deliver.png';
import eyeglass from '../../../assets/eye-glass.png';
import eyeTreatment from '../../../assets/eye-treatment.png';
import file from '../../../assets/file.png';
import lens from '../../../assets/hyperopia.png';

const Guide = () => {

    return(
        <section>
            <h1 className="text-center md:text-3xl text-2xl font-semibold my-12 mx-3">How to order your prescription glasses</h1>
            <div className="flex flex-col md:flex-row justify-center my-16 md:mx-6 lg:mx-32 ">
                <div className="lg:w-48 w-36 mx-auto">
                    <img src={eyeglass}/>
                    <p className="text-center">1. select your prefered glass and frame</p>
                </div>
                <div className="lg:w-48 w-36 mx-auto my-6 md:my-0">
                    <img src={file}/>
                    <p className="text-center py-4">2. Enter your prescription</p>
                </div>
                <div className="lg:w-48 w-36 mx-auto mb-6 md:my-0">
                    <img src={lens}/>
                    <p className="text-center">3. Select the lens based on the prescription</p>
                </div>
                <div className="lg:w-48 w-36 mx-auto">
                    <img src={deliver}/>
                    <p className="text-center">4. Place an order and Waiting for receive the package</p>
                </div>
            </div>
        </section>
    )
}

export default Guide;