const Item = ({name,image, price}) => {

    return (
        <div className="text-center cursor-pointer border hover:shadow-lg m-5" >
            <img src={image} />
            <p>{name}</p>
            <p className="text-indigo-800 font-semibold py-2 text-xl">{`#${price}`}</p>
        </div>
    )

}
export default Item;