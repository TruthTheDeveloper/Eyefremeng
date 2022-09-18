import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons"; // <-- import styles to be used
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import emailData from "../../emailKey";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useRef } from "react";
const ContactUs = () => {
  // const [formData, setFormData] = useState({
  //     name:"",
  //     email:"",
  //     subject:'',
  //     message:""

  // })

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        emailData.SERVICE_ID,
        emailData.TEMPLATE_ID,
        form.current,
        emailData.PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success(
            " Message Sent Successfully, we wud get back to you shortly",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
        },
        (error) => {
          toast.error("Unable to send Message, Please try again", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  return (
    <section className="py-24">
      <div className="bg-indigo-800 text-center font-semibold text-3xl py-12 text-white">
        <h1>CONTACT US</h1>
      </div>

      <div className="lg:flex justify-center py-12">
        <div className="lg:flex">
          <h1 className="font-semibold text-3xl mx-8">Contact Details</h1>
          <div className="flex mx-4 my-8 lg:my-0">
            <div className="bg-slate-100 w-10 h-10 rounded-full">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-orange-500 text-xl p-2"
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-indigo-800">
                Call Us
              </h1>
              <p className=" font-semibold">+2349136601939</p>
            </div>
          </div>
          <div className="flex  mx-4 my-8 lg:my-0">
            <div className="bg-slate-100 w-10 h-10 rounded-full">
              <FontAwesomeIcon
                icon={faMessage}
                className="text-orange-500 text-xl p-2"
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-indigo-800">
                Our Email
              </h1>
              <p className="font-semibold">support@eyeframeng.com</p>
            </div>
          </div>
        </div>
        <form
          className=" lg:basis-1/2 xl:basis-1/3 px-8 md:px-14 my-8 lg:my-0"
          ref={form}
          onSubmit={sendEmail}
        >
          <h1 className="text-indigo-800 text-2xl md:text-3xl font-semibold py-2">
            Send Us A Message
          </h1>
          <input
            className="w-full p-2 border-2 outline-none my-1"
            type="text"
            name="name"
            placeholder="Name"
          />

          <input
            className="w-full p-2 border-2 outline-none my-1"
            type="email"
            name="email"
            placeholder="Email"
          />

          <input
            className="w-full p-2 border-2 outline-none my-1"
            type="text"
            name="subject"
            placeholder="Subject"
          />

          <textarea
            className="w-full p-2 h-28 border-2 outline-none my-1"
            name="message"
            type="text"
            placeholder="Message"
          />

          <button
            type="submit"
            className="bg-orange-500 py-3 my-4 px-8 rounded-full text-white"
            onClick={sendEmail}
          >
            send message
          </button>
        </form>
      </div>
    </section>
  );
};
export default ContactUs;
