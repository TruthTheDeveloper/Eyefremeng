
const Form = ({formText}) => {

    return(

        <form className="xl:w-4/12 lg:w-5/12 md:w-6/12  mx-auto p-3 border border-slate-400 rounded-md">
            <div className=" my-4 ">
                <label>Product Name</label>
                <input className="h-8 w-full mt-1 border border-slate-400 outline-none"/>
            </div>
            <div className=" my-4">
                <label>Product Price</label>
                <input className="h-8 w-full mt-1 border border-slate-400"/>
            </div>
            <div className=" my-4">
                <label>Product Image</label>
                <input type="file" className="mt-1"/>
            </div>
            <button className=" my-6 mx-auto flex px-8 py-2 rounded-md bg-indigo-800 text-white">{formText}</button>
        </form>
    )
}

export default Form;