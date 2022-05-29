
import CartDetail from './CartDetail'
const CartItem = () => {

    return(
        <div className="mx-4 md:mx-12 lg:grid grid-cols-3">
            <div className="col-span-2 xl:mx-12">
                <CartDetail/>
                <CartDetail/>
                <CartDetail/>
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
                    <p>$99.68</p>
                </div>
                <div className="flex justify-between border py-4 px-2">
                    <p>GrandTotal</p>
                    <p>$99.68</p>
                </div>
                <button className="border py-3 bg-slate-800 w-full text-orange-500">
                    <p>Proceed to Checkout</p>
                </button>
                <button className="border py-3 my-2 px-3 border-slate-500 rounded-sm flex ml-auto">Continue to shopping</button>
             </div>
        </div>
    )
}

export default CartItem;