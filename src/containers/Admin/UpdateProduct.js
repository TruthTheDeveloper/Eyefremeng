import Form from '../../components/admin/Form';
import DashboardHoc from '../../hoc/Dashboard';
import Modal from '../../components/admin/Modal';
const UpdateProduct = () => {

    return(
        <DashboardHoc>
            <section className="w-full my-6 mx-6 ">
                {/* <Modal/> */}
                <button className="py-2 px-6 bg-red-500 flex ml-auto text-white rounded-md mb-6">Delete</button>
                <Form formText={'Update Product'}/>
                
            </section>
        </DashboardHoc>
    )
}

export default UpdateProduct;