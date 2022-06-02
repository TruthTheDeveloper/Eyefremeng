const FrameSize = () => {

    return(
        <section className="py-24 font-semibold text-center">
            <div className="bg-indigo-800 text-white text-xl py-12 text-center">
                <h1>HOW TO FIND YOUR EYEGLASSES FRAMES SIZE</h1>
            </div>
            <div className="my-4 text-2xl md:mx-12">
                <h1>At Eyeframeng we offer multiple sizes so that you can find the right frame for your face</h1>
            </div>
            <div className="my-8  md:mx-12">
                <h1 className="text-orange-500 text-2xl font-semibold">SMALL</h1>
                <p className="text-xl">For those who have a slim face</p>
            </div>
            <div className="my-8  md:mx-12">
                <h1 className="text-orange-500 text-2xl font-semibold">MEDIUM</h1>
                <p className="text-xl">Most of our customers are comfortable in this range. If you are unsure about your size, choose this.</p>
            </div>
            <div className="my-8  md:mx-12">
                <h1 className="text-orange-500 text-2xl font-semibold">LARGE</h1>
                <p className="text-xl">For those who have a wide forehead and narrow chin.</p>
            </div>
            <div className="text-orange-500 text-3xl font-bold w-full  md:mx-12">
                <h1>Find your current frame size</h1>
                <div className="flex justify-center my-12 w-96 mx-auto ">
                    <img src="https://eyeframeng.com/wp-content/uploads/2021/02/frame-measurements-1.png"/>
                </div>
            </div>
            <p className="text-xl md:mx-12 lg:mx-24 xl:mx-44">"To find out your frame size is by using a pair of your current glasses. The frame sizes are usually printed on the inside of the temple. If the glasses were previously fitted by an optician or the glasses sit well on your face then you can use the measurements on the temple to purchase your new pair of glasses"</p>
        </section>
    )

}
export default FrameSize;