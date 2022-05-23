import React from 'react';

const Header = () => {

    return(
        <header className="header_background_image lg:h-screen">
            <div className=" flex items-center justify-center h-full ml-96 pt-96">
                <button className="bg-orange-400 py-4 w-44 rounded-full text-2xl ml-12 hover:bg-white">shop men</button>
                <button className="bg-orange-400 py-4 w-44 rounded-full text-2xl ml-12 hover:bg-white">Shop women</button>
            </div>
        </header>
    )
}

export default Header;