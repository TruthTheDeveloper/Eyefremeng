import {useContext} from 'react';
import CartDetail from './CartDetail';
import AuthContext from './../../../context/auth-context';
import {useNavigate} from "react-router-dom";
import { formatToCurrency
} from '../../../utilities/priceFormatter';
const CartItem = () => {
    const {initialState, } = useContext(AuthContext)

    const navigate = useNavigate()

    const continueShoppingHandler = () => {
        navigate('/')
    }

    const navigateToCheckout = () => {
        navigate('/checkoutForm/bilingForm')
    }


    return(
        <div className="mx-4 md:mx-12 lg:grid grid-cols-3">
            <div className="col-span-2 xl:mx-12">
                {initialState.items.map((item, index) => {
                    return(
                        <CartDetail 
                            key={index}
                            id={item.id}
                            productImage={item.productImage}
                            productName={item.productName}
                            productPrice={item.productPrice}
                            productDescription={item.productDescription}
                            prescriptionType={item.prescriptionType}
                            leftSphere={item?.leftOD?.sphere}
                            leftAxis={item?.leftOD?.axis}
                            leftCylinder={item?.leftOD?.cylinder}
                            leftAdd={item?.leftOD?.add}
                            rightSphere={item?.rightOD?.sphere}
                            rightAxis={item?.rightOD?.axis}
                            rightCylinder={item?.rightOD?.cylinder}
                            rightAdd={item?.rightOD?.add}
                            subTotal={item.subTotal}
                            unitPrice={item.unitPrice}
                            usageOption={item.usageOption}
                            pdType={item.pdType}
                            pD={item.pD}
                            pDD={item.pDD}
                            lenseType={item.lenseType}
                            qty={item.qty}
                            Add={item.Add}
                            remark={item.remark}
                        />
                    )
                })}
                
                {/* <CartDetail/>
                <CartDetail/> */}
            </div>
             <div className="my-12 lg:h-[28rem] lg:my-0 border p-3 xl:mx-12">
                <div className="">
                    <input className="w-full h-10 p-2 border-black border placeholder:text-slate-600 rounded-sm" placeholder="Have a Coupon Code?"/>
                </div>
                <button className="py-1 border border-slate-400 my-4 px-5 ml-auto flex rounded-sm">
                    Apply Coupon
                </button>
                <p className="border py-3 text-right font-semibold text-lg pr-2">Total</p>
                <div className="flex justify-between border py-4 px-2">
                    <p>Subtotal</p>
                    <p>₦{formatToCurrency(initialState.subTotal)}</p>
                </div>
                <div className="flex justify-between border py-4 px-2">
                    <p>GrandTotal</p>
                    <p>₦{formatToCurrency(initialState.grandTotal)}</p>
                </div>
                <button className="border py-3 bg-slate-800 w-full text-orange-500" onClick={navigateToCheckout}>
                    <p>Proceed to Checkout</p>
                </button>
                <button className="border py-3 my-2 px-3 border-slate-500 rounded-sm flex ml-auto" onClick={continueShoppingHandler}>Continue to shopping</button>
             </div>
        </div>
    )
}

export default CartItem;