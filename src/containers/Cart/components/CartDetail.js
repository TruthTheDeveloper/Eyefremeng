import {useContext, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import MiniCartDetailPd from './MiniCartDetailPd';
import MiniCartDetailAdd from './MiniCartDetailAdd';
import AuthContext from "../../../context/auth-context";


const CartDetail = ({
    id,
    lenseType,
    productName,
    productPrice,
    productDescription,
    prescriptionType,
    leftSphere, 
    leftAxis, 
    leftCylinder,
    leftAdd,
    rightSphere,
    rightAxis,
    rightCylinder,
    rightAdd,
    subTotal,
    unitPrice,
    usageOption,
    pdType,
    pD,
    qty,
    Add,
    remark,
}) => {

    const navigate = useNavigate();

    const {initialState,setInitialState} = useContext(AuthContext)


    console.log(Add, 'add')

    useEffect(() => {
        console.log(initialState.items)
    },[initialState])

    let displayPrescriptionDetail = null

    if(Add){
        displayPrescriptionDetail = <MiniCartDetailAdd 
        pdType={pdType} 
        leftSphere={leftSphere}
        leftAxis={leftAxis}
        leftCylinder={leftCylinder}
        
        rightSphere={rightSphere}
        rightCylinder={rightCylinder}
        rightAxis={rightAxis}
        pD={pD}
        

    />

    }else if(Add === false){
        displayPrescriptionDetail = <MiniCartDetailPd
        pdType={pdType} 
        leftSphere={leftSphere}
        leftAxis={leftAxis}
        leftCylinder={leftCylinder}
        leftAdd={leftAdd}
        
        rightSphere={rightSphere}
        rightCylinder={rightCylinder}
        rightAxis={rightAxis}
        rightAdd={rightAdd}
        pD={pD}
        />

    }else{
        displayPrescriptionDetail = null
    }

    const deleteItem = () => {
      const remove =   initialState.items.filter(el => el.id !== id)
      console.log(remove, 'remove')
      setInitialState({...initialState, items:remove})
    }

    const editItem = () => {
        navigate(`/prescriptionForm/${id}`)
    }
    
    return(
            <>
            <div className=" ">
                <div className="md:grid grid-cols-2">
                    <div className="text-center py-4 text-indigo-800">
                        <img src="https://eyeframeng.com/wp-content/uploads/2020/12/Theo-WD9511.jpg" />
                        <h1>{productName}</h1>
                        <p>{productDescription}</p>
                    </div>
                    <div>
                        <div className="py-4 border border-2">
                            <p className="px-4">-Color:None</p>
                        </div>
                        <div className="py-4 border border-2">
                            <p className="px-4">-lenseType:{lenseType}</p>
                        </div>
                        <div className="py-4 border border-2">
                            <p className="px-4">-{prescriptionType}</p>
                        </div>
                        <div className="py-4 border border-2">
                            <p className="px-4">-Usage:{usageOption}</p>
                        </div>
                    </div>
                </div>
                {displayPrescriptionDetail}
                <div className="">
                    <div className="grid grid-cols-3 font-semibold py-6 border text-center">
                        <div>
                            <p>Q'TY</p>
                        </div>
                        <div>
                            <p>Unit Price</p>
                        </div>
                        <div>
                            <p>Amount</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 border my-3 py-6 text-center">
                        <div className="">
                            <p className="border-2 p-2 mx-4 text-center ">{qty}</p>
                        </div>
                        <div>
                        <p className="text-indigo-800 font-semibold text-center my-2">#{unitPrice}</p>
                        </div>
                        <div>
                        <p className="text-orange-500 font-semibold text-center my-2">#{productPrice}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end border py-4 pr-4  lg:mb-24">
                <p className="text-sm my-3">{remark}</p>
                <button className="flex border border-sky-500 py-1 px-4 mx-1 rounded-md" onClick={editItem}>
                    <FontAwesomeIcon icon={faPencil} className="text-sky-500 my-1 mr-2 text-lg"/>
                    <p>Edit</p>
                </button>
                <button className="border border-red-500 py-1 px-4 flex mx-1 rounded-md" onClick={deleteItem}>
                    <FontAwesomeIcon icon={faTrash} className="text-red-500 mr-2 my-1  text-lg"/>
                    <p>Delete</p>
                </button>
            </div>
            </>
    )

}
export default CartDetail;