
const Subscriber = ({email}) => {

    return(
        <div className="grid grid-cols-1 justify-center my-6 text-center shadow-md border mx-auto rounded-lg w-[38rem]">
            <div className=" font-semibold p-2">
                {email}
            </div>
        </div>
    )
}

export default Subscriber;