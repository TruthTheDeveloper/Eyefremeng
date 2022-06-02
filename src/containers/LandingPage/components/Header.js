import React from 'react';
import { useNavigate  } from "react-router-dom";

const Header = () => {
    let navigate = useNavigate();
    const shopMenButtonHandler = () => {
        navigate('/mencart')
        
    }

    const shopWomenButtonHandler = () => {
        navigate('/womencart')
    }

    return(
            <header className="header_background_image h-screen ">
                <div className=" flex items-center justify-center h-full lg:ml-96 pt-72 lg:pt-96">
                    <button className="bg-orange-400 py-4 w-44 rounded-full lg:text-2xl ml-12 hover:bg-white" onClick={shopMenButtonHandler}>shop men</button>
                    <button className="bg-orange-400 py-4 w-44 rounded-full lg:text-2xl ml-12 mr-4 hover:bg-white" onClick={shopWomenButtonHandler}>Shop women</button>
                </div>
            </header>
    )
}

export default Header;
