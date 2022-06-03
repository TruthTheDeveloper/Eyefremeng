import DashboardHoc from '../../hoc/Dashboard';
import Subscriber from '../../components/admin/Subscriber';
const Subscribers = () => {

    return (
        <DashboardHoc>
            <section className="w-full overflow-x-auto  ">
                <div className="grid grid-cols-1 justify-center my-6 text-center shadow-md border mx-auto rounded-lg w-[38rem]">
                    <div className=" font-semibold p-2">
                        Email
                    </div>
                </div>
                <Subscriber/>
                <Subscriber/>
                <Subscriber/>
                <Subscriber/>
                <Subscriber/>
            </section>
        </DashboardHoc>
    )

}
export default Subscribers;