import Form from "./components/Form";
import LensForm from "./components/LensForm";
import Item from "../../components/admin/Item";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
//Icons


const PrescriptionForm = () => {

    return(
        <section className=" pt-16">
            <div className=" lg:grid grid-cols-2">
                <div className="">
                    <div className="flex justify-center">
                        <img src="https://eyeframeng.com/wp-content/uploads/2020/12/Theo-WD9511.jpg" />
                        
                    </div>
                    <div className="text-xl font-semibold ml-5 md:text-center md:text-2xl mt-3 text-indigo-800">
                    
                        <div>
                            <h1>Rectangle TR90 Glasses Frames</h1>
                            <p># 8061-Gray</p>
                            <p className="text-indigo-800  text-2xl font-semibold my-6">#15,000.00</p>
                        </div>
                    </div>
                    <Form/>
                    <LensForm/>
                </div>
                <div className="mx-3 md:mx-16 lg:mt-24">
                    <h1 className="font-semibold text-xl lg:text-2xl py-3">Description</h1>
                    <p className="text-sm lg:text-base text-slate-500">Fashion Rectangle TR90 Full Rim Men and Women Large Size Prescription Glasses Frames For Myopia Reading Progressive Lenses</p>
                    <ul className="my-6">
                        <li className="my-1">Size: 54-18-145 <span className="text-orange-500">size chart</span></li>
                        <li className="my-1">Front Material: Plastic</li>
                        <li className="my-1">Temple Material: Plastic</li>
                        <li className="my-1">Rim Type: Full Rim</li>
                        <li className="my-1">Shape: Rectangle</li>
                    </ul>
                    <div>
                        <p>lens width:51mm </p>
                        <img src="https://eyeframeng.com/wp-content/uploads/2020/11/icon-lens-width.svg"/>
                    </div>
                    <div className="my-2">
                        <p>lens height: 40mm</p>
                        <img src="https://eyeframeng.com/wp-content/uploads/2020/11/icon-lens-height-1.svg"/>
                    </div>
                    <div className="my-2">
                        <p>bridge Width: 20mm</p>
                        <img src="https://eyeframeng.com/wp-content/uploads/2020/11/icon-bridge-width.svg" />
                    </div>
                    <div className="my-2">
                        <p>temple Width: 145mm</p>
                        <img src="https://eyeframeng.com/wp-content/uploads/2020/11/icon-temple-length.svg" />
                    </div>
                </div>
            </div>
            <div >
                <h1 className="ml-6 mt-8 md:ml-0 md:text-center text-2xl font-semibold">Related Product</h1>
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3">
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                </div>
            </div>
        </section>
    )
}

export default PrescriptionForm;

            