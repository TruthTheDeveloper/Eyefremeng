import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate  } from "react-router-dom";
import { useState, useContext } from 'react';
import AuthContext from '../../context/auth-context';

const BilingForm = () => {
    let navigate = useNavigate();

    const {initialState, setInitialState} = useContext(AuthContext)

    const [firstName, setFirstName] = useState(initialState.firstName)
    const [firstNameValidationError, setFirstNameValidationError] = useState('')

    const [lastName, setLastName] = useState(initialState.lastName)
    const [lastNameValidationError, setLastNameValidationError] = useState('')

    const [address, setAddress] = useState(initialState.address)
    const [addressValidationError, setAddressValidationError] = useState('')

    const [city, setCity] = useState(initialState.city)
    const [cityValidationError, setCityValidationError] = useState('')

    const [state, setState] = useState(initialState.state)
    const [stateValidationError, setStateValidationError] = useState('')

    const [postalCode, setpostalCode] = useState(initialState.postalCode)
    const [postalCodeValidationError, setPostalCodeValidationError] = useState('')

    const [telephone, setTelephone] = useState(initialState.telephone)
    const [telephoneValidationError, setTelephoneValiadtionError] = useState('')

    const [email, setEmail] = useState(initialState.email)
    const [emailValidationError, setEmailValidationError] = useState('')


    const shipment = (e) => {
        e.preventDefault()

        firstName === "" ? setFirstNameValidationError('Please input first Name') : setFirstNameValidationError('')
        lastName === "" ? setLastNameValidationError('Please input last name') : setLastNameValidationError('')
        address === "" ? setAddressValidationError('Please input address') : setAddressValidationError('')
        city === "" ? setCityValidationError('Please input city') : setCityValidationError('')
        state === "" ? setStateValidationError('Please input state/province') : setStateValidationError('')
        postalCode === "" ? setPostalCodeValidationError('Please input postal Code') : setPostalCodeValidationError('')
        telephone === null ? setTelephoneValiadtionError('Please input teelphone address') : setTelephoneValiadtionError('')
        email === null ? setEmailValidationError('Please input Email') : setEmailValidationError('')


        firstName !== "" &&
        lastName !== "" &&
        address !== "" &&
        city !== "" && 
        state !== "" &&
        postalCode !== "" &&
        telephone !== null &&
        addDetailsToState()

    }


    const addDetailsToState = () => {
        setInitialState({...initialState, address, firstName, lastName, telephone, city, state, postalCode, email})
        console.log('navigate')
        navigate("/checkoutForm/shipmentMethod")
    }


        
        return(
            <>
                <div className="flex my-3">
                    <p className="p-1 px-2 border-2">1</p>
                    <p className="px-2 py-1 text-lg font-semibold">Billing Information</p>
                </div>
                <div className="border bg-slate-50 my-12 ">
                    <div className="md:flex md:my-4">
                        <div className="px-4 my-4 md:my-0 md:w-full">
                            <label>First Name</label><br/>
                            <input className="w-full my-2 h-10 p-2 outline-none border-2 border-slate-300 rounded-sm" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                            {firstNameValidationError && <p className="text-red-500 text-sm">{firstNameValidationError}</p>}
                        </div>
                        <div className="md:w-full px-4">
                            <label>Last Name</label><br/>
                            <input value={lastName} className="w-full my-2 h-10 p-2 outline-none border-2 border-slate-300 rounded-sm" onChange={(e) => setLastName(e.target.value)}/>
                            {lastNameValidationError && <p className="text-red-500 text-sm">{lastNameValidationError}</p>}
                        </div>
                    </div>
                    <div className="px-4 ">
                        <label>Address</label><br/>
                        <input value={address} className="w-full my-2 h-10 p-2 outline-none border-2 border-slate-300 rounded-sm" onChange={(e) => setAddress(e.target.value)}/>
                        {addressValidationError && <p className="text-red-500 text-sm">{addressValidationError}</p>}
                    </div>
                    <div className="px-4 ">
                        <label>Email</label><br/>
                        <input value={email} className="w-full my-2 h-10 p-2 outline-none border-2 border-slate-300 rounded-sm" onChange={(e) => setEmail(e.target.value)}/>
                        {emailValidationError && <p className="text-red-500 text-sm">{emailValidationError}</p>}
                    </div>
                    <div className="md:flex">
                        <div className="px-4 w-full">
                            <label>City</label><br/>
                            <input value={city} className="w-full my-2 h-10 p-2 outline-none border-2 border-slate-300 rounded-sm" onChange={(e) => setCity(e.target.value)}/>
                            {cityValidationError && <p className="text-red-500 text-sm">{cityValidationError}</p>}
                        </div>
                        <div className="px-4 w-full">
                            <label>State/Province</label><br/>
                            <input value={state} className="w-full my-2 h-10 p-2 outline-none border-2 border-slate-300 rounded-sm" onChange={(e) => setState(e.target.value)}/>
                            {stateValidationError && <p className="text-red-500 text-sm">{stateValidationError}</p>}
                        </div>
                        <div className="px-4 w-full">
                            <label>Zip/Postal code</label><br/>
                            <input value={postalCode} className="w-full my-2 h-10 p-2 outline-none border-2 border-slate-300 rounded-sm" onChange={(e) => setpostalCode(e.target.value)}/>
                            {postalCodeValidationError && <p className="text-red-500 text-sm">{postalCodeValidationError}</p>}
                        </div>
                    </div>
                    <div className="px-4 py-8">
                        <label>Telephone</label><br/>
                        <input value={telephone} className="w-full my-2 h-10 p-2 outline-none border-2 border-slate-300 rounded-sm" type="number" onChange={(e) => setTelephone(e.target.value)}/>
                        {telephoneValidationError && <p className="text-red-500 text-sm">{telephoneValidationError}</p>}
                    </div>
                </div>
                <div>
                    <div className="flex flex-col w-44">
                    <button className="py-2 my-3 bg-indigo-800 text-white px-6 rounded-md" onClick={shipment}>
                        Continue
                        <FontAwesomeIcon icon={faArrowRight} className="px-2"/>
                    </button>
                    <button className="py-2 my-3  border border-2 px-6 rounded-md" onClick={() => navigate(-1)}>
                    <FontAwesomeIcon icon={faArrowLeft} className="px-2"/>
                        back
                    </button>
                    </div>
                    <div className="flex my-3">
                        <p className="p-1 px-2 border-2">2</p>
                        <p className="px-2 py-1 text-lg font-semibold">Shipping Method</p>
                    </div>
                    <div className="flex my-3">
                        <p className="p-1 px-2 border-2">3</p>
                        <p className="px-2 py-1 text-lg font-semibold">Order Review</p>
                    </div>
                    <div className="flex my-3">
                        <p className="p-1 px-2 border-2">4</p>
                        <p className="px-2 py-1 text-lg font-semibold">Payment Information</p>
                    </div>
                </div>
            </>
        )

}

export default BilingForm;