import React from 'react';
import cart from '../assets/carts.png'

const Navbar = () => {
        return(
            <nav className="flex my-6">
            <div className="w-48 my-1 mx-4">
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
                <li>
                    <img src={cart} className="w-10 mx-4 cursor-pointer"/>
                </li>
            </ul>
        </nav>
        )
}
export default Navbar;