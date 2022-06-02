import DashboardHoc from '../../hoc/Dashboard';
const Subscribers = () => {

    return (
        <DashboardHoc>
            <section className="w-full overflow-x-auto  ">
                <div className="grid grid-cols-1 justify-center my-6 text-center shadow-md border mx-auto rounded-lg w-[38rem]">
                    <div className=" font-semibold p-2">
                        Email
                    </div>
                </div>
                <div className="grid grid-cols-1 justify-center my-6 text-center shadow-md border mx-auto rounded-lg w-[38rem]">
                    <div className=" font-semibold p-2">
                        johnSmith@gmail.com
                    </div>
                </div>
                <div className="grid grid-cols-1 justify-center my-6 text-center shadow-md border mx-auto rounded-lg w-[38rem]">
                    <div className=" font-semibold p-2">
                        henrytruth@gmail.com
                    </div>
                </div>
                <div className="grid grid-cols-1 justify-center my-6 text-center shadow-md border mx-auto rounded-lg w-[38rem]">
                    <div className=" font-semibold p-2">
                        philip@gmail.com
                    </div>
                </div>
                <div className="grid grid-cols-1 justify-center my-6 text-center shadow-md border mx-auto rounded-lg w-[38rem]">
                    <div className=" font-semibold p-2">
                        xero@gmail.com
                    </div>
                </div>
            </section>
        </DashboardHoc>
    )

}
export default Subscribers;