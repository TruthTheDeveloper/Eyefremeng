import React from 'react';

const Header = () => {
    

    return(
            <header className="header_background_image h-screen ">
                <div className=" flex items-center justify-center h-full lg:ml-96 pt-72 lg:pt-80">
                    <button className="bg-orange-400 py-4 w-44 rounded-full lg:text-2xl ml-12 hover:bg-white">shop men</button>
                    <button className="bg-orange-400 py-4 w-44 rounded-full lg:text-2xl ml-12 hover:bg-white">Shop women</button>
                </div>
            </header>
    )
}

export default Header;
