import Form from '../../components/admin/Form';
import DashboardHoc from '../../hoc/Dashboard';
const UpdateProduct = () => {

    return(
        <DashboardHoc>
            <section className="w-full my-6 mx-6">
                <Form/>
            </section>
        </DashboardHoc>
    )
}

export default UpdateProduct;