import React from 'react';

const Navbar = () => {
        <nav className="flex">
            <div className="w-48 my-1">
                <img src="https://eyeframeng.com/wp-content/uploads/2020/11/cropped-eyeframeng-logo-1-1536x460-1.png"/>
            </div>
            <ul className="flex ml-auto my-5 mr-10 text-lg font-semibold" style={{color:"#002265"}}>
                <li className="mx-4">
                    <a href="#">Home</a>
                </li>
                <li className="mx-4">
                    <a href="#">Men's Glasses</a>
                </li>
                <li className="mx-4">
                    <a href="#">Women's Glasses</a>
                </li>
                <li className="mx-4">
                    <a href="#">Children Glasses</a>
                </li>
            </ul>
        </nav>
}
export default Navbar;