const EmptyCart = () => {

    return(
        <div className="lg:mx-32 my-16">
            <h1 className="text-3xl py-4">Shopping Cart is Empty</h1>
            <p className="text-xl py-2">you have no items in your shop cart</p>
            <p>Click <a className="text-indigo-500">here</a> to continue</p>
        </div>
    )
}

export default EmptyCart;