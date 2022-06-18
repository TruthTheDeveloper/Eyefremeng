import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../../firebase/firebase-config";
import { doc, setDoc } from "firebase/firestore"; 


const Register = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [emailValidationError, setEmailValidationError] = useState('')

    const [firstName, setFirstName] = useState('')
    const [firstNameValidationError, setFirstNameValidationError] = useState('')

    const [lastName, setLastName] = useState('')
    const [lastNameValidationError, setLastnameValidationError] = useState('')

    const [password, setPassword] = useState('')
    const [passwordValidationError, setPaswordValidationError] = useState('')

    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmPasswordValidationError, setConfirmPasswordValidationError] = useState('')

    const auth = getAuth();


    const navigateToLogin = () => {
        // navigate('/login')


        
    }

    const registerHandler = () => {

        console.log(email, password, firstName, lastName, 'lastname')

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user.uid)
           
            setDoc(doc(db, 'users', user.uid), {
                firstName:firstName,
                lastName:lastName
            })

            console.log(user)
            // ...
        })
        .then((res) => {
            console.log(res)
            console.log('successs')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }

    return(
        <section className="py-24 mx-6 xl:mx-64">
            <div className="">
                <div>
                    <h1 className="text-3xl text-slate-700 mb-8">Create An Account</h1>
                </div>
                <div className="my-4 my-2">
                    <label>Email Address</label><br/>
                    <input className="w-full border-2 p-2 outline-none my-2" onChange={(e) => setEmail(e.target.value)}/>
                    {emailValidationError && <p className="text-red-500 text-sm">Please input email field</p>}
                </div>
                <div className="md:flex my-2">
                    <div className="w-full md:mr-2">
                        <label>First Name</label><br/>
                        <input className="w-full border-2  p-2 text-slate-700 outline-none my-2" onChange={(e) => setFirstName(e.target.value)}/>
                        {firstNameValidationError && <p className="text-red-500 text-sm">Please input firstName field</p>}
                    </div>
                    <div className="w-full md:ml-2">
                        <label>Last Name</label><br/>
                        <input className="w-full border-2  p-2 text-slate-700 outline-none my-2" onChange={(e) => setLastName(e.target.value)}/>
                        {lastNameValidationError && <p className="text-red-500 text-sm">Please input lastName field</p>}
                    </div>
                </div>
                <div className="md:flex my-2">
                    <div className="w-full md:mr-2">
                        <label>Password</label><br/>
                        <input className="w-full border-2  p-2 text-slate-700 outline-none my-2" onChange={(e) => setPassword(e.target.value)}/>
                        {passwordValidationError && <p className="text-red-500 text-sm">Please input password field</p>}
                    </div>
                    <div className="w-full md:ml-2">
                        <label>Confirm Password</label><br/>
                        <input className="w-full border-2  p-2 text-slate-700 outline-none my-2" onChange={(e) => setConfirmPassword(e.target.value)}/>
                        {confirmPasswordValidationError && <p className="text-red-500 text-sm">Please input confirm Password field</p>}
                    </div>
                </div>
                <div className="my-4">
                    <button className="py-3 bg-indigo-800 text-white py-2 px-6 rounded-md" onClick={registerHandler}>Submit</button>
                    <button className="py-3 py-2 px-6 mx-3 border rounded-md border-indigo-800 text-indigo-800" onClick={navigateToLogin}>Login</button>
                </div>
            </div>
        </section>
    )

}

export default Register;