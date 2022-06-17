import MiniCartDetailAdd from "../../../containers/Cart/components/MiniCartDetailAdd";
import MiniCartDetailPd from "../../../containers/Cart/components/MiniCartDetailPd";

const OrderedItem = ({
    id,
    add,
    file,
    leftOD,
    lenseType,
    pD,
    pdType,
    prescriptionType,
    productDescription,
    productName,
    productPrice,
    qty,
    remark,
    rightOD,
    subTotal,
    twoSinglePd,
    unitPrice,
    usageOption,
    pDD
    }) => {


        let displayPrescriptionDetail = null

    if(add){
        displayPrescriptionDetail = <MiniCartDetailAdd 
        pdType={pdType} 
        leftSphere={leftOD.sphere}
        leftAxis={leftOD.axis}
        leftCylinder={leftOD.cylinder}
        leftAdd={leftOD.add}
        rightAdd={rightOD.add}
        
        rightSphere={rightOD.sphere}
        rightCylinder={rightOD.cylinder}
        rightAxis={rightOD.axis}
        pD={pD}
        pDD={pDD}
        

    />

    }else if(add === false){
        displayPrescriptionDetail = <MiniCartDetailPd
        pdType={pdType} 
        leftSphere={leftOD.sphere}
        leftAxis={leftOD.axis}
        leftCylinder={leftOD.cylinder}
        
        
        rightSphere={rightOD.sphere}
        rightCylinder={rightOD.cylinder}
        rightAxis={rightOD.axis}
        
        pD={pD}
        pDD={pDD}
        />

    }else{
        displayPrescriptionDetail = null
    }
    return(
        <>
            <div className=" m-10">
                    <div className="md:grid grid-cols-2">
                        <div className="text-center py-4 text-indigo-800">
                            <img src="https://eyeframeng.com/wp-content/uploads/2020/12/Theo-WD9511.jpg" />
                            <h1>{productName}</h1>
                            <p>{productDescription}</p>
                        </div>
                        <div>
                            <div className="py-4 border border-2">
                                <p className="px-4">-{lenseType || 'none'}</p>
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
                                <p className="border-2 p-2 mx-4 text-center">{qty}</p>
                            </div>
                            <div>
                                <p className="text-indigo-800 font-semibold text-center my-2">#{productPrice}</p>
                                </div>
                                <div>
                                <p className="text-orange-500 font-semibold text-center my-2">#{subTotal}</p>
                            </div>
                        </div>
                    </div>
                </div>
        </>

    )

}

export default OrderedItem;