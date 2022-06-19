import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Modal = ({loginModal, loginModalHandler}) => {
    const [email, setEmail] = useState('')
    const [emailValidationError, setEmailValidationError] = useState(false)

    const [password, setPassword] = useState('')
    const [passwordValidationError, setPaswordValidationError] = useState(false)

    const navigate = useNavigate()
    const auth = getAuth();

    const createAccountHandler = (e) => {
        e.preventDefault()
        navigate('/register')
    }

    const loginHandler = (e) => {
        e.preventDefault()
        setEmailValidationError(false)
        setPaswordValidationError(false)

        console.log(email, password, 'email password')

        if(email !== '' && password !== ''){

            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)

                
                toast.success('Congratulations you ve succesfully Logged In', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });

                    loginModalHandler()
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error('unable to register please confirm authentication credentials', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            });
            

        }else{
            setEmailValidationError(true)
            setPaswordValidationError(true)
        }


        
    }
    const resetPassword = (e) => {
        e.preventDefault()
        setEmailValidationError(false)
        setPaswordValidationError(false)

        if(email === ""){
            toast.error('please input your email in the email field then click on reset password', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });

                return
        }
        
        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
        .then(() => {
            // Password reset email sent!
            // ..

            toast.success('reset link sent succesfully please check your email', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }

    return (
        <>{loginModal && <section className=" fixed top-0 left-0 h-screen w-full z-50 overflow-y-hidden" style={{backgroundColor:'rgba(0, 0, 0, 0.774)'}}>
        <form className="bg-white w-96 mx-auto mt-44 p-5 rounded-md relative">
            <h1 className="text-slate-700 my-5 text-xl font-semibold">Login</h1>
            <FontAwesomeIcon icon={faClose} className="md:mr-2 text-gray-500 font-bold pt-1 md:pt-0 lg:text-2xl cursor-pointer absolute top-0 right-0 mt-2" onClick={loginModalHandler}/>
            <div className="my-3 ">
                <label>Email Address</label><br/>
                <input className="border-2 w-full h-10 p-2 outline-none my-2 rounded-md border-slate-300" onChange={(e) => setEmail(e.target.value)}/>
                {emailValidationError && <p className="text-red-500 text-sm">Please input email field</p>}
            </div>
            <div className="my-3">
                <label>Password</label><br/>
                <input className="border-2 w-full h-10 p-2 outline-none my-2 rounded-md border-slate-300" onChange={(e) => setPassword(e.target.value)}/>
                {passwordValidationError && <p className="text-red-500 text-sm">Please input password field</p>}
                <button className="text-sm text-indigo-800 font-semibold" onClick={resetPassword}>Forget your password</button>
            </div>
            <div>
                <button className="text-white bg-indigo-800 w-full py-2 rounded-md text-lg" onClick={loginHandler}>Login</button>
            </div>
            <div className="my-3">
                <button className="border-indigo-800 border-2 text-indigo-800 w-full text-lg py-2 rounded-md" onClick={createAccountHandler}>Create Account</button>
            </div>
        </form>
    </section>}</>
    )

}
export default Modal