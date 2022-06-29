import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Item = ({id, name,image, price, relatedProductClickHandler}) => {
    let navigate = useNavigate();


    // const { pathname } = useLocation();

    // useEffect(() => {
    //   window.scrollTo(0, 0);
    // }, [pathname]);

    const itemInfo = () => {
        console.log('psis')
        
        navigate(`/prescriptionForm/${id}`)

        localStorage.setItem('id', JSON.stringify(id))
        relatedProductClickHandler()

        // setInitialState({...initialState, id:id})
    }

    return (
        <div className="text-center cursor-pointer border hover:shadow-lg m-5" onClick={itemInfo} >
            <img src={image} className="w-full "/>
            <p>{name}</p>
            <p className="text-indigo-800 font-semibold py-2 text-xl">{`#${price}`}</p>
        </div>
    )

}
export default Item;