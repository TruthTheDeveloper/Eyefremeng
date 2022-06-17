import { useState, useEffect } from "react";
import OrderServices from "../../firebase/services/order.services";
import OrderedItem from "./components/OrderedItem";

const OrderedProductDetail = () => {

    const [orderDetail, setOrderDetail] = useState([])
    const [detail, setDetail] = useState({})

    const [lagos, setLagos] = useState()

    useEffect(() => {
        getOrderDetail()

    },[])


    const getOrderDetail = async () => {
        const data = await OrderServices.getOrder(JSON.parse(localStorage.getItem('id')))
        console.log(data.data())
        setDetail(data.data())
        setOrderDetail(data.data().items)
    }
    

    return(
        <>{orderDetail.map((item) => {
            return(
                <OrderedItem
                    key={item.id}
                    id={item.id}
                    add={item.Add}
                    file={item.file}
                    leftOD={item.leftOD}
                    lenseType={item.lenseType}
                    pD={item.pD}
                    pdType={item.pdType}
                    prescriptionType={item.prescriptionType}
                    productDescription={item.productDescription}
                    productName={item.productName}
                    productPrice={item.productPrice}
                    qty={item.qty}
                    remark={item.remark}
                    rightOD={item.rightOD}
                    subTotal={item.subTotal}
                    twoSinglePd={item.twoSinglePd}
                    unitPrice={item.unitPrice}
                    usageOption={item.usageOption}
                    pDD={item.pDD}
                />
            )
        })}

        <div className="m-10">
            <h1 className="text-indigo-500 text-center my-4 text-2xl">Payment Detail</h1>
            <ul>
                <li className="border-2 border p-2 w-full ">firstname:{detail.firstName}</li>
                <li className="border-2 border p-2 w-full ">lastname:{detail.lastName}</li>
                <li className="border-2 border p-2 w-full ">purchase on:{detail.date}</li>
                <li className="border-2 border p-2 w-full ">amount:{detail.grandTotal}</li>
                <li className="border-2 border p-2 w-full ">phone Number:{detail.phoneNumber}</li>
                <li className="border-2 border p-2 w-full ">payment Type:{detail.paymentMethod}</li>
                <li className="border-2 border p-2 w-full ">Address:{detail.address}</li>
                <li className="border-2 border p-2 w-full ">state:{detail.state}</li>
                <li className="border-2 border p-2 w-full ">telephone:{detail.telephone}</li>
                <li className="border-2 border p-2 w-full ">withinLagos:{detail.withinLagos}</li>
                <li className="border-2 border p-2 w-full ">status:{detail.status}</li>
                <li className="border-2 border p-2 w-full ">grandTotal:{detail.grandTotal}</li>
                <li className="border-2 border p-2 w-full ">subTotal:{detail.subTotal}</li>
            </ul>
        </div>
        
        </>
    )

}

export default OrderedProductDetail