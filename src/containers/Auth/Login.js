import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [email, setEmail] = useState('')
    const [emailValidationError, setEmailValidationError] = useState('')

    const [password, setPassword] = useState('')
    const [passwordValidationError, setPaswordValidationError] = useState('')


    const navigate = useNavigate()
    
    
    const auth = getAuth();

    const navigateToDashboard = () => {

        console.log(email, password, 'email password')
        
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)

            navigate('/')
            toast.success('🦄 Congratulations you succesfully place an order!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error('🦄 unable to place order please contact support or try again', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        });

        

    }


    return(
        <div className="py-24 mx-6 xl:mx-64">
            <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    />
                    {/* Same as */}
                    <ToastContainer />
            <h1 className="text-3xl text-slate-700 mb-8">Login</h1>
            <h1>if you have an account with us, please log in</h1>
            <div className="my-4 my-2">
                <label>Email Address</label>
                <input className="w-full border-2 p-2 outline-none my-2" onChange={(e) => setEmail(e.target.value)}/>
                {emailValidationError && <p className="text-red-500 text-sm">Please input email field</p>}
            </div>
            <div>
                <label>Password</label>
                <input className="w-full border-2 p-2 outline-none my-2" onChange={(e) => setPassword(e.target.value)}/>
                {passwordValidationError && <p className="text-red-500 text-sm">Please input password field</p>}
            </div>
            <div className="my-4 ">
                <button className="py-3 bg-indigo-800 text-white py-2 px-6 rounded-md">Create an account</button>
                <button className="py-3 py-2 px-6 mx-3 border rounded-md border-indigo-800 my-3 sm:my-0 text-indigo-800" onClick={navigateToDashboard}>Login</button>
                <a href="#" className="text-sm text-indigo-800 font-semibold block md:inline">Forget your password</a>
            </div>
        </div>
    )

}

export default Login;