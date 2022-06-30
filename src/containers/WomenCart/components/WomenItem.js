import { useNavigate  } from "react-router-dom";
import { useState } from "react";

const WomenItem = ({name,frontView,leftView,rightView, price, id}) => {
    let navigate = useNavigate();

    const [view, setView] = useState(frontView)

    
    const itemInfo = () => {
        navigate(`/prescriptionForm/${id}`)
        localStorage.setItem('id', JSON.stringify(id))
        localStorage.setItem('cart', JSON.stringify('Women'))
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
        <div className="text-center  cursor-pointer border hover:shadow-lg m-5 w-full " onClick={itemInfo}>
            <img src={view} className="  w-full  "/>
            <p>{name}</p>
            <div className="flex justify-center">
                <div className="h-12 w-16  rounded-full  m-2 cursor-pointer" onClick={(e) => setLeftView(e)} >
                    <img className="w-full" src={leftView
                    } /> 
                </div>
                <div className="h-12 w-16   rounded-full  m-2 cursor-pointer" onClick={(e) => setFrontView(e)}>
                    <img className="w-full" src={frontView
                    } />
                </div>
                <div className="h-12 w-16  rounded-full m-2 cursor-pointer" onClick={(e) => setRightView(e)}>
                    <img className="w-full" src={rightView
                    } />
                </div>
            </div>
            <p className="text-indigo-800 font-semibold py-2 text-xl">{`₦${price}`}</p>
        </div>
        
    )
}
export default WomenItem;