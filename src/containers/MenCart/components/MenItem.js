import { useNavigate  } from "react-router-dom";
import {useContext} from 'react';
import AuthContext from "../../../context/auth-context";

const MenItem = ({name,image, price, id}) => {
    let navigate = useNavigate();
    
    const {initialState, setInitialState} = useContext(AuthContext)
    const itemInfo = () => {
        console.log('psis')
        navigate("/prescriptionForm")

        localStorage.setItem('id', JSON.stringify(id))
        localStorage.setItem('cart', JSON.stringify('men'))

        // setInitialState({...initialState, id:id})
    }

    return(
        <div className="text-center cursor-pointer border hover:shadow-lg m-5" onClick={itemInfo}>
            <img src={image} className="w-96 h-72"/>
            <p>{name}</p>
            <p className="text-indigo-800 font-semibold py-2 text-xl">{`#${price}`}</p>
        </div>
    )
}
export default MenItem;