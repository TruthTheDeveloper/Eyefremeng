import { useNavigate  } from "react-router-dom";

const MenItem = () => {
    let navigate = useNavigate();
    
    const itemInfo = () => {
        console.log('psis')
        navigate("/prescriptionForm")
    }

    return(
        <div className="text-center cursor-pointer" onClick={itemInfo}>
            <img src="https://eyeframeng.com/wp-content/uploads/2020/12/Theo-WD9511.jpg" />
            <p>Eyeglasses Mitch</p>
            <p className="text-indigo-800 font-semibold py-2 text-xl">#15000</p>
        </div>
    )
}
export default MenItem;