import { useNavigate  } from "react-router-dom";

const Item = ({name,image, price, id}) => {
    let navigate = useNavigate();

    const itemInfo = () => {
        console.log('psis')
        window.location.reload()

        localStorage.setItem('id', JSON.stringify(id))

        // setInitialState({...initialState, id:id})
    }

    return (
        <div className="text-center cursor-pointer border hover:shadow-lg m-5" onClick={itemInfo} >
            <img src={image} className="w-96 h-72"/>
            <p>{name}</p>
            <p className="text-indigo-800 font-semibold py-2 text-xl">{`#${price}`}</p>
        </div>
    )

}
export default Item;