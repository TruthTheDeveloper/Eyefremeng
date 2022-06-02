
const Modal = () => {

    return(
        <div className="fixed  top-0 left-0 h-screen w-full z-40 " style={{backgroundColor:'rgba(0, 0, 0, 0.774)'}}>
            <div className="bg-white mt-44 w-72 md:w-96 mx-auto border-2  h-56 rounded-md">
                <h1 className="text-center mt-12 text-lg">Are you sure you want to delete</h1>
                <div className="flex justify-center my-12 text-white">
                    <button className="bg-gray-400 py-2 mx-auto px-8 rounded-md">Cancel</button>
                    <button className="bg-red-500 py-2 mx-auto px-8 rounded-md">Confirm</button>
                </div>
            </div>
        </div>
    )
}
export default Modal;