import DashboardHoc from '../../hoc/Dashboard';
const OrderedProduct = () => {

    return(
        <DashboardHoc>
            <section className="">
                <div className=" m-10">
                    <div className="md:grid grid-cols-2">
                        <div className="text-center py-4 text-indigo-800">
                            <img src="https://eyeframeng.com/wp-content/uploads/2020/12/Theo-WD9511.jpg" />
                            <h1>Rectangle TR90 Glasses Frames</h1>
                            <p># 8061-Gray</p>
                        </div>
                        <div>
                            <div className="py-4 border border-2">
                                <p className="px-4">-Color:Gray</p>
                            </div>
                            <div className="py-4 border border-2">
                                <p className="px-4">-Single Vision</p>
                            </div>
                            <div className="py-4 border border-2">
                                <p className="px-4">-Usage:Distance</p>
                            </div>
                            <div className="py-4 border border-2">
                                <p className="px-4">-156 index Lenses</p>
                            </div>
                        </div>
                    </div>
                    <div className=" border border-2 my-4">
                        <div className="grid grid-cols-5">
                            <div className="border p-2 font-semibold"></div>
                            <div className="border p-2 font-semibold">SPH</div>
                            <div className="border p-2 font-semibold">CYL</div>
                            <div className="border p-2 font-semibold">Axis</div>
                            <div className="border p-2 font-semibold">PD</div>
                        </div>
                        <div className="grid grid-cols-5">
                            <div className="border p-2">R</div>
                            <div className="border p-2">-2.50</div>
                            <div className="border p-2">-3.50</div>
                            <div className="border p-2">12</div>
                            <div className="border p-2">25</div>
                        </div>
                        <div className="grid grid-cols-5">
                            <div className="border p-2">L</div>
                            <div className="border p-2">-1.75</div>
                            <div className="border p-2">-2.25</div>
                            <div className="border p-2">10</div>
                            <div className="border p-2">27</div>
                        </div>
                    </div> 
                    <div className="">
                        <div className="grid grid-cols-3 font-semibold py-6 border text-center">
                            <div>
                                <p>Q'TY</p>
                            </div>
                            <div>
                                <p>Unit Price</p>
                            </div>
                            <div>
                                <p>Amount</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 border my-3 py-6 text-center">
                            <div className="">
                                <p className="border-2 p-2 mx-4 text-center">2</p>
                            </div>
                            <div>
                                <p className="text-indigo-800 font-semibold text-center my-2">#5,000</p>
                                </div>
                                <div>
                                <p className="text-orange-500 font-semibold text-center my-2">#15,000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="py-2 px-12 rounded-md bg-indigo-800 text-white mx-auto flex my-5">Back</button>
            </section>
        </DashboardHoc>
    )

}
export default OrderedProduct;