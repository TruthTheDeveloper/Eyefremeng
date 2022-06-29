import { useNavigate } from "react-router-dom";

const ReviewItem = ({productName, description,price, qty, productImage}) => {

    const navigate = useNavigate()

    const detailHandler = () => {
        navigate('/cart')
    }

    return(
        <div className="md:flex bg-white w-full  border border-2 my-6 shadow-sm rounded-md">
                <div className="text-center md:py-12  text-indigo-800">
                    <div className="w-72 mx-auto">
                        <img src={productImage} />
                        
                    </div>
                </div>
                <div className= "basis-1/2 text-center md:m-12  md:text-right py-4 text-indigo-800">
                    <h1>{productName}</h1>
                        <p>{description}</p>
                        <p>#{price}</p>
                        <div>
                            <p>Qty</p>
                            <p>{qty}</p>
                        </div>
                        <button className="text-white bg-indigo-800 py-2 px-8 my-2 rounded-md" onClick={detailHandler}>detail</button>
                </div>
            </div>
    )

}

export default ReviewItem;