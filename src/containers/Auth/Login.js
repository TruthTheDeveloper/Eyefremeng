import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TailSpin } from  'react-loader-spinner';
import AuthContext from '../../context/auth-context';

const Login = () => {

    const [email, setEmail] = useState('')
    const [emailValidationError, setEmailValidationError] = useState(false)

    const [password, setPassword] = useState('')
    const [passwordValidationError, setPaswordValidationError] = useState(false)
    const [spinner, setSpinner] = useState(false)

    const {initialState, setInitialState} = useContext(AuthContext)
    const navigate = useNavigate()
    
    
    const auth = getAuth();

    const navigateToDashboard = () => {

        setSpinner(true)

        email === '' ? setEmailValidationError(true) : setEmailValidationError(false)
        password === '' ? setPaswordValidationError(true) : setPaswordValidationError(false)

        console.log(email, password, 'email password')

        if(email !== '' && password !== ''){

            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                localStorage.setItem('token', JSON.stringify(user.accessToken))
                localStorage.setItem('uid', JSON.stringify(user.uid))
                setInitialState({userId:JSON.parse(localStorage.getItem('uid'))})

                setSpinner(false)

                
                toast.success('Congratulations you ve succesfully Logged In', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });

                    navigate('/')
            })
            .catch((error) => {
                setSpinner(false)
                const errorCode = error.code;
                const errorMessage = error.message;
                setSpinner(false)
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
            setSpinner(false)
        }
        

    }


    const navigateToRegister = () => {
        navigate('/register')
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


    return(
        <>
            
            <div className="py-24 mx-6 xl:mx-64">
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
                    <button className="py-3 bg-indigo-800 text-white py-2 px-6 rounded-md" onClick={navigateToRegister}>Create an account</button>
                    <button className="py-3 py-2 px-6 mx-3 border rounded-md border-indigo-800 my-3 sm:my-0 text-indigo-800" onClick={navigateToDashboard}>{spinner ? <div className="py-1"><TailSpin color="#3730A3" height={20} width={40} /></div> : 'Login'}</button>
                    <button className="text-sm text-indigo-800 font-semibold block md:inline" onClick={resetPassword}>Forget your password</button>
                </div>
            </div>
        </>
    )

}

export default Login;