import { useNavigate } from "react-router-dom";
const Modal = () => {

    const navigate = useNavigate()

    const createAccountHandler = (e) => {
        e.preventDefault()
        navigate('/register')
    }

    return (
        <section className=" fixed top-0 left-0 h-screen w-full z-50 overflow-y-hidden" style={{backgroundColor:'rgba(0, 0, 0, 0.774)'}}>
                <form className="bg-white w-96 mx-auto mt-44 p-5 rounded-md">
                    <h1 className="text-slate-700 my-5 text-xl font-semibold">Login</h1>
                    <div className="my-3 ">
                        <label>Email Address</label><br/>
                        <input className="border-2 w-full h-10 p-2 outline-none my-2 rounded-md border-slate-300"/>
                    </div>
                    <div className="my-3">
                        <label>Password</label><br/>
                        <input className="border-2 w-full h-10 p-2 outline-none my-2 rounded-md border-slate-300"/>
                        <a href="#" className="text-sm text-indigo-800 font-semibold">Forget your password</a>
                    </div>
                    <div>
                        <button className="text-white bg-indigo-800 w-full py-2 rounded-md text-lg">Login</button>
                    </div>
                    <div className="my-3">
                        <button className="border-indigo-800 border-2 text-indigo-800 w-full text-lg py-2 rounded-md" onClick={createAccountHandler}>Create Account</button>
                    </div>
                </form>
            </section>
    )

}
export default Modal