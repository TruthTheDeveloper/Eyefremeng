import React from 'react';

import deliver from '../../../assets/deliver.png';
import eyeglass from '../../../assets/eye-glass.png';
import eyeTreatment from '../../../assets/eye-treatment.png';
import file from '../../../assets/file.png';
import lens from '../../../assets/hyperopia.png';

const Guide = () => {

    return(
        <section>
            <h1 className="text-center text-3xl font-semibold my-12">How to order your prescription glasses</h1>
            <div className="flex justify-center my-16 mx-32">
                <div className="w-48 mx-auto">
                    <img src={eyeglass}/>
                    <p className="text-center">1. select your prefered glass and frame</p>
                </div>
                <div className="w-48 mx-auto">
                    <img src={file}/>
                    <p className="text-center py-4">2. Enter your prescription</p>
                </div>
                <div className="w-48 mx-auto">
                    <img src={lens}/>
                    <p className="text-center">3. Select the lens based on the prescription</p>
                </div>
                <div className="w-48 mx-auto">
                    <img src={deliver}/>
                    <p className="text-center">4. Place an order and Waiting for receive the package</p>
                </div>
            </div>
        </section>
    )
}

export default Guide;