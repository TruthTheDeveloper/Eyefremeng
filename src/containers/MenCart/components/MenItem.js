import { useState } from "react";
import { useNavigate  } from "react-router-dom";

const MenItem = ({name,frontView,leftView,rightView, price, id}) => {
    let navigate = useNavigate();

    const [view, setView] = useState(frontView)
    
    const itemInfo = () => {
        
    
            console.log('psis')
        navigate(`/prescriptionForm/${id}`)

        localStorage.setItem('id', JSON.stringify(id))
        localStorage.setItem('cart', JSON.stringify('men'))

        
        
        

        // setInitialState({...initialState, id:id})
    }

    const setRightView = (e) => {
        e.stopPropagation();
        setView(rightView)
        

    }

    const setLeftView = (e) => {
        e.stopPropagation();
        setView(leftView)

    }

    const setFrontView = (e) => {
        e.stopPropagation();
        setView(frontView)

    }

    return(
        <div className="text-center cursor-pointer border hover:shadow-lg m-5 w-full" onClick={itemInfo}>
            <img src={view} className="w-full"/>
            <p>{name}</p>
            <div className="flex justify-center">
                <div className="h-6 w-6 border-2 border-black rounded-full bg-indigo-800 m-2 cursor-pointer" onClick={(e) => setRightView(e)} ></div>
                <div className="h-6 w-6 border-2 border-black rounded-full bg-red-800 m-2 cursor-pointer" onClick={(e) => setLeftView(e)}></div>
                <div className="h-6 w-6 border-2 border-black rounded-full bg-green-800 m-2 cursor-pointer" onClick={(e) => setFrontView(e)}></div>
            </div>
            <p className="text-indigo-800 font-semibold py-2 text-xl">{`#${price}`}</p>
        </div>
    )
}
export default MenItem;