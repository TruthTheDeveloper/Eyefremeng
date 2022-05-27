import Form from "./components/Form";
//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';// <-- import styles to be used
import { faClose } from '@fortawesome/free-solid-svg-icons';

const PrescriptionForm = () => {

    return(
        <section className="pt-16 ">
            <div className="text-xl font-semibold ml-5 mt-3">
                <FontAwesomeIcon />
                <div>
                    <h1>Rectangle TR90 Glasses Frames</h1>
                    <p># 8061-Gray</p>
                </div>
            </div>
            <div>
                <img src="https://eyeframeng.com/wp-content/uploads/2020/12/Theo-WD9511.jpg" />
            </div>
            <Form/>
        </section>
    )
}

export default PrescriptionForm;